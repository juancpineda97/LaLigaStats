const express = require('express');
const Liga = require('../src/liga.js');
const miError = require('./errores.js');
const data = require("../data/equipos.json");
const app = express();

var key = process.env.TEST;

var quiero_log = true;

if (key == 'true'){
    quiero_log = false;
}

//Carga del archivo con los equipos y jugadores originales
var archivo = JSON.parse(JSON.stringify(data));
//Creación de una instancia de Liga con estos datos.
var liga = new Liga(archivo);

//Middleware bodyparser
app.use(express.json());

//Middleware del log
if (quiero_log){
    const fileConf = {
        level: 'debug',
        filename: './api_rest/logs.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
        timestamp: true
    };
    var express_logger = require('express-logger-unique-req-id');
    express_logger.initializeLogger(app,fileConf);
    let logger = express_logger.getLogger();

    app.use((req, res, next) =>{
        var mensaje = req.method + " " + req.originalUrl + " " + req.ip;
        logger.debug(mensaje);
        next();
    });
}


/**
 * Función que ajusta el content type 
 * devuelto dependiendo del parámetro Accept de 
 * la petición dada, además, devuelve en "tipo" 
 * el modo en el que se ejecutarán algunos métodos
 * @param {Request} req - Petición
 */
function getTipo(req){
    var req_tipo = req.headers.accept;
    var tipo = true;
    var content_type = 'application/json';
    
    if (req_tipo == 'text/plain'){
        tipo = false;
        content_type = 'text/plain';
    }

    return {
        "tipo":tipo,
        "content_type":content_type
    }
}

//HU01
app.get('/equipos/:nombre_equipo', function(req, res){
    var tipo_req = getTipo(req);
    var nombre_equipo = req.params.nombre_equipo;
    var resultado = liga.verJugadoresEquipo(nombre_equipo, tipo_req.tipo);
    if (resultado == "" || Object.keys(resultado).length == 0){
        throw new miError(404, "No se ha encontrado ningún equipo con el nombre dado");
    }
    res.contentType(tipo_req.content_type);
    res.send(resultado).status(200);
});

//HU02
app.get('/jugadores/:nombre_jugador', function(req, res){
    var tipo_req = getTipo(req);
    var nombre_jugador = req.params.nombre_jugador;
    var resultado = liga.verJugador(nombre_jugador, tipo_req.tipo);
    if (resultado == "" || (typeof resultado == 'object' && resultado[nombre_jugador].length == 0)){
        throw new miError(404, "No se ha encontrado ningún jugador con el nombre dado");
    }
    res.contentType(tipo_req.content_type);
    res.send(resultado).status(200);
});

//HU03
app.get('/partidos/:nombre_equipo', function(req, res){
    var tipo_req = getTipo(req);
    var nombre_equipo = req.params.nombre_equipo;
    var resultado = liga.verPartido(nombre_equipo, tipo_req.tipo);
    if (resultado == "" || (typeof resultado == 'object' && resultado[nombre_equipo].length == 0)){
        throw new miError(404, "No se ha encontrado ningún partido del equipo dado");
    }
    res.contentType(tipo_req.content_type);
    res.send(resultado).status(200);
});

//HU04
app.get('/ranking', function(req, res){
    var tipo_req = getTipo(req);
    var resultado = liga.verRankingEquipos(tipo_req.tipo);
    if (resultado == "" || Object.keys(resultado).length == 0){
        throw new miError(404, "No hay equipos disponibles para realizar el ranking");
    }
    res.contentType(tipo_req.content_type);
    res.send(resultado).status(200);
});

//HU05
app.put('/jugadores/traspaso', function(req, res){
    var parametros = req.body;
    var keys = Object.keys(parametros);
    if(keys.includes("nombre_jugador") == false || keys.includes("nombre_equipo") == false){
        throw new miError(400, "No se han indicado los parámetros adecuados. Estos deben ser nombre_jugador y nombre_equipo");
    }
    var salida = liga.traspasoJugador(parametros.nombre_jugador, parametros.nombre_equipo);
    if (salida.done == false){
        throw new miError(salida.codigo, salida.error);
    }
    res.send(salida);
});

//HU06
app.post('/partidos/nuevo', function(req, res){
    var parametros = req.body;
    var salida = liga.aniadePartido(parametros);
    if (salida.done == false){
        throw new miError(salida.codigo, salida.error);
    }
    res.send(salida);
});

//Middleware de gestión de errores
app.use((err, req, res, next) =>{
    var info_error_key = "ERROR " + err.codigo;
    var info_error = {};
    info_error[info_error_key] = err.message;
    res.status(err.codigo).send(info_error);
});

function defTests(pasando_tests){
    tests = true;
}

module.exports = app, defTests;