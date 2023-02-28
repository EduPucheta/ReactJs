import React from 'react'
import { useState, useEffect } from 'react'
import ItemCard from '../ItemCard/ItemCard'; 

export default function ItemCardContainer() {

  const [data, setData] = useState([]);

  function getLastPart(url) {
    const parts = url.split('/');
    return parts.at(-1);
  }


if(getLastPart(window.location.href) !== ""){
  var category = getLastPart(window.location.href);
}


const getData = () => {
  fetch("../../product-data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      if (category == null){
        setData(myJson);    }
      else{
        function filterByCategory(myJson, category) {
          return myJson.filter(function (myJson) {
            return myJson["category"] == category;
          });
        }
        var selectedObject = filterByCategory(myJson, category);
        setData(selectedObject);
      }
    });
};

useEffect(() => {
  getData();
}, [category]); 

  return (
    <>
    <div className='flex flex-wrap justify-center'>
    {data.map((item) => {
    return(
      <ItemCard key={item.id} data={item} />)
    })}
    </div>
    </>
  ) 
}


