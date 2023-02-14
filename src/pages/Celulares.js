import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

export default function Celulares() {
  console.log('Celulares')
  return (
    <div>     
      <h1 className="text-center m-2">Stands para celulares</h1>
      <ItemListContainer category="stands-para-celulares"/>
    </div>
  )
}


// create a navbar component in react js 