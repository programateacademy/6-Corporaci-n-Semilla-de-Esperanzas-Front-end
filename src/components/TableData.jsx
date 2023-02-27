import React, { useState, useEffect } from "react";
import axios from "axios";

let url = "http://localhost:3030";

function TableData() {
  const [listForms, setListForms] = useState([]);

  
  useEffect(() =>{
    const getForms = async () =>{
      try {
        const res = await axios.get(url+ '/forms/table');
        setListForms(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getForms();
  }, []);


  return (
    <div className="container">
      <h1>Resumen Donaciones</h1>
      <table>
        <thead>
          <tr>
            {/*<th>#id</th>*/}
            <th>Tipo de persona</th>
            <th>C.C o NIT</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Destino de donación</th>
            <th>Certificación</th>
            <th>Comentarios</th>          
            <th>Estado de la donación</th>
          </tr>
        </thead>
        
          { 
            listForms.map(form =>(
            <tbody>{
                    
            <tr>
              {/*<td>{form.id}</td>*/}
              <td>{form.type}</td>
              <td>{form.nit_cedula}</td>
              <td>{form.name}</td>
              <td>{form.email}</td>
              <td>{form.phone}</td>
              <td>{form.destination_don}</td>
              <td>{form.certification}</td>
              <td>{form.aditional}</td>
              <td>{form.state}</td>
              <td>
                {/*<select
                  value={donation.estado}
                  onChange={(e) => handleStatusChange(donation.id, e.target.value)}
            >
                  <option value="en proceso">En proceso</option>
                  <option value="aprobada">Aprobada</option>
                  <option value="rechazada">Rechazada</option>
                </select>*/}
              </td>
            </tr>
            }</tbody>
  
          ))
        }
      </table>
    </div>
  );
}

export default TableData;
