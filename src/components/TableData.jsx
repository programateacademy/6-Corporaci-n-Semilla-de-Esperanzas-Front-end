import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { Header } from "./Header";
import { FaUserLock } from "react-icons/fa";
import { FaUserPlus} from "react-icons/fa";
import { Link } from "react-router-dom";


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

  const deleteForm = async (id) =>{
    try {
      const res = await axios.delete(url + `/forms/delete/${id}`);
      console.log('form eliminado')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Header></Header>
    
     <div className="container-tab">
      <div className="tal-tit">
          <h1>Resumen Donaciones</h1>
          <div className="icos-cont-tab">
            <div className="cont-ico-tab"><Link><FaUserLock className="ico-pass"></FaUserLock></Link></div>
            <div className="cont-ico-tab"><Link to='/NewUser'><FaUserPlus className="ico-new"></FaUserPlus></Link></div>
          </div>
      </div>
      
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
            <th>Certif</th>
            <th>Comentarios</th>      
            <th>Fecha de creación</th>    
            <th>Estado de la donación</th>  
            <th></th>            
            <th></th>            
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
              <td>{form.createdAt}</td>
              <td>{form.state}</td>              
              <td><AiFillEdit /></td>              
              <td onClick={() => {deleteForm(form._id)}}><BsFillTrashFill/></td>              
              <td>
                {/*<select
                  value={donation.estado}
                  onChange={(e) => handleStatusChange(donation.id, e.target.value)}>
                  
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
    </>
   
  );
}

export default TableData;
