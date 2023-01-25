import React from 'react'
import { MdArrowDropDown, MdShoppingCart } from 'react-icons/md'
import Logo from '../images/logo-hor.svg'
import Uz from '../images/uzb.svg'

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} className='logo' />
      <div className='lang'>
        <button className='hover'>
          <img src={Uz} />
          <span>UZ</span>
          <MdArrowDropDown />
        </button>
      </div>
      <div className='links'>
        <a href='#' className='hover'>
          Biz haqimizda
        </a>
        <a href='#' className='hover'>
          Qulayliklar
        </a>
        <a href='#' className='hover'>
          Mijozlarimiz fikrlari
        </a>
        <a href='#' className='hover'>
          Tur dastur
        </a>
      </div>
      <button className='cart hover'>
        <MdShoppingCart />
        <span>0 UZS</span>
      </button>
    </nav>
  )
}

export default Navbar
