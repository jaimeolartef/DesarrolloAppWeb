import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const Consult = () => {
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
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
        {/* Puedes agregar más filas de datos aquí */}
        </tbody>
      </Table>
    </div>
  );
}

export default Consult;