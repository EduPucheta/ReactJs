import React from "react";
import { useState, createContext } from "react";

export const ItemsContext = createContext();

const ItemsinStock = [];

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(ItemsinStock);

  //FUNCION PARA AGREGAR UN ITEM

  const addToCart = (product) => {
    const index = items.findIndex((item) => item.id === product.id);
    console.log(index);
    if (index === -1) {
      setItems({
        ...items,
        quantity: 1,
      });
      const updateCart = [...items];
      console.log(updateCart);
    } else {
      items[index].quantity += 1;

      const updateCart2 = [...items];
      console.log(updateCart2);
    }
  };

  //TOTAL DE LA COMPRA
  
  const totalCompra = (x) => {
    let total = 0;
    x.map((e) => {
      
        let monto = e.quantity * e.price;
        total += monto       
      });
      return total 
    }
  
 

  return (
    <ItemsContext.Provider value={{ items, setItems, addToCart, totalCompra }}>
      {children}
    </ItemsContext.Provider>
  );
};
