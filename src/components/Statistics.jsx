import React from 'react'

const Statistics = () => {
  return (
    <div id='statistics'>
      <h2>
        Statistik <span>Ma'lumotlar</span>
      </h2>
      <div className='cont'>
        <div className='card'>
          <div className='inner-card'>
            <span>1 500 +</span>
            <h3>Xursand mijozlar</h3>
          </div>
          <div className='line'></div>
        </div>
        <div className='card'>
          <div className='inner-card'>
            <span>0</span>
            <h3>Xafa mijozlar</h3>
          </div>
          <div className='line'></div>
        </div>
        <div className='card'>
          <div className='inner-card'>
            <span>1 500 +</span>
            <h3>Umumiy mijozlar</h3>
          </div>
          <div className='line'></div>
        </div>
        <div className='card'>
          <div className='inner-card'>
            <span>50 +</span>
            <h3>Yangi mijozlar</h3>
          </div>
          <div className='line'></div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
