import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Body = () => {

  const [tipoDocumento, setTipoDocumento] = useState('');
  const [documento, setDocumento] = useState('');
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      tipoDocumento,
      documento,
      nombre,
      fechaNacimiento,
      telefono,
      correo
    };

    await axios.post('/register/data', newUser);
  }

  return (
    <div className="div-container">
      <br/>
      <br/>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Tipo de Documento</Form.Label>
          <Form.Select aria-label="Seleccione el tipo de documento" value={tipoDocumento} onChange={e => setTipoDocumento(e.target.value)}>
            <option>Seleccione el tipo de documento</option>
            <option value="cc">Cédula de Ciudadanía</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="ce">Cédula Extranjería</option>
          </Form.Select>
        </Form.Group>
        <br/>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Documento</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el documento" value={documento} onChange={e => setDocumento(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control type="date" placeholder="Ingrese la fecha de nacimiento" value={fechaNacimiento} onChange={e => setFechaNacimiento(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el teléfono" value={telefono} onChange={e => setTelefono(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese el correo electrónico" value={correo} onChange={e => setCorreo(e.target.value)}/>
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </div>
  );
}

export default Body;