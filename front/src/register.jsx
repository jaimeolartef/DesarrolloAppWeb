import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Body = () => {
  return (
    <div className="div-container">
      <br/>
      <br/>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Tipo de Documento</Form.Label>
          <Form.Select aria-label="Seleccione el tipo de documento">
            <option>Seleccione el tipo de documento</option>
            <option value="cc">Cédula de Ciudadanía</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="ce">Cédula Extranjería</option>
          </Form.Select>
        </Form.Group>
        <br/>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Documento</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el documento"/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre"/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control type="date" placeholder="Ingrese la fecha de nacimiento"/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el teléfono"/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese el correo electrónico"/>
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