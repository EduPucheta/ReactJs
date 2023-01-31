import React from 'react'
import Button from '../button'
import Counter from '../counter'  

export default function ItemListContainer({greeting}) {
  return (
    <div className='p-2 flex justify-center content-center flex-col'>
    <h1>{greeting}</h1> 
    <Button title={"Este botón no hace nada (aún)"} />
    <Counter initialCount={5} />
    <Counter initialCount={7} />
    </div>
  )
}
