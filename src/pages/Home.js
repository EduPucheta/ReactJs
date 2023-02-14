import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'


export default function Home() {
  return (
    <>
      <h1 className="text-center m-2">Todos los productos</h1>
      <ItemListContainer />
    </>
  )
}
