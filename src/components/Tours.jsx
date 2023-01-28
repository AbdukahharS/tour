import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { MdShoppingCart, MdClose } from 'react-icons/md'
import Umrah from '../images/umra.jpeg'
import tours from '../db/tours'

const Tours = () => {
  const { cart, dispatch } = useContext(CartContext)

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
    <div id='tours'>
      <h2>
        Tur <span>Dastur</span>
      </h2>
      <div className='cont'>
        {tours.length &&
          tours.map((tour) => (
            <div className='card' key={tour.id}>
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
  )
}

export default Tours
