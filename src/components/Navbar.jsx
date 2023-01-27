import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { MdArrowDropUp, MdArrowDropDown, MdShoppingCart } from 'react-icons/md'
import Logo from '../images/logo-hor.png'
import Uz from '../images/uzb.svg'
import En from '../images/en.svg'
import Ru from '../images/ru.svg'

const Navbar = () => {
  const { cart } = useContext(CartContext)
  const [drop, setDrop] = useState(false)
  const [summ, setSumm] = useState(0)

  useEffect(() => {
    let s = 0
    cart.forEach((tour) => {
      s += tour.price
    })

    setSumm(s)
  }, [cart])

  return (
    <nav>
      <img src={Logo} alt='NodirahSultan' className='logo' />
      <div className='lang'>
        <button className='hover'>
          <img src={Uz} alt='flag' />
          <span>UZ</span>
        </button>
        <button className='hover' onClick={() => setDrop((d) => !d)}>
          {drop ? <MdArrowDropUp /> : <MdArrowDropDown />}{' '}
        </button>
        <div className={`content ${drop && 'drop'}`}>
          <button className='hover'>
            <img src={En} alt='flag' />
            <span>EN</span>
          </button>
          <button className='hover'>
            <img src={Ru} alt='flag' />
            <span>RU</span>
          </button>
        </div>
      </div>
      <div className='links'>
        <div className='hoverdown'>
          <a href='#about' className='hover'>
            <span>Biz haqimizda</span>
            <MdArrowDropDown />
          </a>
          <div className='dropdown-content'>
            <a href='#statistics'>Statistik ma'lumotlar</a>
            <a href='#benefits'>Umra haqida</a>
          </div>
        </div>
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
        <span>{summ} USD</span>
      </button>
    </nav>
  )
}

export default Navbar
