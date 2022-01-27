import { useContext, useRef, useState } from 'react'
import ReactMapGL, { FlyToInterpolator, Marker } from 'react-map-gl'
import mcData from '../data/mcdonalds.json'
import replaceComma from '../filters/replaceComma'
import useSupercluster from 'use-supercluster'
import 'mapbox-gl/dist/mapbox-gl.css'
import './map.css'
import { YearContext } from './provider'
import { Filters } from './filter'
import color from '../filters/checkColor'
import cross from '../cross.svg'
import MapLegend from './mapLegend'
import icon from '../icon.svg'
import locationCheck from '../filters/checkLocation'
import back from '../back.svg'
import { Link } from 'react-router-dom'

export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 52.25483,
        longitude: 6.300000,
        width: '100vw',
        height: '100vh',
        zoom: 6.8,
        pitch: 0,
        bearing: 0
    })
    const [showInfo, setShowInfo] = useState(true)
    const [showFilter, setShowFilter] = useState(false)
    const mapRef = useRef()
    const {setYear} = useContext(YearContext)
    const {setLocation} = useContext(YearContext)

    let lastId = 0
    const { selectedYear } = useContext(YearContext)

    const data = mcData
    const trash = data ? data : []

    const filteredData = trash.filter(d => d.Jaar === parseInt(selectedYear))
    
    const points = filteredData.map(data => ({
      type: "Feature",
      properties: { cluster: false, trashId: lastId++, category: data.Category, 'marker-color': color(data.Material.toLowerCase()) },
      geometry: {
        type: "Point",
        coordinates: [
          parseFloat(replaceComma(data.lon)),
          parseFloat(replaceComma(data.lat))
        ]
      }
    }))

    const bounds = mapRef.current ? mapRef.current.getMap().getBounds().toArray().flat() : null

    const { clusters } = useSupercluster({
      points,
      bounds,
      zoom: viewport.zoom,
      options: { radius: viewport.zoom > 10 ? 1000 : 20 , maxZoom: 16}
    })

    const hideInfo = () => {
      viewport.zoom > 7.1 ? setShowInfo(false) : setShowInfo(true)
      viewport.zoom > 16 ? setShowFilter(true) : setShowFilter(false)
    }

    const backToMain = (e) => {
      e.preventDefault()
      setYear(2019)
      setViewport({
        ...viewport,
        latitude: 52.25483,
        longitude: 6.300000,
        zoom: 6.8
      })
      setShowFilter(false)
      setShowInfo(true)
      setLocation(null)
    }

    return (
        <>
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
                      <img 
                      className='cluster-marker '
                      src={icon} 
                      alt='icon'
                      style={{
                        width: `${50 + (pointCount / points.length) * 20}px`,
                        height: `${50 + (pointCount / points.length) * 20}px`,
                      }} 
                      onClick={() => {
                        console.log(longitude, latitude)
                        
                        setShowInfo(false)
                        setShowFilter(true)
                        setLocation(locationCheck(longitude, latitude))

  
                        setViewport({
                          ...viewport,
                          latitude,
                          longitude,
                          zoom: 17,                         
                          transitionInterpolator: new FlyToInterpolator({
                            speed: 1
                          }),
                          transitionDuration: "auto"
                        })
                      }} 
                      >
                      </img>
                  </Marker>
                )
              }
              return (
                <Marker
                  key={`data-${cluster.properties.trashId}`}
                  latitude={latitude}
                  longitude={longitude}
                >
                  <svg width={10} height={10} transform='translate(-5, -5)'>
                    <circle r={3} transform='translate(5, 5)' fill={cluster.properties['marker-color']}></circle>
                  </svg>
                </Marker>
              )
            })}            
            { showInfo ? <div className='tutorial'><h3>Klik op een locatie om meer te ontdekken</h3></div> : null }
            { showInfo ? <Link to='/' className='back'><img src={back} alt='back'></img></Link> : null}
            { showFilter ? <Filters /> : null }
            { showFilter ? <MapLegend /> : null }
            { showFilter ? <img src={cross} alt='cross' className='cross' onClick={
              backToMain
            }></img> : null
            }
          </ReactMapGL>
        </>
      );
}