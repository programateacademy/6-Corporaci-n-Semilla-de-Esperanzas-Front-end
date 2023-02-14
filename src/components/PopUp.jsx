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

          <div className="buttons-popup">
            <button type="submit">Cancelar</button>
            <button type="submit">Aceptar</button>
          </div>

        </div>

      </div> 


    </div>
  );
}