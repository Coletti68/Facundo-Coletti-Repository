const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { useSyncExternalStore } = require('react');

//path es un módulo de Node.js que viene incorporado. Sirve para trabajar con rutas de archivos (paths), de forma segura, en cualq s.o
//__dirname Es una variable global de Node.js que representa la carpeta actual del archivo donde está el código.
const dbPath = path.resolve(__dirname, '../../gimnasio.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {

    if(err) {
        console.error('Error al conectar con la base de datos:', err.message);
    } else {
        console.log('Conexion exitosa con la base de datos SQlite');
    }
});

//En Node.js, cada archivo es un módulo separado. Para usar funciones, objetos o variables que definiste en un archivo desde otro archivo, tenés que exportarlos.
module.exports = db;


