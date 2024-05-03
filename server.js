import ex from 'express'
import dir from 'path'
import data from './json/consult.json' assert { type: 'json' }
import fs from 'fs'
import { guardarUsuario } from './db.js';
import { consultarUsuario } from './db.js';
import { guardarActividad } from './db.js';
import { consultarActividades } from './db.js';


const app = ex();
const dir_front = dir.resolve();
app.use(ex.static("front/build"));
app.use(ex.json());


app.listen('8080', function () {
    console.log("Server started")
    console.log(dir_front)
})

app.get('/', function (req, res) {
    res.sendFile(dir_front + "/front/build/index.html")
})

app.get('/register', function (req, res) {
    res.sendFile(dir_front + "/front/build/index.html")
})

app.get('/consult', function (req, res) {
    res.sendFile(dir_front + "/front/build/index.html")
})

app.get('/activity', function (req, res) {
    res.sendFile(dir_front + "/front/build/index.html")
})

app.get('/activity/data', function (req, res) {
    const user = req.body;
    console.log(user);
    res.sendStatus(200);
})

app.get('/consult/data', function (req, res) {
    consultarUsuario().then(usuarios => {
        console.log('consulto usuarios', usuarios);
        res.json(usuarios);
    }).catch(error => {
        console.error('Error al consultar usuarios:', error);
        res.status(500).send('Error en el servidor');
    });
})

app.post('/register/data', function (req, res) {
    const user = req.body;
    console.log(user);
    // Synchronous read
    //const data = JSON.parse(fs.readFileSync(dir.resolve('./json/consult.json'), 'utf8'));

    guardarUsuario(user);

    res.sendStatus(200);
});

app.post('/activity/register', function (req, res) {
    const activity = req.body;
    console.log(activity);
    // Synchronous read
    //const data = JSON.parse(fs.readFileSync(dir.resolve('./json/consult.json'), 'utf8'));

    guardarActividad(activity);

    res.sendStatus(200);
});

app.get('/activity/consult', function (req, res) {
    consultarActividades().then(actividad => {
        console.log('consulto actividades', actividad);
        res.json(actividad);
    }).catch(error => {
        console.error('Error al consultar usuarios:', error);
        res.status(500).send('Error en el servidor');
    });
});