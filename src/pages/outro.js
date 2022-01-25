import Contact from '../components/contact'
import More from '../components/more'
import outro from '../outro.png'
import path from '../path.svg'
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
            <div className='link2'>
                    <span className='linkContainer2'>
                        <img src={path} alt='path'></img>
                    </span>
             </div>
            <Contact />
            <More />
        </div>
        </>
    )
}

export default Outro