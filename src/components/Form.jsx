import axios from 'axios';
import React, {useState} from 'react';

let url = "http://localhost:3030";

export const Form = () => {

    const [type, setType] = useState('');
    const [nit_cedula, setNitCed] = useState('');
    const [names, setNames] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [destination, setDestination] = useState('');
    const [certification, setCertification] = useState('');
    const [aditional, setAditional] = useState('');    

    const addDonation = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(url+'/forms/new', {type: type, nit_cedula: nit_cedula, name: names, email: email, phone: phone, destination_don: destination, certification: certification, aditional: aditional});
            console.log(res);
            console.log("formulario agregado")
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='cont-form'>
        <form className='donation-form' onSubmit={addDonation}>

            <h1>¡Haz tu donación a Semillas de Esperanza hoy!</h1>
            <h2>Tipo de persona</h2>
            <div className='person-type'>
                <div>
                    <input className='radio-input' type="radio" id="html" name="person" onChange={e=>{setType(e.target.value)}} value={type}></input> 
                    <label>Natural</label>
                </div>
                <div>
                    <input className='radio-input' type="radio" id="html" name="person" value="#"></input> 
                    <label>Jurídica</label>
                </div>
            </div>
            <div className='form-fields'>
                <div><input type='text' name='nit_cedula' placeholder='Nit' onChange={e=>{setNitCed(e.target.value)}} value={nit_cedula}></input></div>
                <div><input type='text' name='names' placeholder='Razón Social' onChange={e=>{setNames(e.target.value)}} value={names}></input></div>
                <div><input type='text' name='email' placeholder='Email' onChange={e=>{setEmail(e.target.value)}} value={email}></input></div>
                <div><input type='text' name='phone' placeholder='Celular' onChange={e=>{setPhone(e.target.value)}} value={phone}></input></div>
                <div>Tipo de donación</div>
                <div>
                    <select onChange={e=>{setDestination(e.target.value)}} value={destination}>
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
                        <input className='radio-input' type="radio" id="html" name="cert" onChange={e=>{setCertification(e.target.value)}} value={certification}></input> 
                        <label>Si</label>
                    </div>
                    <div>
                        <input  className='radio-input' type="radio" id="html" name="cert" value="#"></input> 
                        <label>No</label>
                    </div>
                </div>
                
               
            </div>
            <div className='aditional-comments'>
                    <input placeholder='Comentario Adicional' type='text' onChange={e=>{setAditional(e.target.value)}} value={aditional}></input>
            </div>
            <div className='send-form'>
                <div className='terms-form'>
                    <input className='radio-input' type="checkbox" id="html" name="jp" value="#"></input> 
                    <label>He leído y acepto el aviso de privaciodad y política de protección de datos personales.</label>
                </div>
                <div>
                    <button type='submit'>Enviar</button>
                </div>
            </div>
        </form>
    </div>
  )
}
