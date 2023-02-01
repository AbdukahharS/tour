import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import countries from '../db/countries'

const CheckoutComponent = () => {
  const { cart } = useContext(CartContext)
  const [summ, setSumm] = useState(0)

  const sendMessage = (tg, text) => {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}` // The url to request
    const xht = new XMLHttpRequest()
    xht.open('GET', url)
    xht.send()
  }

  useEffect(() => {
    let s = 0
    cart.forEach((tour) => {
      s += tour.entity * tour.price
    })

    setSumm(s)
  }, [cart])

  const handleSubmit = (e) => {
    e.preventDefault()

    const firstname = e.target.firstname.value
    const lastname = e.target.lastname.value
    const country = e.target.country.value
    const street = e.target.street.value
    const street2 = e.target.street2.value
    const city = e.target.city.value
    const region = e.target.region.value
    const code = e.target.code.value
    const phone = e.target.phone.value
    const email = e.target.email.value
    const extra = e.target.extra.value

    const tg = {
      token: '5868906375:AAGrKOcGib4SJxqVWlr24Q4A_S3DCuQhswU',
      chat_id: '1135027664',
    }

    let order = ''

    cart.forEach((tour) => {
      order += `%0A${tour.name}  ${tour.entity}ta`
    })

    sendMessage(
      tg,
      `Yangi buyurtma! 
      %0A%0ABuyurtmachi ma'lumotlari:
      %0AIsm: ${firstname}
      %0AFamiliya: ${lastname}
      %0AMamlakat: ${country}
      %0AKo'cha manzili: ${street}, ${street2}
      %0AShahar yoki qishloq: ${city}
      %0AViloyat: ${region}
      %0APochta indeksi: ${code}
      %0AElektron pochta: ${email}
      %0ATelefon raqami: ${phone}
      %0AQo'shimcha: ${extra}
      %0A%0ABuyurtma:
      ${order}`
    )
  }

  return (
    <div id='checkout'>
      <h1>To'lov</h1>

      <form onSubmit={handleSubmit}>
        <div className='form'>
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
        </div>
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
      </form>
    </div>
  )
}

export default CheckoutComponent
