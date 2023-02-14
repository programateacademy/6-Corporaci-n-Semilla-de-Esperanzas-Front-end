import React from 'react';
import {BiHomeAlt} from "react-icons/bi";
import {BsFillPersonFill} from "react-icons/bs";

export const Aside = () => {
  return (
    <div>
        <aside>

            <div className='aside-sup'>
               <div > <BiHomeAlt className='home-icon'></BiHomeAlt></div>
               <div> <img className="img-plant-icon" src={require("../images/plant.png")} alt="planta"/></div>
            </div>

            <div className='aside-inf'>
               <div><BsFillPersonFill  className='admin-icon'></BsFillPersonFill></div>
               <h4>Admin</h4>
            </div>

        </aside>
    </div>
  )
}
