import React from "react";
import "../agradecimiento.css";


export const Agradecimiento = () => {

    return (
    <div className="container-gratitude">

        <h1>Seguimiento a tu donación</h1>

        <div className="continer-logo-slogan">
            <img className="img-logo" src={require("../images/LogoFundacionSemilla 2.png")} alt="logo"/>
            <span>Una propuesta para tiempos mejores</span>
        </div>

        <div className="description-gratitude">
            <p>¡Hola! (nombre donante)</p>
            <p>¡Gracias por el interés en esta donación! Con su aporte continúa brotando esta semilla de vida en la comuna 3 de Medellín.</p>
        </div>


    </div>
  )
};

export default Agradecimiento;