import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
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
        <form>
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
