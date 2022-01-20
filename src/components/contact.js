import './contact.css'
import facebook from '../facebook.svg'
import instagram from '../instagram.svg'

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <p>Heb je vragen?</p>
            <p>Bereik Dirk Groot via de volgende manieren.</p>

            <label className='label'>Email</label>
            <p className='box'>info@zwerfinator.nl</p>

            <label>Telefoon</label>
            <p className='box'>+31 681503456</p>

            <label className='label'>Socials</label>
            <span className='socials'>
                <a href='https://www.facebook.com/zwerfinator/' target='_blank' rel='noreferrer'>
                <img src={facebook} alt='facebook'></img>
                </a>
                <a href='https://www.instagram.com/zwerfinator/' target='_blank' rel='noreferrer'>
                <img src={instagram} alt='instagram'></img>
                </a>
            </span>


        </div>
    )
}

export default Contact