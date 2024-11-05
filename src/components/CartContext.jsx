// /* eslint-disable react-refresh/only-export-components */


// import { createContext, useState } from 'react';

// export const CartContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };






import { createContext, useState } from 'react';
import { toast } from 'react-toastify'; // Make sure to import toast

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const isExisted = cartItems.find((cartItem) => cartItem.productId === item.productId);
    if (isExisted) {
      toast.error('Item is already in the cart');
      return; // Early exit if the item exists
    }
    setCartItems((prevItems) => [...prevItems, item]);
    toast.success('Item added to cart');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
