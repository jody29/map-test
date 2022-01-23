import './intro.css'
import fotoDirk from '../fotoDirk.png'
import { Link } from 'react-router-dom'
import IntroText from '../components/introText'
import path from '../path.svg'
import Amount from './amount'

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
                
                    <span className='linkContainer'>
                        <img src={path} alt='path'></img>

                    </span>
                
             </div>
             
         </div>
         <Amount />
        </>
    )
}

export default Intro