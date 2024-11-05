import React, { useContext } from "react";
import { FavContext } from "./FavouriteContext";
import { CartContext } from "./CartContext";

export default function WishList() {
  const { favItem } = useContext(FavContext);
  console.log(favItem);
  const { addToCart } = useContext(CartContext)

  const handleAddToCardButton = (item) =>{
        addToCart(item)
  }

  return (
    <div>
      <h1>WishList</h1>
      <div>
        {favItem.length === 0 ? (
          <p>No items in your wishlist</p>
        ) : (
          favItem.map((item, index) => (
            <div 
            className="flex"
            key={index}>
              <div>
                <img src={item.productImage} alt={item.productTitle} />
              </div>
              <div>
             <h2>{item.productTitle}</h2>
              <p>Description: <span>{item.description}</span></p>
              <p>price: $ {item.price}</p>
              <button onClick={()=>handleAddToCardButton(item)} className="btn">Add to Card</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
