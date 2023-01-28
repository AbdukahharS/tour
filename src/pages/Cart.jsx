import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import CartComponent from '../components/Cart'

const Cart = () => {
  return (
    <div style={{ minWidth: '768px' }}>
      <Header />
      <Navbar />
      <CartComponent />
      <Footer />
    </div>
  )
}

export default Cart
