const fetch = require("node-fetch");
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./data');

const data = require("../data/nacionalidades_traduccion.json");
var nacionalidades_tr = JSON.parse(JSON.stringify(data));

//Por argumentos en línea de comandos, indico si se ejecuta en GitHub Actions
// o no, para, en este caso, no incluir el archivo de variables de entorno.

if (process.argv[2] != "github"){
    var env = require('node-env-file');
    env('./.env.dist');
}

var key = process.env.TRANSFERMARKT_KEY;

var id_equipos = [];
var equipos = {};

const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key": key,
	    "x-rapidapi-host": "transfermarket.p.rapidapi.com",
	    "useQueryString": true
    }
};

async function fetchPrincipal(){
    const response = await fetch("https://transfermarket.p.rapidapi.com/clubs/list-by-competition?id=ES1", options)
    .catch(err => {
        console.error("ERROR: ", err.message)
    })
    
    const data = await response.json();

    var nombre = "";
    var id = 0;
    var count = data['clubs'].length;
    for (let i = 0; i < count; i++) {
        var equipo = [];
        nombre = data['clubs'][i]['name'];
        id = data['clubs'][i]['id'];
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
    let url = "https://transfermarket.p.rapidapi.com/clubs/get-squad?id=" + id;
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
        let nac_init = jugadores_full[i]['nationalities'][0]['name'];
        let nacionalidad = nacionalidades_tr[nac_init];

        //fechaNacimiento
        let fecha_init = jugadores_full[i]['dateOfBirth'];
        fecha_init  = parseInt(fecha_init);
        fecha_init = fecha_init*1000;
        let fecha = new Date(parseInt(fecha_init));
        let fechaNacimiento = "";
        let mes_nac = fecha.getMonth()+1;
        fechaNacimiento = fecha.getDate() + "-" + mes_nac + "-" + fecha.getFullYear();

        //valor
        let valor_temp = parseFloat(jugadores_full[i]['marketValue']['value']);
        let valor = valor_temp/1000000;
        if (valor == null){
            valor = 0;
        }

        //dorsal
        let dorsal = 0;
        if (jugadores_full[i]['shirtNumber'] != null){
            dorsal = parseInt(jugadores_full[i]['shirtNumber']);
        }

        //posicion
        let pos = jugadores_full[i]['positions']['first']['group'];
        let posicion = "";
        if (pos == "Abwehr"){
            posicion = "DF";
        }
        else if (pos == "Mittelfeld"){
            posicion = "MC";
        }
        else if (pos == "Sturm"){
            posicion = "DL";
        }
        else if (pos == "Torwart"){
            posicion = "PT";
        }
        else {
            posicion = "NULL";
        }

        //pieHabil
        let pie = jugadores_full[i]['foot'];
        let pieHabil = "";
        if (pie == "links"){
            pieHabil = "I";
        }
        else if (pie == "rechts"){
            pieHabil = "D";
        }
        else {
            pieHabil = "A";
        }

        //altura
        let altura_temp = jugadores_full[i]['height'];
        altura_temp = altura_temp.replace(/,/g, '.');
        let altura = parseFloat(altura_temp);

        //capitan
        let capitan = jugadores_full[i]['captain'];
        
        let jugador = {"nombre":nombre_jugador, "nacionalidad":nacionalidad,
            "fechaNacimiento":fechaNacimiento, "valor":valor, "dorsal":dorsal, "posicion":posicion,
            "pieHabil":pieHabil, "altura":altura, "capitan":capitan};
        
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
    console.log('Espera de 1 segundo...');
    await sleep(1000);
    console.log('Prosigue la ejecucion');
}
  
fetchPrincipal();