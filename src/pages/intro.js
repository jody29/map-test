import './intro.css'
import fotoDirk from '../fotoDirk.png'
// import { Link } from 'react-router-dom'
import IntroText from '../components/introText'
import path from '../path.svg'
import Amount from './amount'
import zwerfinator from '../zwerfinator.svg'
import Map from '../components/map'

const Intro = () => {
    return (
        <>
         <img src={zwerfinator} alt='logo' className='logo'></img>
         <div 
         style={{
             backgroundImage: `url(${fotoDirk})`
         }}
         className='fotoDirk'
         >
             <IntroText />
             <div className='link'>
                
                    <span className='linkContainer'>
                        <img src={path} alt='path'></img>

                    </span>
                
             </div>
             
         </div>
         <Amount />
         <Map />
        </>
    )
}

export default Intro