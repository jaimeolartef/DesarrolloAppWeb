import React, { useState, useEffect } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Consult = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/consult/data');
      setData(response.data);
    };

    fetchData();
  }, [])

  return (
    <div className="div-container">
      <br/>
      <br/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tipo Documento</th>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Fecha Nacimiento</th>
            <th>Telefono</th>
            <th>Correo electronico</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{item?.tipoDocumento}</td>
              <td>{item?.documento}</td>
              <td>{item?.nombre}</td>
              <td>{item?.fechaNacimiento}</td>
              <td>{item?.telefono}</td>
              <td>{item?.correo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Consult;