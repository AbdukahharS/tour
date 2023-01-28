import React from 'react'
import CheckoutComponent from '../components/Checkout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Checkout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <CheckoutComponent />
      <Footer />
    </div>
  )
}

export default Checkout
