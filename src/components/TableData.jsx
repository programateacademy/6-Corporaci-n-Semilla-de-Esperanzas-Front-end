import React, { useState, useEffect } from "react";
import axios from "axios";
import { async } from "q";

let url = "http://localhost:3030";

function TableData() {
  const [listForms, setListForms] = useState([]);
  const [form, setForm] = useState({
    type: "",
    nit_cedula: "",
    name: "",
    email: "",
    phone: "",
    destination: "",
    certification: "",
    aditional: "",
    state: ""
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...form, [name]: value };
    setForm(newDatos);
  };

  useEffect(() => {
    const getForms = async () => {
      try {
        const res = await axios.get(url + '/forms/table');
        setListForms(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getForms();
  }, []);

  const deleteForm = async (id) => {
    try {
      const res = await axios.delete(url + `/forms/delete/${id}`);
      console.log('form eliminado')
    } catch (error) {
      console.log(error);
    }
  }

  const updateForm = async (e) =>{
    e.preventDefault();
    try {
      const res = await axios.put(url+`/forms/modify`)
    } catch (error) {
      console.log(error);
    }
  }

  const renderUpdateForm = () => (
    <div>
      <form onSubmit={as}>
        <input type="text" name="type" onChange={handleInput} value={form.type}/>
        <input type="text" name="nit_cedula" onChange={handleInput} value={form.nit_cedula}/>
        <input type="text" name="name" onChange={handleInput} value={form.name}/>
        <input type="text" name="email" onChange={handleInput} value={form.email}/>
        <input type="text" name="phone" onChange={handleInput} value={form.phone}/>
        <input type="text" name="destination" onChange={handleInput} value={form.destination}/>
        <input type="text" name="certification" onChange={handleInput} value={form.certification}/>
        <input type="text" name="aditional" onChange={handleInput} value={form.aditional}/>
        <input type="text" name="state" onChange={handleInput} value={form.state}/>

        <button>Editar</button>
      </form>
    </div>
  );

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
            <th>Fecha de creación</th>
            <th>Estado de la donación</th>
          </tr>
        </thead>

        {
          listForms.map(form => (
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
  );
}

export default TableData;