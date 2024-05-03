import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from "react-bootstrap/Table";

const Body = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/activity/consult');
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
          <th>Usuario</th>
          <th>Descripción Actividad</th>
          <th>Fecha</th>
          <th>Hora Inicio</th>
          <th>Hora Fin</th>
        </tr>
        </thead>
        <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <td>{item?.nombre}</td>
            <td>{item?.descripcion}</td>
            <td>{item?.fecha_actividad}</td>
            <td>{item?.hora_inicio}</td>
            <td>{item?.hora_fin}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Body;