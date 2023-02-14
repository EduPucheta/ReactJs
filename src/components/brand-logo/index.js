import React from 'react'
import logo from '../../assets/logo_azua2-removebg-preview.png' // import logo from assets
import './style.css' // import style from css
import { Link } from 'react-router-dom'

export default function BrandLogo() {
  return (
    <Link to='/'><img src={logo} alt='Logo de Azua'></img></Link>
  )
}
