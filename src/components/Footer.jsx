import React from 'react'
import {BiHomeAlt} from "react-icons/bi";
import {BsFillPersonFill} from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
        <div > <BiHomeAlt className='home-icon'></BiHomeAlt></div>
        <div> <img className="img-plant-icon" src={require("../images/plant.png")} alt="planta"/></div>
        <div><BsFillPersonFill  className='admin-icon'></BsFillPersonFill></div>
    </footer>
  )
}
