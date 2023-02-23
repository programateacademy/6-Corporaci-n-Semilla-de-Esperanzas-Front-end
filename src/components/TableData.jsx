import React, { useState, useEffect } from "react";
import axios from "axios";

function TableData() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/donations").then((response) => {
      setDonations(response.data);
    });
  }, []);

  const handleStatusChange = (id, newStatus) => {
    axios
      .put(`http://localhost:3001/donations/${id}`, {
        estado: newStatus,
      })
      .then(() => {
        setDonations((prevDonations) =>
          prevDonations.map((donation) => {
            if (donation.id === id) {
              return { ...donation, estado: newStatus };
            } else {
              return donation;
            }
          })
        );
      });
  };

  return (
    <div className="container">
      <h1>Resumen Donaciones</h1>
      <table>
        <thead>
          <tr>
            <th>#id</th>
            <th>Tipo de persona</th>
            <th>C.C o NIT</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Tipo de donación</th>
            <th>Estado de la donación</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id}>
              <td>{donation.id}</td>
              <td>{donation.tipoPersona}</td>
              <td>{donation.ccNit}</td>
              <td>{donation.nombre}</td>
              <td>{donation.email}</td>
              <td>{donation.tipoDonacion}</td>
              <td>
                <select
                  value={donation.estado}
                  onChange={(e) => handleStatusChange(donation.id, e.target.value)}
                >
                  <option value="en proceso">En proceso</option>
                  <option value="aprobada">Aprobada</option>
                  <option value="rechazada">Rechazada</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
