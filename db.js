import mysql2 from 'mysql2'

let conexion = mysql2.createConnection({
    host: "db-actividades.c7soo8e80pwl.sa-east-1.rds.amazonaws.com", 
    database: "db-actividades",
    user: "admin",
    password: "admin12345"
})

conexion.connect((err) => {
    if (err) {
        console.log("Error conectando a la BD " + err)
    } else {
        console.log("Conexión exitosa")
    }
})


/*conexion.query('SELECT * FROM `usuario`', (err, rows, fields) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(rows);
});    */

export function miFuncion() {
    console.log('Función llamada desde otro archivo');
}

export function consultarUsuario() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM `usuario`';
        conexion.query(sql, (err, rows, fields) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log('Usuario consultado:', rows);
                resolve(rows);
            }
        });
    });
}


export function guardarUsuario(datosUsuario) {
    const usuarioValores = [
        datosUsuario.tipoDocumento,
        datosUsuario.documento,
        datosUsuario.nombre,
        datosUsuario.fechaNacimiento,
        datosUsuario.telefono,
        datosUsuario.correo
    ];
    const sql = 'INSERT INTO `db-actividades`.usuario (tipoDocumento, documento, nombre, fechaNacimiento, telefono, correo) VALUES(?,?,?,?,?,?)';
    conexion.query(sql, usuarioValores, (err, rows, fields) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Usuario insertado:', rows.insertId);
    });    
}

export function guardarActividad(datosActividad) {
    const actividadValores = [
        datosActividad.description,
        datosActividad.date,
        datosActividad.start,
        datosActividad.end,
        datosActividad.selectedUser
    ];
    const sql = 'INSERT INTO `db-actividades`.actividades (descripcion, fecha_actividad, hora_inicio, hora_fin, id_usuario) VALUES(?,?,?,?,?)';
    conexion.query(sql, actividadValores, (err, rows, fields) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Actividad insertada:', rows.insertId);
    });
}


export function consultarActividades() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT u.nombre,a.descripcion,a.fecha_actividad,a.hora_inicio,a.hora_fin FROM `actividades` a inner join `usuario` u on a.id_usuario = u.id'
        conexion.query(sql, (err, rows, fields) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log('Actividades consultadas:', rows);
                resolve(rows);
            }
        });
    });
}
