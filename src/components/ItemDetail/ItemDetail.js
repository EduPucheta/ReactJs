import React from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../../ItemsContext";
import { db } from "../../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function ItemDetail() {
  const { items, setItems } = useContext(ItemsContext);

  const [data, setData] = useState([]);

  const { id } = useParams();



  useEffect(() => {
    const getProducts = async () => {
      console.log(id); 
      const q = query(collection(db, "products"), where("id", "==", id));
      const querySnapcshot = await getDocs(q);
      const docs = []; 
      querySnapcshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      });
      console.log(docs);
          }; 
    getProducts();
  }, []);

  const addToCart = (z) => {
    setItems([...items, z]);
  };

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
        function filterById(myJson, id) {
          return myJson.filter(function (myJson) {
            return myJson["id"] == id;
          })[0];
        }
        var selectedObject = filterById(myJson, id);
        setData(selectedObject);
      });
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="flex justify-center flex-wrap m-4">
      <div className="w-100  border  rounded-lg  m-2">
        <Link to="#" className="flex justify-center">
          <img
            className="p-8 rounded-t-lg h-60 center " 
            src={data.image}
            alt={`${data.image} foto."`}
          />
        </Link>
        <div className="px-3 pb-3 no-underline">
          <Link to="#" className="no-underline">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              {data.name}
            </h5>
          </Link>
          <div className="flex datas-center justify-between w-40 ">
            <span className="text-2xl font-bold text-gray-900">
              {data.price}
            </span>
          </div>
          <span className="mt-2 text-gray-600 text-sm">{data.description}</span>
        </div>
        <div className="flex justify-center mb-4">
          <button
            to="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm py-2.5 text-center no-underline p-2"
            onClick={() => addToCart(data)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
