import React from 'react'

export const Session = () => {
  return (
   <div className='admin-login'>
        <h2>Una propuesta para tiempos mejores</h2>
        <div className='login-admin-cont'>
            
            <div className='form-login'>
                <div><strong>Administrador</strong></div>
                <div className='input'>
                    <label>Usuario</label>
                    <input name='password' className='pass-input'  onChange=''  required/>
                </div>

                <div className='input'>
                    <label>Contraseña</label>
                    <input name='password' className='pass-input'  onChange=''  required/>
                </div>

                <div>
                    <input type="checkbox" id="" name="" value=""/>
                    <label>Mostrar Contraseña</label>
                </div>
                <div className='login-btn'>
                    <button>Ingresar</button>
                </div>
            </div>
            
            <div className='img-login-admin'></div>
        
        </div>
   </div>
  )
}
