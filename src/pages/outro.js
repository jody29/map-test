import Contact from '../components/contact'
import More from '../components/more'
import outro from '../outro.png'
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
            <Contact />
            <More />
        </div>
        </>
    )
}

export default Outro