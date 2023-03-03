import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router';
let url = "http://localhost:3030";

export const Session = () => {
    
    const [redict, setRedict] = useState(false);
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
        try {
            let res = await axios.post(url+"/user/login", data);
            console.log(res.data);            
            setRedict(true);      

        } catch (error) {
            alert(error);
        }
        
        if(redict){
            alert("Bienvenido");
            return <Navigate to={"/"}/>
        }
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
                    <button type='submit'>Ingresar</button>
                </div>                
            </form>
            
            <div className='img-login-admin'></div>
        
        </div>
   </div>
  )
}
