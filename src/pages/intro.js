import './intro.css'
import fotoDirk from '../fotoDirk.png'
import { Link } from 'react-router-dom'
import IntroText from '../components/introText'
import arrow from '../arrow.svg'

const Intro = () => {
    return (
        <>
         <div 
         style={{
             backgroundImage: `url(${fotoDirk})`
         }}
         className='fotoDirk'
         >
             <IntroText />
             <div className='link'>
                <Link to='/map'>
                    <span className='linkContainer'>
                        <img src={arrow} alt='arrow'></img>

                    </span>
                </Link>
             </div>
         </div>
        </>
    )
}

export default Intro