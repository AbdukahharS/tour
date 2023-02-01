const Hero = () => {
  const sendMessage = (tg, text) => {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}` // The url to request
    const xht = new XMLHttpRequest()
    xht.open('GET', url)
    xht.send()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.fullname.value
    const phone = e.target.number.value
    const message = e.target.message.value

    if (name && phone && message) {
      const tg = {
        token: '5868906375:AAGrKOcGib4SJxqVWlr24Q4A_S3DCuQhswU',
        chat_id: '1135027664',
      }

      sendMessage(
        tg,
        `Yangi xabar! %0A%0AIsm: ${name}%0ATelefon raqami: ${phone}%0AXabar: ${message}`
      )
    } else {
      alert('Familiya-ism, raqam va xabaringizni kiritishingiz shart!')
    }
  }

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
