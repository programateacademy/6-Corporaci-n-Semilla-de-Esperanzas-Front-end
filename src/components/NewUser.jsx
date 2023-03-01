import React, { useState } from "react";
import "../newuser.css";
import axios from "axios";
import { Link } from "react-router-dom";

let url = "http://localhost:3030";

export const NewUser = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });

    const handleInput =(e)=>{
        let {name, value} = e.target;
        let userData = {...user, [name]: value};
        setUser(userData);
    };

   const register = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(url+"/user/sign", user);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
   };

    return (
    <div className="container-newuser">

        <div className="container-form">

            <div className="container-form-newuser">

                <span>Registro De Nuevo Usuario</span>
                
                    <form onSubmit={register}>
                    
                        <label for="name">Nombre Completo</label>
                        <input name="name" type="text" id="name" onChange={handleInput} value={user.name} placeholder="p. ej. Pedro López" />

                        <label for="email">Email</label>
                        <input name="email" type="text" id="email" onChange={handleInput} value={user.email} placeholder="nombre@ejemplo.com" />

                        <label for="password">Contraseña</label>
                        <input name="password" type="text" id="password" onChange={handleInput} value={user.password} placeholder="*********" />

                        <label for="repeatpassword">Vuelve a escribir la contraseña</label>
                        <input name="" type="text" id="repeatpassword" placeholder="*********" />

                        <label>Rol</label>
                        <select name="role" onChange={handleInput} value={user.role}>
                            <option>----</option>
                            <option>admin</option>
                            <option>user</option>
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