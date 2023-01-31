import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './style.css'

export default function CartWidget() {
  return (
    <div>
    <FontAwesomeIcon icon={faCartShopping} /> 
    <span class='badge badge-warning' id='lblCartCount'> 0 </span>
    </div>
    )
}
