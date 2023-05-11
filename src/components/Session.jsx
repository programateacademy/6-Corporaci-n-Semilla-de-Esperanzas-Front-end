import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";
let url = "http://localhost:3030";

export const Session = () => {

    const [showPass, setShowPass] = useState(false);
    const [data, setData] = useState({
        email: " ",
        password: ""
    });


    const handleInput = (e) => {
        let { name, value } = e.target;
        let newDatos = { ...data, [name]: value };
        setData(newDatos);
    };

    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(url + "/user/login", data);
            console.log(res.data);

            window.sessionStorage.setItem('token', res.data.token);

            if (res.data.message == "Bienvenido") {
                alert(res.data.message);
                setTimeout(function () { window.location.href = "http://localhost:3000/TableData"; }, 2000);
            } else {
                alert(res.data.message)
            }


        } catch (error) {
            console.log(error);
        }

    };
  
    return (
        <div className='admin-login'>
            <h2>Una propuesta para tiempos mejores</h2>
            <div className='login-admin-cont'>

                <form onSubmit={login} className='form-login'>
                    <div><strong>Iniciar Sesión</strong></div>
                    <div className='input'>
                        <label>Usuario</label>
                        <input name='email' type='email' className='pass-input' onChange={handleInput} value={data.user} required />
                    </div>

                    <div className='input'>
                        <label>Contraseña</label>
                        <input name='password' type={showPass ? "text" : "password"} className='pass-input' onChange={handleInput} value={data.password}  required />
                    </div>

                    <div>
                        <input type="checkbox"
                            onClick={() => setShowPass(!showPass)}
                        />
                        <label>Mostrar Contraseña</label>
                    </div>

                    <div className='login-btn'>
                        <Link to='/PassRecover'><p>¿Olvidaste tu Contraseña?</p></Link>
                        <button type='submit'>Ingresar</button>
                    </div>

                </form>
                <div className='img-login-admin'></div>

            </div>
        </div>
    )
}
