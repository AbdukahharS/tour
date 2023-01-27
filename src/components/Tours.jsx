import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import Umrah from '../images/umra.jpeg'

const Tours = () => {
  return (
    <div id='tours'>
      <h2>
        Tur <span>Dastur</span>
      </h2>
      <div className='cont'>
        <div className='card'>
          <img src={Umrah} alt='Umrah' />
          <div className='top'>
            <h3>Umra safari</h3>
            <span>1850 $</span>
          </div>
          <div className='bottom'>
            <button>
              <MdShoppingCart />
            </button>
          </div>
        </div>
        <div className='card'>
          <img src={Umrah} alt='Umrah' />
          <div className='top'>
            <h3>Umra safari</h3>
            <span>1850 $</span>
          </div>
          <div className='bottom'>
            <button>
              <MdShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tours
