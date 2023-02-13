import React from 'react'

export const Form = () => {
  return (
    <div className='cont-form'>
        <form className='donation-form'>

            <h1>¡Haz tu donación a Semillas de Esperanza hoy!</h1>
            <h2>Tipo de persona</h2>
            <div className='person-type'>
                <div>
                    <input className='radio-input' type="radio" id="html" name="person" value="#"></input> 
                    <label>Natural</label>
                </div>
                <div>
                    <input className='radio-input' type="radio" id="html" name="person" value="#"></input> 
                    <label>Jurídica</label>
                </div>
            </div>
            <div className='form-fields'>
                <div><input type='text' placeholder='Nit'></input></div>
                <div><input type='text' placeholder='Razón Social'></input></div>
                <div><input type='email' placeholder='Email'></input></div>
                <div><input type='email' placeholder='Celular'></input></div>
                <div>Tipo de donación</div>
                <div>
                    <select>
                        <option>Seleccione</option>
                        <option>Infrasestructura</option>
                        <option>Cocina</option>
                        <option>Comedor</option>
                        <option>Huerta</option>
                        <option>Otro</option>
                    </select>
                </div>
                <div>Requiere Certificado</div>
                <div className='certif'>
                     <div>
                        <input className='radio-input' type="radio" id="html" name="cert" value="#"></input> 
                        <label>Si</label>
                    </div>
                    <div>
                        <input  className='radio-input' type="radio" id="html" name="cert" value="#"></input> 
                        <label>No</label>
                    </div>
                </div>
                
               
            </div>
            <div className='aditional-comments'>
                    <input placeholder='Comentario Adicional' type='text'></input>
            </div>
            <div className='send-form'>
                <div className='terms-form'>
                    <input className='radio-input' type="checkbox" id="html" name="jp" value="#"></input> 
                    <label>He leído y acepto el aviso de privaciodad y política de protección de datos personales.</label>
                </div>
                <div>
                    <button>Enviar</button>
                </div>
            </div>
        </form>
    </div>
  )
}
