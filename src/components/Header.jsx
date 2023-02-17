import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
   <div>
     <div className='header'>
            <div className='cont-logo'>
                <img className="img-enc" src={require("../images/LogoFundacionSemilla 2.png")} alt="logo"/>
            </div>
            <h1>CORPORACIÓN SEMILLA DE ESPERANZA</h1>
            <div className='cont-icon-form'><Link to='/'><img className="img-plant-icon" src={require("../images/plant.png")} alt="planta"/></Link></div>
        </div>
   </div>
       
  )
}
