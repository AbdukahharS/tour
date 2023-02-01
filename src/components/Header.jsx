import { useState } from 'react'
import {
  MdLocalPhone,
  MdCalendarToday,
  MdArrowDropDown,
  MdArrowDropUp,
} from 'react-icons/md'
import {
  FaTelegramPlane,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa'
import Uz from '../images/uzb.svg'
import En from '../images/en.svg'
import Ru from '../images/ru.svg'

const Header = () => {
  const [drop, setDrop] = useState(false)

  return (
    <header>
      <div className='cont'>
        {/* <div id='google_translate_element'></div> */}
        <div className='phones wrapper'>
          <MdLocalPhone />
          <a href='tel:+998908173277' className='brdr'>
            <span>+998908173277</span>
          </a>
          <a href='tel:+998900663311' className='brdr'>
            <span>+998900663311</span>
          </a>
          <a href='tel:+998909193938' className='brdr'>
            <span>+998909193938</span>
          </a>
        </div>
        <div className='phone'>
          <MdLocalPhone />
          <a href='tel:+998908173277'>
            <span>+998908173277</span>
          </a>
        </div>
        <div className=' wrapper'>
          <MdCalendarToday />
          <span className='brdr'>Du - Sha / 09:00 - 18:00</span>
        </div>
        <div className='scl-media  wrapper'>
          <a href='https://t.me/nodirahsultan'>
            <FaTelegramPlane />
          </a>
          <a href='youtube.com'>
            <FaYoutube />
          </a>
          <a href='tiktok.com'>
            <FaTiktok />
          </a>
          <a href='https://www.instagram.com/nodirahsultan.tour/'>
            <FaInstagram />
          </a>
          <a href='facebook.com'>
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
