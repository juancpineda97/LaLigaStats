const fetch = require("node-fetch");
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./data');

//Por argumentos en línea de comandos, indico si se ejecuta en GitHub Actions
// o no, para, en este caso, no incluir el archivo de variables de entorno.

if (process.argv[2] != "github"){
    var env = require('node-env-file');
    env('./.env.dist');
}

var key = process.env.FOOTBALL_DATA_KEY;

var id_equipos = [];
var equipos = {};

const options = {
    method: "GET",
    headers: {
        "X-Auth-Token":key
    }
};

async function fetchPrincipal(){
    const response = await fetch("http://api.football-data.org/v2/competitions/2014/teams", options)
    .catch(err => {
        console.error("ERROR: ", err.message)
    })
    
    const data = await response.json();

    var nombre = "";
    var id = 0;
    var count = data['count'];
    for (let i = 0; i < count; i++) {
        var equipo = [];
        nombre = data['teams'][i]['name'];
        id = data['teams'][i]['id'];
        equipo.push(nombre);
        equipo.push(id);
        id_equipos.push(equipo);
    }

    for (let i = 0; i < id_equipos.length; i++) {
        await obtenerDatosEquipo(id_equipos[i][0],id_equipos[i][1]);
    }

    localStorage.setItem('equipos.json', JSON.stringify(equipos, null, '\t'));

}

async function obtenerDatosEquipo(nombre,id){
    let url = "http://api.football-data.org/v2/teams/" + id;
    const response = await fetch(url, options)
    .catch(err => {
        console.error("ERROR: ", err.message)
    })

    const data = await response.json();
    await demo();
    let jugadores = [];
    let jugadores_full = data['squad'];
    for (let i = 0; i < jugadores_full.length; i++) {
        //Nombre
        let nombre_jugador = jugadores_full[i]['name'];
        
        //Nacionalidad
        let nacionalidad = jugadores_full[i]['nationality'];

        //fechaNacimiento
        let fecha_n = jugadores_full[i]['dateOfBirth'];
        let fechaNacimiento = fecha_n.substr(0,10);

        //posicion
        let pos = jugadores_full[i]['position'];
        let posicion = "";
        if (pos == "Defender"){
            posicion = "DF";
        }
        else if (pos == "Midfielder"){
            posicion = "MC";
        }
        else if (pos == "Attacker"){
            posicion = "DL";
        }
        else {
            posicion = "PT";
        }
        
        let jugador = {"nombre":nombre_jugador, "nacionalidad":nacionalidad,
            "fechaNacimiento":fechaNacimiento, "posicion":posicion};
        
        jugadores.push(jugador);
    }

    equipos[nombre] = jugadores;
    
    let msg = "Último equipo procesado: " + nombre;
    console.log(msg);

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function demo() {
    console.log('Espera de 8 segundos...');
    await sleep(8000);
    console.log('Prosigue la ejecucion');
}
  
fetchPrincipal();