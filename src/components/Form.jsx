import React from 'react'

export const Form = () => {
  return (
    <div className='cont-form'>
        <form className='donation-form'>

            <h1>¡Haz tu donación a Semillas de Esperanza hoy!</h1>
            <h2>Tipo de persona</h2>
            <div className='person-type'>
                <div>
                    <input type="radio" id="html" name="np" value="#"></input> 
                    <label>Natural</label>
                </div>
                <div>
                    <input type="radio" id="html" name="jp" value="#"></input> 
                    <label>Jurídica</label>
                </div>
            </div>
            
        </form>
    </div>
  )
}
