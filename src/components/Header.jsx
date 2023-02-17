import React from 'react'

export const Header = () => {
  return (
   <div>
     <div className='header'>
            <div className='cont-logo'>
                <img className="img-enc" src={require("../images/LogoFundacionSemilla 2.png")} alt="logo"/>
            </div>
            <h1>CORPORACIÓN SEMILLA DE ESPERANZA</h1>
            <div className='cont-icon-form'><img className="img-plant-icon" src={require("../images/plant.png")} alt="planta"/></div>
        </div>
   </div>
       
  )
}
