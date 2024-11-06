import React, { useContext } from "react";
import { FavContext } from "./FavouriteContext";
import { CartContext } from "./CartContext";

export default function WishList() {
  const { favItem, removeFromFav } = useContext(FavContext);
  console.log(favItem);
  const { addToCart } = useContext(CartContext)

  const handleAddToCardButton = (item) =>{
        addToCart(item)
        // const isExistInFav = favItem.find(fav => fav.productId == item.productId);
        // if(isExistInFav){

        //     removeFromFav(item.productId)
        // }
  }

  return (
    <div>
      <h1 className="font-semibold text-lg mt-10 mb-10">WishList</h1>
      <div>
        {favItem.length === 0 ? (
          <p className="font-bold text-6xl text-center mb-10"> No items in your wishlist</p>
        ) : (
          favItem.map((item, index) => (
            <div 
            className="flex border-2 rounded-2xl"
            key={index}>
              <div className="w-1/3">
                <img className="rounded-full" src={item.productImage} alt={item.productTitle} />
              </div>
              <div>
             <h2 className="font-semibold text-xl mb-4">{item.productTitle}</h2>
              <p className="font-normal mb-4">Description: <span className="text-slate-400 text-base">{item.description}</span></p>
              <p className="mb-5">price: $ {item.price}</p>
              <button
              className='bg-[#9538E2] text-white btn rounded-full'
              onClick={()=>handleAddToCardButton(item)} >Add to Card</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
