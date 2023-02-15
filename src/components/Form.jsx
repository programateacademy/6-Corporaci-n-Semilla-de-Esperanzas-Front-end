import React, {useState} from 'react'




export const Form = () => {
    const [natural, setNatural] = useState(false);
    
    const handleNatural = () => {
        setNatural(true);
    }
    const handleJuridica = () => {
        setNatural(false);
    }
console.log(natural)
  return (
   <div>
    <div className='cont-form'>
         
        <form className='donation-form'>

            <h1>¡Haz tu donación a Semillas de Esperanza hoy!</h1>
            <h2>Tipo de persona</h2>
            <div className='person-type'>
                <div>
                    <input className='radio-input' type="radio" id="html" name="person" value="#"  onClick={handleNatural}></input> 
                    <label>Natural</label>
                </div>
                <div>
                    <input className='radio-input' type="radio" id="html" name="person" value="#" onClick={handleJuridica} defaultChecked></input> 
                    <label>Jurídica</label>
                </div>
            </div>
            <div className='form-fields'>
            {natural ? 
            (<><div><input type='text' placeholder='Nombre'></input></div>
            <div><input type='text' placeholder='Apellido'></input></div></>): 
            (<><div><input type='text' placeholder='Nit'></input></div>
            <div><input type='text' placeholder='Razón Social'></input></div></>)
            }
                
                <div><input type='email' placeholder='Email'></input></div>
                <div><input type='email' placeholder='Celular'></input></div>
                <div className='req'>Tipo de donación</div>
                <div>
                    <select>
                        <option value=''>Seleccione</option>
                        <option value='Inf'>Infrasestructura</option>
                        <option value='Coc'>Cocina</option>
                        <option value='Com'>Comedor</option>
                        <option value='Hue'>Huerta</option>
                        <option value='Otr'>Otro</option>
                    </select>
                </div>
                <div className='req'>Requiere Certificado</div>
                <div className='certif'>
                     <div>
                        <input className='radio-input' type="radio" id="cert" name="cert" value="#"></input> 
                        <label>Si</label>
                    </div>
                    <div>
                        <input  className='radio-input' type="radio" id="cert" name="cert" value="#" defaultChecked></input> 
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
                    <label className='terms'>He leído y acepto el aviso de privaciodad y política de protección de datos personales.</label>
                </div>
                <div>
                    <button>Enviar</button>
                </div>
            </div>
        </form>
    </div>
    </div>)
}
