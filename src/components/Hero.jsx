import { useState, useEffect } from 'react'
import Bg1 from '../images/hero-bg1.jpg'
import Bg2 from '../images/hero-bg2.jpg'
import Bg3 from '../images/hero-bg3.jpg'
import Bg4 from '../images/hero-bg4.jpg'

const Hero = () => {
  const [ind, setIn] = useState(0)
  const images = [Bg1, Bg2, Bg3, Bg4]

  useEffect(() => {
    const interval = setInterval(() => {
      if (ind === 3) {
        setIn(0)
      } else {
        setIn((ind) => ind + 1)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [ind])

  const sendMessage = (tg, text) => {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}` // The url to request
    const xht = new XMLHttpRequest()
    xht.open('GET', url)
    xht.send()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.fullname.value
    const phone = e.target.number.value
    const message = e.target.message.value

    if (name && phone && message) {
      const token = '5868906375:AAGrKOcGib4SJxqVWlr24Q4A_S3DCuQhswU',
        chat_id1 = '1135027664',
        chat_id2 = '82349808',
        chat_id3 = '1946341371'

      try {
        await sendMessage(
          { token, chat_id: chat_id1 },
          `Yangi xabar! %0A%0AIsm: ${name}%0ATelefon raqami: ${phone}%0AXabar: ${message}`
        )
        await sendMessage(
          { token, chat_id: chat_id2 },
          `Yangi xabar! %0A%0AIsm: ${name}%0ATelefon raqami: ${phone}%0AXabar: ${message}`
        )
        await sendMessage(
          { token, chat_id: chat_id3 },
          `Yangi xabar! %0A%0AIsm: ${name}%0ATelefon raqami: ${phone}%0AXabar: ${message}`
        )

        e.target.fullname.value = ''
        e.target.number.value = ''
        e.target.message.value = ''

        alert('Xabaringiz muvaffaqiyatli yuborildi!')
      } catch (error) {
        console.error(error)
        alert(error, message)
      }
    } else {
      alert('Familiya-ism, raqam va xabaringizni kiritishingiz shart!')
    }
  }

  return (
    <div className='hero'>
      <div className='bg'>
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              zIndex: i === ind ? '-1' : '-2',
              background: `url(${img})`,
            }}
          ></div>
        ))}
      </div>
      <div className='greetings'>
        <h1>Baxtli onlar biz bilan!</h1>
        <div className='line'></div>
        <p>
          Biz sizlarni eng baxtli onlaringizda yoningizda bo`lamiz, narxlarimiz
          hamyonbop xizmatlar juda sifatli, xodimlarimiz juda samimiy, biz bilan
          maroqli sayohat qilasiz, do'stlar biz sizlarni yaxshi ko'ramiz!
        </p>
      </div>
      <div className='contact'>
        <form onSubmit={handleSubmit}>
          <h2>Ma`lumotlaringizni qoldirsangiz, siz bilan aloqaga chiqamiz!</h2>
          <label htmlFor='fullname'>Familiya va ismingiz</label>
          <input type='text' id='fullname' />
          <label htmlFor='number'>Telefon raqamingiz</label>
          <input type='text' id='number' />
          <label htmlFor='message'>Xabaringiz</label>
          <textarea id='message' rows='8'></textarea>
          <button type='submit'>Yuborish</button>
        </form>
      </div>
    </div>
  )
}

export default Hero
