import mcData from '../data/mcdonalds.json'
import CountUp from 'react-countup'
import './mapinfo.css'
import { Link } from 'react-router-dom'

export default function MapInfo() {

    const data = mcData

    return (
        <div className='mapInfo'>
            <h2>
                Zwerfinator is al {new Date().getFullYear() - 2018} jaar bezig en heeft
            </h2>
            <h1><CountUp start={0} end={data.length} duration={3} useEasing={true}/></h1>
            <h2>stukken afval verzameld</h2>

            <Link to='/map'>Bekijk interactieve kaart</Link>
        </div>
    )
}