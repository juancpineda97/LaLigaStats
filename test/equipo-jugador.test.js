const Equipo = require("../src/equipo.js");
const Jugador = require("../src/jugador.js");
const Asercion = require("../src/asserts.js");
const datosBarcelona = require("../test/barcelona.json");
const datosRealMadrid = require("../test/real_madrid.json");
const Partido = require("../src/partido.js");
const utils = require("../src/utils.js");
const Liga = require("../src/liga.js");

const data = require("../data/equipos.json");
var archivo = JSON.parse(JSON.stringify(data));

// Variables para tests
var player1 = new Jugador("Griezmann", "Barcelona", "Francia", "21/03/1991", 80, 7, "DL", "I", 1.76, false);
var player2 = new Jugador("Messi", "Barcelona", "Argentina", "24/06/1987", 100, 10, "DL", "I", 1.70, true);
var player3 = new Jugador("Coutinho", "Barcelona", "Brasil", "12/06/1992", 60, 14, "MC", "D", 1.72, false);
var player4 = new Jugador("Koke", "Atlético de Madrid", "España", "08/01/1992", 60, 6, "MC", "D", 1.76, true);
var player5 = new Jugador("Courtois", "Real Madrid", "Bélgica", "11/05/1992", 75, 1, "PT", "I", 1.99, false);
let listaJugadores = [player1, player2, player3];
var team = new Equipo("Barcelona", listaJugadores);
let listempty = new Array();
var teamempty = new Equipo("Barcelona", listempty);
var aserciones = new Asercion();
var liga = new Liga(archivo);

var archivobarcelona = JSON.parse(JSON.stringify(datosBarcelona));
var archivorealmadrid = JSON.parse(JSON.stringify(datosRealMadrid));
var barcelonajugadores = [];
var realmadridjugadores = [];

for (let i = 0; i < 16; i++) {
    var tempplayer1 = new Jugador(archivobarcelona[i]["nombre"], "FC Barcelona", archivobarcelona[i]["nacionalidad"], 
    archivobarcelona[i]["fechaNacimiento"], archivobarcelona[i]["valor"], archivobarcelona[i]["dorsal"], archivobarcelona[i]["posicion"],
    archivobarcelona[i]["pieHabil"], archivobarcelona[i]["altura"], archivobarcelona[i]["capitan"]);
    
    var tempplayer2 = new Jugador(archivorealmadrid[i]["nombre"], "Real Madrid", archivorealmadrid[i]["nacionalidad"], 
    archivorealmadrid[i]["fechaNacimiento"], archivorealmadrid[i]["valor"], archivorealmadrid[i]["dorsal"], archivorealmadrid[i]["posicion"],
    archivorealmadrid[i]["pieHabil"], archivorealmadrid[i]["altura"], archivorealmadrid[i]["capitan"]);
    
    barcelonajugadores.push(tempplayer1);
    realmadridjugadores.push(tempplayer2);
}

var barcelona = new Equipo("Barcelona", barcelonajugadores);
var realmadrid = new Equipo("Real Madrid", realmadridjugadores);
var oncebarcelona = [3,10,8,5,18,1,14,20,9,13,7];
var suplentesbarcelona = [23,15,26,6,11];
var oncerealmadrid = [14,9,4,10,8,12,7,6,22,1,2];
var suplentesrealmadrid = [5,17,24,18,19];
var partido_prueba = new Partido(barcelona, realmadrid, new Date(2020, 10, 24, 16, 0, 0), oncebarcelona,
oncerealmadrid, suplentesbarcelona, suplentesrealmadrid, "Camp Nou", "Martinez Munuera");

describe("Tests relacionados con la funcionalidad de mostrar al usuario los jugadores de un equipo", () =>{

    test("Comprobación del funcionamiento del método verEquipo()", () => {
        var salidametodo = team.verEquipo();
        team.getListaJugadores().forEach(function(elemento) {
            aserciones.expect(salidametodo).toInclude(elemento.verJugador());
        })
    });

    test("Comprobación del funcionamiento del método verEquipo() con un equipo sin jugadores", () => {
        var salidametodo = teamempty.verEquipo(); 
        aserciones.expect(salidametodo).toInclude("Equipo sin jugadores actualmente.");
    });

    test("Comprobando que se muestran los jugadores de un equipo correctamente", () => {
        var salidametodo = team.verEquipo();
        aserciones.expect(salidametodo).toBeType("string");
        aserciones.expect(salidametodo).toInclude("Lista de jugadores del");
        aserciones.expect(salidametodo).toInclude(player1.verJugador());
        aserciones.expect(salidametodo).toInclude(player2.verJugador());
        aserciones.expect(salidametodo).toInclude(player3.verJugador());
    });

});

