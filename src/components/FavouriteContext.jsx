/* eslint-disable react/prop-types */
import React, { Children, createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const FavContext = createContext();

export const FavProvider = ({children}) =>{
    const [favItem, setFavItem] = useState([]);

    const addToFav = (item) =>{
        setFavItem((prevItems) => [...prevItems, item])
    }

    return (
        <FavContext.Provider value={{favItem, addToFav}} >
    
            {children}
    
        </FavContext.Provider>
    )
};



