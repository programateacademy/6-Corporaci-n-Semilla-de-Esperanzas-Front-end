import axios from 'axios';
import { React, useState } from 'react';
import { Header } from './Header';

const url = "http://localhost:3030"

export const PassRecover = () => {

    const [email, setEmail] = useState('');

    const recovery = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(url + '/user/recovery', { email: email });
            
            if(res.data.message === "Correo enviado"){
                alert(res.data.message+", recibirás un correo en breves momentos");
                setTimeout(function () { window.location.href = "http://localhost:3000/Session"; }, 2000);
            }else{
                alert(res.data.error);
            }
            
        } catch (error) {
            console.log(error);            
        }
    }
    return (
        <div>
            <Header></Header>
            <div className='recover-form-cont'>
                <form className='recover-form' onSubmit={recovery}>
                    <h2>RECUPERACIÓN DE CONTRASEÑA</h2>
                    <label >Por favor ingresa el correo asociado a tu cuenta para recuperar tu contraseña.</label>
                    <input type='email' onChange={e => { setEmail(e.target.value) }} value={email} ></input>
                    <button >Solicitar</button>
                </form >
            </div>
        </div>
    )
}
