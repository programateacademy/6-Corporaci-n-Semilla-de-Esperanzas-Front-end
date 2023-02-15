import React from "react";
import "../popup.css";
import Exclamacion from "../images/exclamation.png";

export const PopUp = () => {

  return (
    <div className="container-popup">

      <div className="container-popup">

        <div>
          <img src={Exclamacion} alt="" />
        </div>

        <div className="description-popup">

          <p>Estas seguro que deseas cambiar el estado de la actualización?</p>

          <div className="container-buttons-popup">
            <button className="item-button-popup" type="submit">Cancelar</button>
            <button className="item-button-popup" type="submit">Aceptar</button>
          </div>

        </div>

      </div> 


    </div>
  );
}