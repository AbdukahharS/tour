import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { MdClose } from 'react-icons/md'

const CartComponent = () => {
  const { cart, dispatch } = useContext(CartContext)
  const [summ, setSumm] = useState(0)

  useEffect(() => {
    let s = 0
    cart.forEach((tour) => {
      s += tour.entity * tour.price
    })

    setSumm(s)
  }, [cart])

  const handleRemove = (id) => {
    const newCart = cart.filter((tour) => tour.id !== id)

    dispatch({ type: 'SET_CART', payload: newCart })
  }

  const handleChange = (e, id) => {
    const newCart = cart.map((tour) => {
      if (tour.id === id) {
        return { ...tour, entity: e.target.value }
      } else {
        return tour
      }
    })

    dispatch({ type: 'SET_CART', payload: newCart })
  }

  return (
    <div id='cart'>
      <h1>Savatcha</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Mahsulot</th>
            <th>Narx</th>
            <th>Miqdor</th>
            <th>Umumiy narx</th>
          </tr>
        </thead>
        <tbody>
          {cart.length &&
            cart.map((tour) => (
              <tr key={tour.id}>
                <td>
                  <button onClick={() => handleRemove(tour.id)}>
                    <MdClose />
                  </button>
                </td>
                <td>
                  <img src={require(`../images/${tour.img}`)} alt={tour.name} />
                </td>
                <td>{tour.name}</td>
                <td>{tour.price.toLocaleString()} UZS</td>
                <td>
                  <input
                    type='number'
                    value={tour.entity}
                    onChange={(e) => handleChange(e, tour.id)}
                  />
                </td>
                <td>{(tour.price * tour.entity).toLocaleString()} UZS</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className='controllers'>
        <div className='clear'>
          <button>Savatchani tozalash</button>
        </div>
        <div className='summ'>
          <h2>Buyurtma miqdori</h2>
          <div>
            <span>Jami</span>
            <span>{summ.toLocaleString()} UZS</span>
          </div>
          <a href='/checkout'>Buyurtma berish</a>
        </div>
      </div>
    </div>
  )
}

export default CartComponent
