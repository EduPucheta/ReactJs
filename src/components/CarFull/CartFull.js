import React, { useContext } from "react";
import { ItemsContext } from "../../ItemsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function CartFull() {
  const { items, setItems, addToCart, totalCompra } = useContext(ItemsContext);

  const clearCart = () => {
    setItems([]);
  };

  console.log(items);

  return (
    <>
      <div className="w-full ">
        {items.map((item) => {
          return (
            <div className="flex justify-between flex-row content-center w-full ">
              <img className="w-16 h-16" src={item.image} alt={item.name} />
              <div className="flex flex-col justify-between w-36 ">
                <div>
                  <div> {item.name} </div>
                  <div className="text-xs"> {item.price} </div>
                </div>
                <div className="flex">
                  <div className="border-2 flex justify-around text-xs text-gray-500 w-16">
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              </div>
              <div className="font-semibold w-12 text-rightyou ">
                {item.price * item.quantity}
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-right font-bold w-full">
        Total compra: {totalCompra(items)}
      </div>
      <div className="flex gap-4">
        <button
          to="#"
          className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm py-2.5 text-center no-underline p-2 border-2 border-gray-300"
          onClick={() => clearCart()}
        >
          <FontAwesomeIcon icon={faTrashCan} className="px-2.5" />
          Vaciar carrito
        </button>
        <button
          to="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm py-2.5 text-center no-underline p-2"
        >
          Comprar
        </button>
      </div>
    </>
  );
}