describe("Tests relacionados con la funcionalidad de mostrar al usuario los datos de un jugador", () =>{
    
    test("Comprobación del funcionamiento del método verJugador()", () => {
        var salidametodo = player1.verJugador();

        aserciones.expect(salidametodo).toInclude(player1.getNombre());
        aserciones.expect(salidametodo).toInclude(player1.getEquipo());
        aserciones.expect(salidametodo).toInclude(player1.getNacionalidad());
        aserciones.expect(salidametodo).toInclude(player1.getFechaNacimiento());
        aserciones.expect(salidametodo).toInclude(player1.getValor());
        aserciones.expect(salidametodo).toInclude(player1.getDorsal());
        aserciones.expect(salidametodo).toInclude(player1.getPosicion());
        
        var pie_habil = "";

        if (player1.getPieHabil() == 'D'){
            pie_habil = "Diestro";
        }
        else if (player1.getPieHabil() == 'I'){
            pie_habil = "Zurdo";
        }
        else{
            pie_habil = "Ambidiestro";
        }
        
        aserciones.expect(salidametodo).toInclude(pie_habil);
        
        
        aserciones.expect(salidametodo).toInclude(player1.getAltura());

        var escapitan = player1.getCapitan();

        if(escapitan){
            aserciones.expect(salidametodo).toInclude("CAPITÁN del equipo");
        }
    });

    test("Comprobando que se muestran los datos de varios jugadores correctamente", () => {
        var salidametodo3 = player3.verJugador();
        var salidametodo4 = player4.verJugador();
        var salidametodo5 = player5.verJugador();

        aserciones.expect(salidametodo3).toBeType("string");
        aserciones.expect(salidametodo4).toBeType("string");
        aserciones.expect(salidametodo5).toBeType("string");
        
        var valor_player3 = player3.getValor();
        var equipo_player4 = player4.getEquipo();
        var fecha_n_player5 = player5.getFechaNacimiento();
        var dorsal_player4 = player4.getDorsal();
        var posicion_player5 = player5.getPosicion();

        aserciones.expect(salidametodo3).toInclude(valor_player3);
        aserciones.expect(salidametodo4).toInclude(equipo_player4);
        aserciones.expect(salidametodo5).toInclude(fecha_n_player5);
        aserciones.expect(salidametodo4).toInclude(dorsal_player4);
        aserciones.expect(salidametodo5).toInclude(posicion_player5);
        aserciones.expect(salidametodo3).toNotInclude(player5.nombre);
    });

});

