import { useRef, useState } from 'react'
import ReactMapGL, { FlyToInterpolator, Marker } from 'react-map-gl'
import mcData from '../data/mcdonalds.json'
import replaceComma from '../filters/replaceComma'
import useSupercluster from 'use-supercluster'
import 'mapbox-gl/dist/mapbox-gl.css'
import './map.css'

export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 52.21483,
        longitude: 5.70388,
        width: '100vw',
        height: '40em',
        zoom: 6.8,
        pitch: 0,
        bearing: 0
    })
    const mapRef = useRef()

    let lastId = 0

    const data = mcData
    const trash = data ? data : []

    const filteredData = trash.filter(d => d.Jaar === 2019)
    
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

    const bounds = mapRef.current ? mapRef.current.getMap().getBounds().toArray().flat() : null

    const { clusters, supercluster } = useSupercluster({
      points,
      bounds,
      zoom: viewport.zoom,
      options: { radius: 50, maxZoom: 18}
    })


    return (
        <>
        <h1>Projecten van Dirk</h1>
          <ReactMapGL
            {...viewport}
            maxZoom={30}
            mapStyle="mapbox://styles/mapbox/dark-v10"
            mapboxApiAccessToken='pk.eyJ1Ijoiam9keTU2OSIsImEiOiJja3g3amJ5MGowMW8wMm5zZTlwN3Fjb2t0In0.99DjUaNvteP2DPXThnnHXg'
            onViewportChange={newviewport => {
              setViewport({ ...newviewport })
            }}
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
                    <div
                      className='cluster-marker'
                      style={{
                        width: `${10 + (pointCount / points.length) * 20}px`,
                        height: `${10 + (pointCount / points.length) * 20}px`,
                      }}
                      onClick={() => {
                        const expansionZoom = Math.min(
                          supercluster.getClusterExpansionZoom(cluster.id),
                          20
                        )

                        setViewport({
                          ...viewport,
                          latitude,
                          longitude,
                          zoom: expansionZoom,
                          transitionInterpolator: new FlyToInterpolator({
                            speed: 2
                          }),
                          transitionDuration: "auto"
                        })
                      }}
                    >
                      {pointCount}
                    </div>

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
                    <circle r={2.5} transform='translate(5, 5)' fill='red'></circle>
                  </svg>
                </Marker>
              )
            })}
            
            
          </ReactMapGL>
        </>
      );
}