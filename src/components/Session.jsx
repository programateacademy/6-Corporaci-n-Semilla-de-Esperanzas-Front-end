import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
let url = "http://localhost:3030";  

export const Session = () => { 

    const [data, setData] = useState({
        email: " ",
        password: ""
    });

    const handleInput = (e) =>{
        let {name, value} = e.target;
        let newDatos = {...data, [name]: value};
        setData(newDatos);
    };

    const login = async (e) =>{
        e.preventDefault();
        
            let res = await axios.post(url+"/user/login", data);
            console.log(res.data);
        
    };

  return (
   <div className='admin-login'>
        <h2>Una propuesta para tiempos mejores</h2>
        <div className='login-admin-cont'>
            
            <form onSubmit={login} className='form-login'>
                <div><strong>Administrador</strong></div>                
                <div className='input'>
                    <label>Usuario</label>
                    <input name='email' type='email' className='pass-input'  onChange={handleInput} value={data.user} required/>
                </div>

                <div className='input'>
                    <label>Contraseña</label>
                    <input name='password' type="password"  className='pass-input'  onChange={handleInput} value={data.password} required/>
                </div>

                <div>
                    <input type="checkbox" id="" name="" value=""/>
                    <label>Mostrar Contraseña</label>
                </div>
                <div className='login-btn'>
                   <Link to='/NewUser'><button type='submit'>Ingresar</button></Link>
                </div>                
            </form>
            <div className='img-login-admin'></div>
          
        </div>
   </div>
  )
}
