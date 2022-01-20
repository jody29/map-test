import { Link } from 'react-router-dom'
import './more.css'

const More = () => {
    return (
        <div className="more">
            <h2>Meer weten over Zwerfinator?</h2>
            <p>Er zijn nog veel meer projecten van Dirk Groot.</p>
            <p>Zwerfinator heeft een antiflu campagne gevoert waardoor antaflu naar een papieren verpakking is veranderd.</p>
            <Link to='/' className='meerInfo'><p>Meer informatie</p></Link>
            <p>Wil je zelf een impact gaan maken in je buurt?</p>
            <p>Lees hier hoe je zelf actie kan gaan ondernemen.</p>
            <Link to='/' className='meerInfo'><p>Meer informatie</p></Link>
        </div>
    )
}

export default More