import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
} from 'react-icons/fa'
import {
  MdOutlineLocationOn,
  MdLocalPhone,
  MdOutlineEditCalendar,
} from 'react-icons/md'
import Logo from '../images/logo-hor.svg'
import DevLogo from '../images/dev-logo.png'

const Footer = () => {
  return (
    <footer>
      <div className='top'>
        <div className='col'>
          <img src={Logo} alt='NodirahSultan' />
          <p>
            Biz sizga mustaqil, xavfsiz va qiziqarli sayohat qilishingizga
            yordam beramiz!
          </p>
          <div className='scl-media'>
            <a href='https://t.me/nodirahsultan'>
              <FaTelegramPlane />
            </a>
            <a href='#'>
              <FaYoutube />
            </a>
            <a href='#'>
              <FaTiktok />
            </a>
            <a href='https://www.instagram.com/nodirahsultan.tour/'>
              <FaInstagram />
            </a>
            <a href='#'>
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className='col'>
          <h3>Aloqa uchun</h3>
          <div className='line'></div>
          <div className='contacts'>
            <div>
              <MdOutlineLocationOn />{' '}
              <span>Ohongaron, A Karimov ko`chasi, 81-uy</span>
            </div>
            <div>
              <MdLocalPhone /> <span>+998908173277</span>
            </div>
            <div>
              <MdLocalPhone /> <span>+998900663311</span>
            </div>
            <div>
              <MdLocalPhone /> <span>+998909193938</span>
            </div>
            <div>
              <MdOutlineEditCalendar />
              <span>Du - Sha / 09:00 - 18:00</span>
            </div>
            <div>
              <FaEnvelope />
              <span>Pochta indeksi: 110300</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='copy'>
          &copy; 2023 NodirahSultan - Sayohat agentligi. Barcha huquqlar
          himoyalangan.
        </div>
        <div className='developer'>
          <a href='https://abdukahhar.uz'>
            <img src={DevLogo} alt='Shahzad Abdukahhar' />{' '}
            <span>
              {' '}
              - ushbu vebsayt Shahzod Abduqahhor tomonidan yaratildi !
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
