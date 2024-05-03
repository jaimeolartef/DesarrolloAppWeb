import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Body = () => {

    // Define tus estados aquí
    const [selectedUser, setSelectedUser] = useState('');
    const [newActivity, setNewActivity] = useState({
        selectedUser: '',
        description: '',
        date: '',
        start: '',
        end: ''
        // Agrega aquí los otros campos de tu actividad
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/consult/data');
            setData(response.data);
        };

        fetchData();
    }, [])

    // Define tus manejadores de eventos aquí
    const handleActivitySubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post('/activity/register', newActivity);

        if (response.status === 200) {
            alert('El registro ha sido exitoso');
        } else {
            alert('Hubo un error al registrar el usuario');
        }
    };

    const handleUserChange = (event) => {
        setSelectedUser(event.target.value);
    };

    const handleInputChange = (event) => {
        setNewActivity({
            ...newActivity,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="container">
            <h1 className="my-3">Registro de Actividades Diarias</h1>
            <form onSubmit={handleActivitySubmit}>
                <div className="mb-3">
                    <label className="form-label">Usuario:</label>
                    <select name="selectedUser" value={newActivity.selectedUser} onChange={handleInputChange}
                            className="form-control">
                        {data?.map((user, index) => (
                          <option key={index} value={user?.id}>
                              {user?.nombre}
                          </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripción de la Actividad:</label>
                    <input type="text" name="description" value={newActivity.description} onChange={handleInputChange}
                           className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Fecha de la Actividad:</label>
                    <input type="date" name="date" value={newActivity.date} onChange={handleInputChange}
                        className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Hora Inicio:</label>
                    <input type="time" name="start" value={newActivity.start} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Hora Fin:</label>
                    <input type="time" name="end" value={newActivity.end} onChange={handleInputChange} className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Registrar Actividad</button>
            </form>
        </div>
    );
}

export default Body;