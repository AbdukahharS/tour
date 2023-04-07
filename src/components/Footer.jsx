import {
  // FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  // FaTiktok,
  // FaYoutube,
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
        <div className='col' id='contacts'>
          <img src={Logo} alt='NodirahSultan' />
          <p>
            Biz sizga mustaqil, xavfsiz va qiziqarli sayohat qilishingizga
            yordam beramiz!
          </p>
          <div className='scl-media'>
            <a href='https://telegram.com'>
              <FaTelegramPlane />
            </a>
            {/* <a href='youtube.com'>
              <FaYoutube />
            </a>
            <a href='tiktok.com'>
              <FaTiktok />
            </a> */}
            <a href='https://www.instagram.com'>
              <FaInstagram />
            </a>
            {/* <a href='facebook.com'>
              <FaFacebookF />
            </a> */}
          </div>
        </div>
        <div className='col'>
          <h3>Aloqa uchun</h3>
          <div className='line'></div>
          <div className='contacts'>
            <div>
              <MdOutlineLocationOn />{' '}
              <span>Toshken shahar, Yakkasaroy tumani, Bobur ko'chasi, 77</span>
            </div>
            <div>
              <MdLocalPhone /> <span>+998900663311</span>
            </div>
            <div>
              <MdLocalPhone /> <span>+998770663311</span>
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
        <div className='col'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d914.6603605750195!2d69.260290040217!3d41.270910722554966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15d03016c5d18df6!2zNDHCsDE2JzE2LjMiTiA2OcKwMTUnMzYuNiJF!5e0!3m2!1sen!2smy!4v1675219626664!5m2!1sen!2smy'
            width='100%'
            height='100%'
            style={{ border: 0, minHeight: '300px' }}
            allowFullScreen=''
            loading='lazy'
            title='location'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
      <div className='bottom'>
        <div className='copy'>
          &copy; 2023 NodirahSultan - Sayohat agentligi. Barcha huquqlar
          himoyalangan.
        </div>
        <div className='developer'>
          <a href='https://abdukahhar.uz' target='_blank'>
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
