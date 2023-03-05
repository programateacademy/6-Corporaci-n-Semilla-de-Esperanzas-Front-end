import React from "react";
import "../newuser.css";


export const NewPassword = () => {

    return (
      <div className="container-newuser">

      <div className="container-form">

          <div className="container-form-newuser">

              <span>Cambio de contraseña</span>
              
                  <form action="#">
                  
                      <label for="password-current">Contraseña Actual</label>
                      <input type="text" id="password-current" placeholder="*********" />

                      <label for="password-new">Contraseña Nueva</label>
                      <input type="text" id="password-new" placeholder="*********" />

                      <label for="password-repeat">Repetir Contraseña</label>
                      <input type="text" id="password-repeat" placeholder="*********" />

              
                      <button className="button-newuser" type="submit">Actualizar</button>

                  </form>

          </div>


          <div className="img-newuser">
              
          </div>
      
      </div>



  </div>
)
};

export default NewPassword;