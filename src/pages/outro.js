import Contact from '../components/contact'
import More from '../components/more'
import outro from '../outro.png'
import arrow from '../arrow.svg'
import { Link } from 'react-router-dom'
import './outro.css'

const Outro = () => {
    return (
        <>
        <div
        style={{
            backgroundImage: `url(${outro})`
        }}
        className='outroPic'
        >
            <div className='link'>
                <Link to='/map'>
                    <span className='linkContainer'>
                        <img src={arrow} alt='arrow'></img>

                    </span>
                </Link>
             </div>
            <Contact />
            <More />
        </div>
        </>
    )
}

export default Outro