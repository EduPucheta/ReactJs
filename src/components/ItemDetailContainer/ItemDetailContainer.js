import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/foto-curv.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailContainer() {
  const [data, setData] = useState([]);
  const { id } = useParams();

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
            class="p-8 rounded-t-lg h-50 center "
            src="../../assets/foto-curv.jpg"
            alt={`${img} foto."`}
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
        <Link
          to="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm py-2.5 text-center no-underline p-2"
        >
          Agregar al carrito
        </Link>
        </div>
      </div> 
    </div>
  );
}
