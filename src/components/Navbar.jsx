import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { MdArrowDropDown, MdShoppingCart } from 'react-icons/md'
import Logo from '../images/logo-hor.png'
import Icon from '../images/icon.jpg'

const Navbar = () => {
  const { cart } = useContext(CartContext)
  const [width, setWidth] = useState(window.innerWidth)
  const [summ, setSumm] = useState(0)

  window.addEventListener('resize', () => setWidth(window.innerWidth))

  useEffect(() => {
    let s = 0
    cart.forEach((tour) => {
      s += tour.price
    })

    setSumm(s)
  }, [cart])

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'uz',
        autoDisplay: false,
      },
      'google_translate_element'
    )
  }
  useEffect(() => {
    var addScript = document.createElement('script')
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    )
    document.body.appendChild(addScript)

    window.googleTranslateElementInit = googleTranslateElementInit
  }, [])

  return (
    <nav>
      <a href='/'>
        <img
          src={width >= 768 ? Logo : Icon}
          alt='NodirahSultan'
          className='logo'
        />
      </a>
      <div id='google_translate_element'></div>
      <div className='links'>
        <div className='hoverdown'>
          <a href='/#about' className='hover'>
            <span>Biz haqimizda</span>
            <MdArrowDropDown />
          </a>
          <div className='dropdown-content'>
            <a href='/#statistics'>Statistik ma'lumotlar</a>
            <a href='/#benefits'>Umra haqida</a>
          </div>
        </div>
        <a href='/#facilities' className='hover'>
          Qulayliklar
        </a>
        <a href='/#review' className='hover'>
          Mijozlarimiz fikrlari
        </a>
        <a href='/#tours' className='hover'>
          Tur dastur
        </a>
      </div>
      <a href='/cart' className='cart hover'>
        <MdShoppingCart />
        <span>{summ} USD</span>
      </a>
    </nav>
  )
}

export default Navbar
