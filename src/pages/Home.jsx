import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Navbar />
      {/* <div className='wrapper'> */}
      <Hero />
      {/* </div> */}
      <About />
    </div>
  )
}

export default Home
