import { useContext, useRef, useState } from 'react'
import ReactMapGL, { FlyToInterpolator, Marker } from 'react-map-gl'
import mcData from '../data/mcdonalds.json'
import replaceComma from '../filters/replaceComma'
import useSupercluster from 'use-supercluster'
import 'mapbox-gl/dist/mapbox-gl.css'
import './map.css'
import MapInfo from './mapInfo'
import { YearContext } from './provider'
import afval from '../afval_1.svg'
import afval2 from '../afval2.svg'

export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 52.21483,
        longitude: 6.300000,
        width: '100vw',
        height: '40em',
        zoom: 6.8,
        pitch: 0,
        bearing: 0
    })
    const [showInfo, setShowInfo] = useState(true)
    const mapRef = useRef()

    let lastId = 0
    const {selectedYear} = useContext(YearContext)

    const data = mcData
    const trash = data ? data : []

    const filteredData = trash.filter(d => d.Jaar === parseInt(selectedYear))
    
    const points = filteredData.map(data => ({
      type: "Feature",
      properties: { cluster: false, trashId: lastId++, category: data.Category },
      geometry: {
        type: "Point",
        coordinates: [
          parseFloat(replaceComma(data.lon)),
          parseFloat(replaceComma(data.lat))
        ]
      }
    }))

    let plastic = []

    for (let i=0; i<filteredData.length; i++) {
      if (filteredData[i].Material.toLowerCase() === 'aluminum') {
        plastic++
      }
    }

    console.log(plastic)

    const bounds = mapRef.current ? mapRef.current.getMap().getBounds().toArray().flat() : null

    const { clusters, supercluster } = useSupercluster({
      points,
      bounds,
      zoom: viewport.zoom,
      options: { radius: 50, maxZoom: 16}
    })

    const hideInfo = () => {
      viewport.zoom > 6.8 ? setShowInfo(false) : setShowInfo(true)
    }

    return (
        <>
        <h1>Projecten van Dirk</h1>
          <ReactMapGL
            {...viewport}
            maxZoom={20}
            mapStyle="mapbox://styles/jody569/ckybfetie0pg114mjsu44f3l6"
            mapboxApiAccessToken='pk.eyJ1Ijoiam9keTU2OSIsImEiOiJja3g3amJ5MGowMW8wMm5zZTlwN3Fjb2t0In0.99DjUaNvteP2DPXThnnHXg'
            onViewportChange={newviewport => {
              setViewport({ ...newviewport })
            }}
            onWheel={hideInfo}
            ref={mapRef}
          >
            {clusters.map(cluster => {
              const [longitude, latitude] = cluster.geometry.coordinates
              const {
                cluster: isCluster,
                point_count: pointCount
              } = cluster.properties

              if (isCluster) {
                return (
                  <Marker
                    key={`cluster-${cluster.id}`}
                    latitude={latitude}
                    longitude={longitude}
                    offsetTop={-25}
                    offsetLeft={-10}
                  >
                    {pointCount >= 2000 ? 
                      <img
                      src={afval2}
                      style={{
                        width: `${80 + (pointCount / points.length) * 20}px`,
                        height: `${80 + (pointCount / points.length) * 20}px`,
                      }} 
                      onClick={() => {
                        const expansionZoom = Math.min(
                          supercluster.getClusterExpansionZoom(cluster.id),
                          30
                        )
  
                        setShowInfo(false)
  
                        setViewport({
                          ...viewport,
                          latitude,
                          longitude,
                          zoom: expansionZoom,
                          transitionInterpolator: new FlyToInterpolator({
                            speed: 1
                          }),
                          transitionDuration: "auto"
                        })
                      }}
                      alt='big'
                      >
                      </img> :
                      <img 
                      src={afval}
                      style={{
                        width: `${50 + (pointCount / points.length) * 20}px`,
                        height: `${50 + (pointCount / points.length) * 20}px`,
                      }} 
                      onClick={() => {
                        const expansionZoom = Math.min(
                          supercluster.getClusterExpansionZoom(cluster.id),
                          30
                        )
  
                        setShowInfo(false)
  
                        setViewport({
                          ...viewport,
                          latitude,
                          longitude,
                          zoom: expansionZoom,
                          transitionInterpolator: new FlyToInterpolator({
                            speed: 1
                          }),
                          transitionDuration: "auto"
                        })
                      }}
                      alt='small'
                      ></img>
}
                  </Marker>
                )
              }

              return (
                <Marker
                  key={`data-${cluster.properties.trashId}`}
                  latitude={latitude}
                  longitude={longitude}
                >
                  <svg width={10} height={10}>
                    <circle r={2.5} transform='translate(5, 5)' fill='#31A3DD'></circle>
                  </svg>
                </Marker>
              )
            })}
            
            { showInfo ? <MapInfo /> : null}
          </ReactMapGL>
        </>
      );
}