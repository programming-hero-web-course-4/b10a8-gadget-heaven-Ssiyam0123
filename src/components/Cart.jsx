

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { FavContext } from "./FavouriteContext";

export default function Cart() {
    const { cartItems } = useContext(CartContext);
    const [sorting, setSortBy] = useState([]);

    const handleBySort = (sort) => {
        if (sort == 'price') {
            const sorted = [...sorting].sort((a, b) => b.price - a.price);
            setSortBy(sorted);
        }
       
    };


    const [total, setTotal] = useState(0);

    useEffect(() => {
        setSortBy(cartItems); 
        const newTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotal(newTotal);
    }, [cartItems]);

    return (
        <div className="mt-10 mb-10">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-lg">Cart</h1>
                <div className="flex items-center space-x-5">
                    <h1 className="font-semibold text-lg">Total cost: {total} $</h1>
                    <details className="dropdown">
                        <summary className="btn m-1">Sort By</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li>
                                <a onClick={() => handleBySort('price')}>Sort By Price</a>
                            </li>
                            
                        </ul>
                    </details>
                    <button className="btn">Purchase</button>
                </div>
            </div>

            <div className="space-y-10 mt-12">
                {sorting.length > 0 ? (
                    sorting.map((cartItem, i) => (
                        <div className="flex justify-between items-center border-2 rounded-2xl" key={i}>
                            <div className="w-1/4 mx-auto mr-7 p-3">
                                <img className="object-cover h-36" src={cartItem.productImage} alt="product" />
                            </div>
                            <div className="w-2/4 mx-auto">
                                <div className="flex justify-between items-center">
                                    <h1 className="font-semibold text-xl mb-4">{cartItem.productTitle}</h1>
                                    <button className="btn btn-outline rounded-full btn-sm">X</button>
                                </div>
                                <p className="font-normal text-lg2 text-slate-400 mb-4">{cartItem.description}</p>
                                <p className="font-semibold text-lg">Price: ${cartItem.price}</p>
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