describe("Tests relacionados con la funcionalidad de mostrar al usuario los datos de un partido", () =>{
    
    test("Comprobación del funcionamiento del método verPartido()", () => {
        var salidametodo = partido_prueba.verPartido();
        var lista_11inicial_barcelona = 
        ["3 - Gerard Piqué",
        "10 - Lionel Messi",
        "8 - Miralem Pjanic",
        "5 - Sergio Busquets",
        "18 - Jordi Alba",
        "1 - Marc-André ter Stegen",
        "14 - Philippe Coutinho",
        "20 - Sergi Roberto",
        "9 - Martin Braithwaite",
        "13 - Neto",
        "7 - Antoine Griezmann"];
        var lista_11inicial_realmadrid = 
        ["14 - Casemiro",
        "9 - Karim Benzema",
        "4 - Sergio Ramos",
        "10 - Luka Modric",
        "8 - Toni Kroos",
        "12 - Marcelo",
        "7 - Eden Hazard",
        "6 - Nacho Fernández",
        "22 - Isco",
        "1 - Thibaut Courtois",
        "2 - Daniel Carvajal"];
        var lista_suplentes_barcelona = 
        ["23 - Samuel Umtiti",
        "15 - Clément Lenglet",
        "26 - Iñaki Peña",
        "6 - Carles Aleñá",
        "11 - Ousmane Dembélé"];
        var lista_suplentes_realmadrid = 
        ["5 - Raphaël Varane",
        "17 - Lucas Vázquez",
        "24 - Mariano Díaz",
        "18 - Luka Jovic",
        "19 - Álvaro Odriozola"];
        
        aserciones.expect(salidametodo).toInclude(barcelona.getNombre());
        aserciones.expect(salidametodo).toInclude(partido_prueba.getArbitro());
        aserciones.expect(salidametodo).toInclude(partido_prueba.getFecha().getDate());
        aserciones.expect(salidametodo).toInclude(partido_prueba.getFecha().getMonth());
        aserciones.expect(salidametodo).toInclude(partido_prueba.getFecha().getFullYear());
        aserciones.expect(salidametodo).toInclude(partido_prueba.getFecha().getHours());
        aserciones.expect(salidametodo).toInclude(partido_prueba.getFecha().getSeconds());
        aserciones.expect(salidametodo).toInclude(partido_prueba.getFecha().getMinutes());

        lista_11inicial_barcelona.forEach(element => {
            aserciones.expect(salidametodo).toInclude(element);
        });

        lista_11inicial_realmadrid.forEach(element => {
            aserciones.expect(salidametodo).toInclude(element);
        });

        lista_suplentes_barcelona.forEach(element => {
            aserciones.expect(salidametodo).toInclude(element);
        });

        lista_suplentes_realmadrid.forEach(element => {
            aserciones.expect(salidametodo).toInclude(element);
        });
    });

});

describe("Test de la clase Jugador", () =>{

    test("Comprobación del funcionamiento del constructor", () => {
        aserciones.expect(player1.getNombre()).toEqual("Griezmann");
        aserciones.expect(player1.getEquipo()).toEqual("Barcelona");
        aserciones.expect(player1.getNacionalidad()).toEqual("Francia");
        aserciones.expect(player1.getFechaNacimiento()).toEqual("21/03/1991");
        aserciones.expect(player1.getValor()).toEqual(80);
        aserciones.expect(player1.getDorsal()).toEqual(7);
        aserciones.expect(player1.getPosicion()).toEqual("DL");
        aserciones.expect(player1.getPieHabil()).toEqual("I");
        aserciones.expect(player1.getAltura()).toEqual(1.76);
        aserciones.expect(player1.getCapitan()).toEqual(false);
    });

    test("Comprobación de la visibilidad de los atributos privados", () => {
        aserciones.expect(player1.nombre).toBeType("undefined");
        aserciones.expect(player1.equipo).toBeType("undefined");
        aserciones.expect(player1.nacionalidad).toBeType("undefined");
        aserciones.expect(player1.fechaNacimiento).toBeType("undefined");
        aserciones.expect(player1.valor).toBeType("undefined");
        aserciones.expect(player1.dorsal).toBeType("undefined");
        aserciones.expect(player1.posicion).toBeType("undefined");
        aserciones.expect(player1.pieHabil).toBeType("undefined");
        aserciones.expect(player1.altura).toBeType("undefined");
        aserciones.expect(player1.capitan).toBeType("undefined");
    });

    test("Comprobación del funcionamiento del constructor con tipos de dato no válidos", () => {
        thrown_error = () => new Jugador(404, "Barcelona", "Brasil", "12/06/1992", 60, 14, "DL", "I", 1.76, false);
        expectedError = new Error('Tipos de dato no validos');
        expect(thrown_error).toThrow(expectedError);
    });

    test("Comprobación del método comprobarDatos(...) con datos correctos", () => {
        var salidaMetodo = player1.comprobarDatos("Coutinho", "Barcelona", "Brasil", "12/06/1992", 60, 14, "MC", "D", 1.72, false);
        aserciones.expect(salidaMetodo).toEqual(true);
    });

    test("Comprobación del método comprobarDatos(...) con datos no válidos", () => {
        var salidaMetodo = player1.comprobarDatos("Coutinho", 555, "Brasil", "12/06/1992", 60, 14, "RF", "D", 1.72, false);
        aserciones.expect(salidaMetodo).toEqual(false);
    });

});

