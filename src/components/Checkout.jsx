import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import countries from '../db/countries'

const CheckoutComponent = () => {
  const { cart } = useContext(CartContext)

  const [summ, setSumm] = useState(0)

  useEffect(() => {
    let s = 0
    cart.forEach((tour) => {
      s += tour.entity * tour.price
    })

    setSumm(s)
  }, [cart])

  return (
    <div id='checkout'>
      <h1>To'lov</h1>

      <div className='cont'>
        <form>
          <h2>To'lov ma'lumotlari</h2>
          <label htmlFor='firstname' className='required'>
            Ism
          </label>
          <input type='text' name='firstname' id='firstname' required />
          <label htmlFor='lastname' className='required'>
            Familiya
          </label>
          <input type='text' name='lastname' id='lastname' required />
          <label htmlFor='country' className='required'>
            Mamlakat
          </label>
          <select name='country' id='country'>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <label htmlFor='street' className='required'>
            Ko'cha manzili
          </label>
          <input
            type='text'
            name='street'
            id='street'
            required
            placeholder="Uy raqami va ko'cha nomi"
          />
          <input
            type='text'
            name='street2'
            id='street2'
            placeholder='Kvartira, korpus va boshqalar (ixtiyoriy'
          />
          <label htmlFor='city' className='required'>
            Shahar / qishloq
          </label>
          <input type='text' name='city' id='city' required />
          <label htmlFor='region' className='required'>
            Viloyat
          </label>
          <input type='text' name='region' id='region' required />
          <label htmlFor='code' className='required'>
            Pochta indeksi
          </label>
          <input type='text' name='code' id='code' required />
          <label htmlFor='phone' className='required'>
            Telefon raqami
          </label>
          <input type='text' name='phone' id='phone' required />
          <label htmlFor='email' className='required'>
            Elektron pochta
          </label>
          <input type='text' name='email' id='email' required />

          <h2>Qo'chimcha ma'lumot</h2>
          <label htmlFor='extra'>Qo'shimcha kiriting (ixtiyoriy)</label>
          <textarea name='extra' id='extra'></textarea>
        </form>
        <div className='cart'>
          <h2>Buyurtmangiz</h2>
          <table>
            <thead>
              <tr>
                <th>Mahsulot</th>
                <th>Hisoblangan</th>
              </tr>
            </thead>
            <tbody>
              {cart.length &&
                cart.map((tour) => (
                  <tr key={tour.id}>
                    <td>
                      {tour.name} <span>x</span> {tour.entity}
                    </td>
                    <td>{tour.price * tour.entity} USD</td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Jami</td>
                <td>{summ} USD</td>
              </tr>
            </tfoot>
          </table>
          <button type='submit'>Buyurtmani tasdiqlash</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutComponent
