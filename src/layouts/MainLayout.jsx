import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { CartContext, CartProvider } from "../components/CartContext";
import { FavProvider } from "../components/FavouriteContext";

export default function MainLayout() {
  return (
    <CartProvider>
      <FavProvider>
        <div className="h-16">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </FavProvider>
    </CartProvider>
  );
}