describe("Test de la clase Equipo", () =>{

    test("Comprobación del funcionamiento del constructor", () => {
        aserciones.expect(team.getNombre()).toEqual("Barcelona");
        aserciones.expect(team.getListaJugadores().length).toEqual(3);
    });

    test("Comprobación del funcionamiento del constructor con tipos de dato no válidos", () => {
        thrown_error = () => new Equipo(404, listempty);
        expectedError = new Error('Tipos de dato no validos');
        expect(thrown_error).toThrow(expectedError);
    });

    test("Comprobación de la visibilidad de los atributos privados", () => {
        aserciones.expect(team.nombre).toBeType("undefined");
        aserciones.expect(team.listaJugadores).toBeType("undefined");
    });

});

describe("Test de la clase Partido", () =>{

    test("Comprobación del funcionamiento del constructor", () => {
        aserciones.expect(partido_prueba.getEquipoLocal().getNombre()).toEqual("Barcelona");
        aserciones.expect(partido_prueba.getEquipoVisitante().getNombre()).toEqual("Real Madrid");
        aserciones.expect(partido_prueba.getOnceInicialLocal().length).toEqual(11);
        aserciones.expect(partido_prueba.getOnceInicialVisitante().length).toEqual(11);
        for (let i = 0; i < 11; i++) {
            expect(partido_prueba.getOnceInicialLocal()[i]).toEqual(oncebarcelona[i]);
            expect(partido_prueba.getOnceInicialVisitante()[i]).toEqual(oncerealmadrid[i]);
        }
        for (let i = 0; i < suplentesbarcelona; i++) {
            expect(partido_prueba.getSuplentesLocal()[i]).toEqual(suplentesbarcelona[i]);
        }
        for (let i = 0; i < suplentesrealmadrid; i++) {
            expect(partido_prueba.getSuplentesVisitante()[i]).toEqual(suplentesrealmadrid[i]);
        }
        aserciones.expect(partido_prueba.getFecha().toString()).toInclude("Nov 24 2020 16:00:00");
        aserciones.expect(partido_prueba.getEstadio()).toEqual("Camp Nou");
        aserciones.expect(partido_prueba.getArbitro()).toEqual("Martinez Munuera");
        aserciones.expect(partido_prueba.getGolesLocal()).toEqual(0);
        aserciones.expect(partido_prueba.getGolesVisitante()).toEqual(0);
    });

    test("Comprobación del funcionamiento del constructor con tipos de datos no válidos", () => {
        thrown_error = () => new Partido("Barcelona", "Real Madrid", "20/12/2020 16:00", oncebarcelona,
        oncerealmadrid, suplentesbarcelona, suplentesrealmadrid, "Camp Nou", "Martinez Munuera");
        expectedError = new Error('Tipos de dato no validos');
        expect(thrown_error).toThrow(expectedError);
    });

    test("Comprobación de la visibilidad de los atributos privados", () => {
        aserciones.expect(partido_prueba.equipoLocal).toBeType("undefined");
        aserciones.expect(partido_prueba.equipoVisitante).toBeType("undefined");
        aserciones.expect(partido_prueba.fecha).toBeType("undefined");
        aserciones.expect(partido_prueba.onceInicialLocal).toBeType("undefined");
        aserciones.expect(partido_prueba.onceInicialVisitante).toBeType("undefined");
        aserciones.expect(partido_prueba.suplentesLocal).toBeType("undefined");
        aserciones.expect(partido_prueba.suplentesVisitante).toBeType("undefined");
        aserciones.expect(partido_prueba.estadio).toBeType("undefined");
        aserciones.expect(partido_prueba.arbitro).toBeType("undefined");
        aserciones.expect(partido_prueba.golesLocal).toBeType("undefined");
        aserciones.expect(partido_prueba.golesVisitante).toBeType("undefined");
    });

    test("Comprobación del método comprobarDatosPartido(...)", () => {
        var salidaMetodo = partido_prueba.comprobarDatosPartido(barcelona, realmadrid, new Date(2020, 10, 24, 16, 0, 0), oncebarcelona,
        oncerealmadrid, suplentesbarcelona, suplentesrealmadrid, "Camp Nou", "Martinez Munuera");
        aserciones.expect(salidaMetodo).toEqual(true);
        
        var lista_copia = oncerealmadrid;
        lista_copia.pop();
        var salidaMetodo2 = partido_prueba.comprobarDatosPartido(barcelona, realmadrid, new Date(2020, 10, 24, 16, 0, 0), oncebarcelona,
        lista_copia, suplentesbarcelona, suplentesrealmadrid, "Camp Nou", "Martinez Munuera");
        aserciones.expect(salidaMetodo2).toEqual(false);
    });

});

