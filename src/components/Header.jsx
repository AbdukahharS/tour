import React from 'react'
import { MdOutlineEmail, MdLocalPhone, MdCalendarToday } from 'react-icons/md'
import {
  FaTelegramPlane,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className='cont'>
        <div>
          <a href='mailto:myexample@domain.com' className='brdr'>
            <MdOutlineEmail />
            <span>myexample@domain.com</span>
          </a>
          <a href='tel:+998123456789' className='brdr'>
            <MdLocalPhone />
            <span>+998123456789</span>
          </a>
        </div>
        <div>
          <MdCalendarToday />
          <span className='brdr'>Du - Sha / 09:00 - 18:00</span>
        </div>
        <div className='scl-media'>
          <a href='#'>
            <FaTelegramPlane />
          </a>
          <a href='#'>
            <FaYoutube />
          </a>
          <a href='#'>
            <FaTiktok />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
          <a href='#'>
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
