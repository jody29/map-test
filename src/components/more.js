import './more.css'

const More = () => {
    return (
        <div className="more">
            <h2>Meer weten over Zwerfinator?</h2>

            <p>Er zijn nog veel meer projecten van Dirk Groot.</p>
            <p>Zwerfinator heeft een antiflu campagne gevoert waardoor antaflu naar een waspapieren verpakking is veranderd.</p>
            <a href='http://zwerfinator.nl/antaflu-het-meest-gemeten-snoepje-van-nederland/' target='_blank' rel='noreferrer' className='meerInfo'>Meer informatie</a>
            
            <p>Wil je zelf een impact gaan maken in je buurt?</p>
            <p>Lees hier hoe je zelf actie kan gaan ondernemen.</p>
            <a href='https://zwerfinator.nl/rent-a-zwerfinator/' target='_blank' rel='noreferrer' className='meerInfo'>Meer informatie</a>
        </div>
    )
}

export default More