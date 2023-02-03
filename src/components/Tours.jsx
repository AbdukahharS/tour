import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { MdShoppingCart, MdClose } from 'react-icons/md'
import Umrah from '../images/umra.jpeg'
import tours from '../db/tours'

const Tours = () => {
  const { cart, dispatch } = useContext(CartContext)
  const [img, setImg] = useState(null)

  const handleOpen = (e, ad) => {
    const tag = e.target.tagName

    if (tag !== 'BUTTON' && tag !== 'svg' && tag !== 'path') setImg(ad)
  }

  const handleClose = () => {
    setImg(null)
  }

  const handleClick = (id) => {
    const tour = tours.filter((t) => t.id === id)
    const newCart = cart.concat([{ ...tour[0], entity: 1 }])

    dispatch({ type: 'SET_CART', payload: newCart })
  }

  const handleRemove = (id) => {
    const newCart = cart.filter((t) => t.id !== id)

    dispatch({ type: 'SET_CART', payload: newCart })
  }

  return (
    <>
      <div id='tours'>
        <h2>
          Tur <span>Dastur</span>
        </h2>
        <div className='cont'>
          {tours.length &&
            tours.map((tour) => (
              <div
                className='card'
                key={tour.id}
                onClick={(e) => handleOpen(e, tour.ad)}
                style={{ cursor: 'pointer' }}
              >
                <img src={Umrah} alt='Umrah' />
                <div className='top'>
                  <h3>{tour.name}</h3>
                  <span>{tour.price} $</span>
                </div>
                <div className='bottom'>
                  {cart.find((t) => t.id === tour.id) ? (
                    <button onClick={() => handleRemove(tour.id)}>
                      <MdClose />
                    </button>
                  ) : (
                    <button onClick={() => handleClick(tour.id)}>
                      <MdShoppingCart />
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className='modal'
        style={{ display: img !== null ? 'flex' : 'none' }}
      >
        <div className='cont'>
          {img !== null && (
            <img src={require(`../images/ads/${img}`)} alt='Gallery' />
          )}
          <button className='close' onClick={handleClose}>
            <MdClose />
          </button>
        </div>
      </div>
    </>
  )
}

export default Tours
