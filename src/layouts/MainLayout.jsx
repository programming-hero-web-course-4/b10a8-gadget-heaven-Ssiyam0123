import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { CartContext, CartProvider } from '../components/CartContext'

export default function MainLayout() {
  return (
   <CartProvider>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
   </CartProvider>
  )
}