describe("Tests de la funciones del archivo utils.js", () =>{

    test("Comprobación del funcionamiento de la función getJugadoresEquipo() con formato JSON", () => {
        var salidametodo = JSON.stringify(utils.getJugadoresEquipo(true, "barcelona",false));
        archivo['FC Barcelona'].forEach(jugador => {
            aserciones.expect(salidametodo).toInclude(JSON.stringify(jugador));
        });
    });

    test("Comprobación del funcionamiento de la función getJugadoresEquipo() con formato string", () => {
        var salidametodo = utils.getJugadoresEquipo(false, "barcelona",false);
        archivo['FC Barcelona'].forEach(jugador => {
            aserciones.expect(salidametodo).toInclude(jugador['nombre']);
        });
    });

    test("Comprobación del funcionamiento de la función getJugadoresEquipo() con un equipo inexistente", () => {
        var salidametodo = utils.getJugadoresEquipo(false, "equipoquenoexiste",false);
        aserciones.expect(salidametodo).toEqual("");
    });

    test("Comprobación del funcionamiento de la función getRankingValorEquipos() con formato JSON", () => {
        var salidametodo = utils.getRankingValorEquipos(true);
        var nombres_equipos = Object.keys(salidametodo);
        for (let i = 0; i < nombres_equipos.length-1; i++) {
            aserciones.expect(parseFloat(salidametodo[nombres_equipos[i]])).toBeGreaterOrEqualThan(parseFloat(salidametodo[nombres_equipos[i+1]]));
        }
    });

    test("Comprobación del funcionamiento de la función getRankingValorEquipos() con formato string", () => {
        var salidametodo = utils.getRankingValorEquipos(false);
        var nombres_equipos = Object.keys(archivo);
        for (let i = 0; i < nombres_equipos.length; i++) {
            aserciones.expect(salidametodo).toInclude(nombres_equipos[i]);
        }
    });
});

describe("Tests de la clase Liga", () =>{

    test("Comprobación del funcionamiento del constructor", () => {
        var equipos_liga = liga.getEquipos();

        var keys = Object.keys(archivo);

        equipos_liga.forEach(equipo => {
            aserciones.expect(keys).toInclude(equipo.getNombre());
        });
    });

    test("Comprobación del funcionamiento del constructor con tipos de datos no válidos", () => {
        thrown_error = () => new Liga("Barcelona");
        expectedError = new Error('Tipos de dato no validos');
        expect(thrown_error).toThrow(expectedError);
    });

    test("Comprobación del método verJugadoresEquipo()", () => {
        var equipo_vacio_1 = liga.verJugadoresEquipo("NoExiste" , true);
        var equipo_vacio_2 = liga.verJugadoresEquipo("NoExiste" , false);

        var barcelona = liga.verJugadoresEquipo("Barcelona", false);

        aserciones.expect(equipo_vacio_2).toEqual("");
        aserciones.expect(Object.keys(equipo_vacio_1).length).toEqual(0);

        aserciones.expect(barcelona).toInclude("Barcelona");
        aserciones.expect(barcelona).toNotInclude("Real Madrid");
    });

    test("Comprobación del método verJugador()", () => {
        var jugador_inexistente_1 = liga.verJugador("NoExiste", true);
        var jugador_inexistente_2 = liga.verJugador("NoExiste", false);
        var messi_1 = liga.verJugador("Messi", true);
        var messi_2 = liga.verJugador("Messi", false);

        aserciones.expect(jugador_inexistente_2).toEqual("");
        aserciones.expect(jugador_inexistente_1["NoExiste"].length).toEqual(0);

        aserciones.expect(messi_2).toInclude("Lionel Messi");
        aserciones.expect(messi_2).toNotInclude("Real Madrid");

        aserciones.expect(messi_1["Messi"][0]["nombre"]).toEqual("Lionel Messi");
        aserciones.expect(messi_1["Messi"][0]["nacionalidad"]).toNotInclude("Francia");
    });

});