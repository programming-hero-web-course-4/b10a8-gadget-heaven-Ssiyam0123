

import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cartItems } = useContext(CartContext); // Access context

  return (
    <div className="mt-10 mb-10 ">
      <div className="flex items-center justify-between">
        <h1>Cart</h1>
        <div className="flex items-center space-x-5">
          <h1>Total cost: </h1>
          <button className="btn btn-outline">Sort by Price</button>
          <button className="btn">Purchase</button>
        </div>
      </div>

      <div className="space-y-10 mt-12">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem, i) => (
            <div
            className="flex justify-between items-center border-2 rounded-2xl"
            key={i}>

                <div className="w-1/4 mx-auto mr-7 p-3">
                    <img className="w-full" src={cartItem.productImage}/>
                </div>
                <div className="w-2/4 mx-auto">
                    <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-xl mb-4">{cartItem.productTitle}</h1>
                    <button className="btn btn-outline rounded-full btn-sm">X</button>
                    </div>
                    <p className="font-normal text-lg2 text-slate-400 mb-4">{cartItem.description}</p>
                    <p className="font-semibold text-lg">Price:${cartItem.price}</p>
                </div>

            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
