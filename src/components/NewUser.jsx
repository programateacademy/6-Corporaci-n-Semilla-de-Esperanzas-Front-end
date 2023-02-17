import React from "react";
import "../newuser.css";
import { Link } from "react-router-dom";

export const NewUser = () => {

    return (
    <div className="container-newuser">

        <div className="container-form">

            <div className="container-form-newuser">

                <span>Registro De Nuevo Usuario</span>
                
                    <form action="#">
                    
                        <label for="name">Nombre Completo</label>
                        <input type="text" id="name" placeholder="p. ej. Pedro López" />

                        <label for="email">Email</label>
                        <input type="text" id="email" placeholder="nombre@ejemplo.com" />

                        <label for="password">Contraseña</label>
                        <input type="text" id="password" placeholder="*********" />

                        <label for="repeatpassword">Vuelve a escribir la contraseña</label>
                        <input type="text" id="repeatpassword" placeholder="*********" />

                        <label for="repeatpassword">Rol</label>
                        <select>
                            <option>----</option>
                            <option>Administrador</option>
                            <option>Usuario</option>
                        </select>
                        

                        <Link to='/'><button className="button-newuser" type="submit">Crear Usuario</button></Link>

                    </form>

            </div>


            <div className="img-newuser">
                
            </div>
        
        </div>



    </div>
  )
};

export default NewUser;