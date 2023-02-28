import React, { useContext } from "react";
import CartFull from "../components/CarFull/CartFull";
import { ItemsContext } from "../ItemsContext";
import CartEmpty from "../components/CarEmpty/CartEmpty";

export default function CartPage() {
  const { items } = useContext(ItemsContext);

  return (
    <>
      <h1 className="text-center m-2 text-lg">Tu carrito de compras</h1>
      <div className="flex justify-center items-center flex-col gap-4 m-4">
        <div className="flex justify-center flex-col flex-wrap m-0 md:m-4 items-center rounded shadow w-10/12 px-24  bg-white p-6 gap-4 ">
          {items.length === 0 ? <CartEmpty /> : <CartFull />}
        </div>
      </div>
    </>
  );
}
