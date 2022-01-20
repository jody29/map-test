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

            <p>
            Zwerfinator laat zien dat er veel meer zwerfaval is dan we denken. Door middel van meten en onderzoek kan dit visueel gemaakt worden in een interactieve kaart.
            </p>

            <Link to='/outro'>Zie meer</Link>
        </div>
    )
}