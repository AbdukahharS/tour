import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <div className='wrapper'>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default Home
