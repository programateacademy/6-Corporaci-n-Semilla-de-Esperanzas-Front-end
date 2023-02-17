import React from 'react';
import { Link } from "react-router-dom";

export const Session = () => {
  return (
   <div className='admin-login'>
        <h2>Una propuesta para tiempos mejores</h2>
        <div className='login-admin-cont'>
            
            <div className='form-login'>
                
                <div className='input'>
                    <label>Usuario</label>
                    <input name='password' className='pass-input'  onChange=''  required/>
                </div>

                <div className='input'>
                    <label>Contraseña</label>
                    <input type="password" name='password' className='pass-input' minlength="8"  onChange=''  required/>
                </div>

                <div>
                    <input type="checkbox" id="" name="" value=""/>
                    <label>Mostrar Contraseña</label>
                </div>
                <div className='login-btn'>
                   <Link to='/NewUser'><button>Ingresar</button></Link>
                </div>
            </div>
            
            <div className='img-login-admin'></div>
        
        </div>
   </div>
  )
}
