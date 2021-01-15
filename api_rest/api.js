const express = require('express');
const Liga = require('../src/liga.js');
const data = require("../data/equipos.json");
const app = express();
const puerto = process.env.port || 8080;

var archivo = JSON.parse(JSON.stringify(data));
var liga = new Liga(archivo);

//Middleware bodyparser
app.use(express.json());

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
    res.contentType(tipo_req.content_type);
    res.send(resultado).status(200);
});

//HU02
app.get('/jugadores/:nombre_jugador', function(req, res){
    var tipo_req = getTipo(req);
    var nombre_jugador = req.params.nombre_jugador;
    var resultado = liga.verJugador(nombre_jugador, tipo_req.tipo);
    res.contentType(tipo_req.content_type);
    res.send(resultado).status(200);
});

//HU03
app.get('/partidos/:nombre_equipo', function(req, res){
    var tipo_req = getTipo(req);
    var nombre_equipo = req.params.nombre_equipo;
    var resultado = liga.verPartido(nombre_equipo, tipo_req.tipo);
    res.contentType(tipo_req.content_type);
    res.send(resultado).status(200);
});

//HU04
app.get('/ranking', function(req, res){
    var tipo_req = getTipo(req);
    var resultado = liga.verRankingEquipos(tipo_req.tipo);
    res.contentType(tipo_req.content_type);
    res.send(resultado).status(200);
});

//HU05
app.put('/jugadores/traspaso', function(req, res){
    var parametros = req.body;
    var salida = liga.traspasoJugador(parametros.nombre_jugador, parametros.nombre_equipo);
    res.send(salida);
});

//HU06
app.post('/partidos/nuevo', function(req, res){
    var parametros = req.body;
    var salida = liga.aniadePartido(parametros);
    res.send(salida);
});

app.listen(puerto, function() {
});

module.exports = app;