import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import countries from '../db/countries'
import { firestore } from '../config/firebase'

const CheckoutComponent = () => {
  const { cart } = useContext(CartContext)
  const [summ, setSumm] = useState(0)
  const [number, setNumber] = useState(0)
  const [modal, setModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = (
    tg,
    firstname,
    lastname,
    country,
    street,
    street2,
    city,
    region,
    code,
    email,
    phone,
    extra,
    order,
    orderNumber
  ) => {
    const text = `Yangi buyurtma! 
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
    %0A%0ABuyurtma Raqami: ${orderNumber}
    %0A%0ABuyurtma:
    ${order}`
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

  // useEffect(() => {
  //   window.Paycom.Button('#form-payme', '#button-container')
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setModal(true)
    setIsLoading(true)

    const docRef = doc(firestore, 'order', 'k7xnK5HvZtCwckMEkCs7')
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...docSnap.data() }
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

      try {
        const token = process.env.REACT_APP_BOT_TOKEN,
          chat_id1 = process.env.REACT_APP_CHAT_ID1,
          chat_id2 = process.env.REACT_APP_CHAT_ID2,
          chat_id3 = process.env.REACT_APP_CHAT_ID3
        let order = ''
        cart.forEach((tour) => {
          order += `%0A${tour.name}  ${tour.entity}ta`
        })
        sendMessage(
          { token, chat_id: chat_id1 },
          firstname,
          lastname,
          country,
          street,
          street2,
          city,
          region,
          code,
          email,
          phone,
          extra,
          order,
          data.number
        )
        sendMessage(
          { token, chat_id: chat_id2 },
          firstname,
          lastname,
          country,
          street,
          street2,
          city,
          region,
          code,
          email,
          phone,
          extra,
          order
        )
        sendMessage(
          { token, chat_id: chat_id3 },
          firstname,
          lastname,
          country,
          street,
          street2,
          city,
          region,
          code,
          email,
          phone,
          extra,
          order
        )
        e.target.firstname.value = ''
        e.target.lastname.value = ''
        e.target.country.value = ''
        e.target.street.value = ''
        e.target.street2.value = ''
        e.target.city.value = ''
        e.target.region.value = ''
        e.target.code.value = ''
        e.target.phone.value = ''
        e.target.email.value = ''
        e.target.extra.value = ''
        await updateDoc(docRef, {
          number: data.number + 1,
        })
        // alert(
        //   "Buyurtmangiz muvaffaqiyatli yuborildi! Bizni tanlaganingiz uchun rahmat. Xodimlarimiz yaqin orada siz bilan bog'lanishadi"
        // )
        setModal(true)
        setNumber(data.number)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        alert(error.message)
        setModal(false)
        setIsLoading(false)
      }
    } else {
      setModal(false)
      setIsLoading(false)
      console.log('No such document!')
      alert(
        'Muammo chiqdi! Internet bilan aloqangizni tekshirishingizni yoki sahifani yangilashingizni maslahat beramiz.'
      )
    }
  }

  return (
    <>
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
                      <td>{(tour.price * tour.entity).toLocaleString()} UZS</td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Jami</td>
                  <td>{summ.toLocaleString()} UZS</td>
                </tr>
              </tfoot>
            </table>
            <button type='submit'>Buyurtmani tasdiqlash</button>
          </div>
        </form>
      </div>
      <div className='modal' style={{ display: modal ? 'flex' : 'none' }}>
        {isLoading && <div className='loader'></div>}
        <div className='paymentCont'>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>To'lov</h2>
          <form method='POST' action='https://checkout.paycom.uz'>
            <input
              type='hidden'
              name='merchant'
              value='64097ece71f8efd025665675'
            />
            <input type='hidden' name='amount' value={summ * 100} />
            <input type='hidden' name='account[order_id]' value={number} />
            <button
              type='submit'
              style={{
                cursor: 'pointer',
                border: '1px solid #ebebeb',
                borderRadius: '6px',
                background: 'linear-gradient(to top, #f1f2f2, white)',
                width: '200px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                alt='Payment with Payme'
                style={{ width: '160px', height: '20px' }}
                src='http://cdn.payme.uz/buttons/button_big_UZ.svg'
              />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CheckoutComponent
