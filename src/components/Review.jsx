import React from 'react'
import Carousel from 'react-multi-carousel'
import Rahimova from '../images/rahimova.jpg'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 480 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
}

const Review = () => {
  return (
    <div id='review'>
      <h2>
        Mijozlarimiz <span>fikrlari</span>
      </h2>
      <div className='cont'>
        <Carousel responsive={responsive}>
          <div className='card'>
            <p>
              Menga sayohat judayam yoqdi, shunday maroqli sayohat qilishimga
              yordam bergan NodirahSulton tashkilotiga katta rahmat!
            </p>
            <div>
              <img src={Rahimova} alt='Rahimova' />
              <h3>Sevara Rahimova</h3>
            </div>
          </div>
          <div className='card'>
            <p>
              Menga sayohat judayam yoqdi, shunday maroqli sayohat qilishimga
              yordam bergan NodirahSulton tashkilotiga katta rahmat!
            </p>
            <div>
              <img src={Rahimova} alt='Rahimova' />
              <h3>Sevara Rahimova</h3>
            </div>
          </div>
          <div className='card'>
            <p>
              Menga sayohat judayam yoqdi, shunday maroqli sayohat qilishimga
              yordam bergan NodirahSulton tashkilotiga katta rahmat!
            </p>
            <div>
              <img src={Rahimova} alt='Rahimova' />
              <h3>Sevara Rahimova</h3>
            </div>
          </div>
          <div className='card'>
            <p>
              Menga sayohat judayam yoqdi, shunday maroqli sayohat qilishimga
              yordam bergan NodirahSulton tashkilotiga katta rahmat!
            </p>
            <div>
              <img src={Rahimova} alt='Rahimova' />
              <h3>Sevara Rahimova</h3>
            </div>
          </div>
          <div className='card'>
            <p>
              Menga sayohat judayam yoqdi, shunday maroqli sayohat qilishimga
              yordam bergan NodirahSulton tashkilotiga katta rahmat!
            </p>
            <div>
              <img src={Rahimova} alt='Rahimova' />
              <h3>Sevara Rahimova</h3>
            </div>
          </div>
          <div className='card'>
            <p>
              Menga sayohat judayam yoqdi, shunday maroqli sayohat qilishimga
              yordam bergan NodirahSulton tashkilotiga katta rahmat!
            </p>
            <div>
              <img src={Rahimova} alt='Rahimova' />
              <h3>Sevara Rahimova</h3>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Review
