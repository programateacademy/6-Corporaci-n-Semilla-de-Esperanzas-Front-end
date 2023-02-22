import React, { useState } from "react";
import "../newuser.css";
import axios from "axios";
import { Link } from "react-router-dom";

let url = "http://localhost:3030";

export const NewUser = () => {

    const [user, setUser] = useState({
        names: "",
        email: "",
        password: ""
    });

    const handleInput =(e)=>{
        let {name, value} = e.target;
        let userData = {... user, [name]: value};
        setUser(userData);
    };

   const register = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(url+"/user/sign", user);
        } catch (error) {
            console.log(error);
        }
   };

    return (
    <div className="container-newuser">

        <div className="container-form">

            <div className="container-form-newuser">

                <span>Registro De Nuevo Usuario</span>
                
                    <form action="#">
                    
                        <label for="name">Nombre Completo</label>
                        <input name="names" type="text" id="name" placeholder="p. ej. Pedro López" />

                        <label for="email">Email</label>
                        <input name="email" type="text" id="email" placeholder="nombre@ejemplo.com" />

                        <label for="password">Contraseña</label>
                        <input name="password" type="text" id="password" placeholder="*********" />

                        <label for="repeatpassword">Vuelve a escribir la contraseña</label>
                        <input name="" type="text" id="repeatpassword" placeholder="*********" />

                        <label>Rol</label>
                        <select>
                            <option>----</option>
                            <option>Administrador</option>
                            <option>Usuario</option>
                        </select>
                        
                        <button className="button-newuser">Enviar</button>
                        {/*<Link className="button-newuser-link" to='/'><button className="button-newuser" type="submit">Crear Usuario</button></Link>*/}

                    </form>

            </div>


            <div className="img-newuser">
                
            </div>
        
        </div>



    </div>
  )
};

export default NewUser;