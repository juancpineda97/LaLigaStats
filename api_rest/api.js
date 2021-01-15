const express = require('express');
const Liga = require('../src/liga.js');
const data = require("../data/equipos.json");
const app = express();
const puerto = process.env.port || 8080;

var archivo = JSON.parse(JSON.stringify(data));
var liga = new Liga(archivo);


app.get('/equipo/:nombre_equipo', function(req, res){
    var req_tipo = req.headers.accept;
    var tipo = true;
    var content_type = 'application/json';
    
    if (req_tipo == 'text/plain'){
        tipo = false;
        content_type = 'text/plain';
    }

    var nombre_equipo = req.params.nombre_equipo;
    var resultado = liga.verJugadoresEquipo(nombre_equipo, tipo);
    res.contentType(content_type);
    res.send(resultado).status(200);
});


app.listen(puerto, function() {
});

module.exports = app;