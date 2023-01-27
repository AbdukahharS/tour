import React from 'react'
import { MdArrowDropDown, MdShoppingCart } from 'react-icons/md'
import Logo from '../images/logo-hor.png'
import Uz from '../images/uzb.svg'

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt='NodirahSultan' className='logo' />
      <div className='lang'>
        <button className='hover'>
          <img src={Uz} alt='flag' />
          <span>UZ</span>
          <MdArrowDropDown />
        </button>
      </div>
      <div className='links'>
        <a href='#about' className='hover'>
          Biz haqimizda
        </a>
        <a href='#facilities' className='hover'>
          Qulayliklar
        </a>
        <a href='#review' className='hover'>
          Mijozlarimiz fikrlari
        </a>
        <a href='#tours' className='hover'>
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
