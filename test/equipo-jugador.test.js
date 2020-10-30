const Equipo = require("../src/equipo.js");
const Jugador = require("../src/jugador.js");
const Asercion = require("../src/asserts.js");
const datosBarcelona = require("../test/barcelona.json");
const datosRealMadrid = require("../test/real_madrid.json");
const Partido = require("../src/partido.js");

// Variables para tests
var player1 = new Jugador("Griezmann", "Barcelona", "Francia", "21/03/1991", 80, 7, "DL");
var player2 = new Jugador("Messi", "Barcelona", "Argentina", "24/06/1987", 100, 10, "DL");
var player3 = new Jugador("Coutinho", "Barcelona", "Brasil", "12/06/1992", 60, 14, "MC");
var player4 = new Jugador("Koke", "Atlético de Madrid", "España", "08/01/1992", 60, 6, "MC");
var player5 = new Jugador("Courtois", "Real Madrid", "Bélgica", "11/05/1992", 75, 1, "PT");
let listaJugadores = [player1, player2, player3];
var team = new Equipo("Barcelona", listaJugadores);
let listempty = new Array();
var teamempty = new Equipo("Barcelona", listempty);
var aserciones = new Asercion();

var archivobarcelona = JSON.parse(JSON.stringify(datosBarcelona));
var archivorealmadrid = JSON.parse(JSON.stringify(datosRealMadrid));
var barcelonajugadores = [];
var realmadridjugadores = [];

for (let i = 0; i < 16; i++) {
    var tempplayer1 = new Jugador(archivobarcelona[i]["nombre"], archivobarcelona[i]["equipo"], archivobarcelona[i]["nacionalidad"], 
    archivobarcelona[i]["fechaNacimiento"], parseInt(archivobarcelona[i]["valor"], 10), parseInt(archivobarcelona[i]["dorsal"], 10), archivobarcelona[i]["posicion"]);
    
    var tempplayer2 = new Jugador(archivorealmadrid[i]["nombre"], archivorealmadrid[i]["equipo"], archivorealmadrid[i]["nacionalidad"], 
    archivorealmadrid[i]["fechaNacimiento"], parseInt(archivorealmadrid[i]["valor"], 10), parseInt(archivorealmadrid[i]["dorsal"], 10), archivorealmadrid[i]["posicion"]);
    
    barcelonajugadores.push(tempplayer1);
    realmadridjugadores.push(tempplayer2);
}

var barcelona = new Equipo("Barcelona", barcelonajugadores);
var realmadrid = new Equipo("Real Madrid", realmadridjugadores);
var oncebarcelona = [1,18,15,3,20,5,21,14,11,7,10];
var suplentesbarcelona = [13,2,8,22,17];
var oncerealmadrid = [1,23,4,5,2,14,15,8,7,20,9];
var suplentesrealmadrid = [13,12,10,22,18];
var partido_prueba = new Partido(barcelona, realmadrid, new Date(2020, 10, 24, 16, 0, 0), oncebarcelona,
oncerealmadrid, suplentesbarcelona, suplentesrealmadrid, "Camp Nou", "Martinez Munuera");


describe("Tests relacionados con la funcionalidad de mostrar al usuario los jugadores de un equipo", () =>{

    test("Comprobación del funcionamiento del método verEquipo()", () => {
        var salidametodo = team.verEquipo();
        team.listaJugadores.forEach(function(elemento) {
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

        aserciones.expect(salidametodo).toInclude(player1.nombre);
        aserciones.expect(salidametodo).toInclude(player1.equipo);
        aserciones.expect(salidametodo).toInclude(player1.nacionalidad);
        aserciones.expect(salidametodo).toInclude(player1.fechaNacimiento);
        aserciones.expect(salidametodo).toInclude(player1.valor);
        aserciones.expect(salidametodo).toInclude(player1.dorsal);
        aserciones.expect(salidametodo).toInclude(player1.posicion);
    });

    test("Comprobando que se muestran los datos de varios jugadores correctamente", () => {
        var salidametodo3 = player3.verJugador();
        var salidametodo4 = player4.verJugador();
        var salidametodo5 = player5.verJugador();

        aserciones.expect(salidametodo3).toBeType("string");
        aserciones.expect(salidametodo4).toBeType("string");
        aserciones.expect(salidametodo5).toBeType("string");
        
        var valor_player3 = player3.valor;
        var equipo_player4 = player4.equipo;
        var fecha_n_player5 = player5.fechaNacimiento;
        var dorsal_player4 = player4.dorsal;
        var posicion_player5 = player5.posicion;

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
        var lista_11inicial_barcelona = ["1 - Ter Stegen" , "18 - Jordi Alba" , "15 - Lenglet" , "3 - Piqué" , "20 - Sergi Roberto" ,
        "5 - Busquets" , "21 - Frenkie de Jong" , "14 - Coutinho" , "11 - Dembélé" , "7 - Griezmann" , "10 - Messi"];
        var lista_11inicial_realmadrid = ["1 - Courtois" , "23 - Mendy" , "4 - Sergio Ramos" , "5 - Varane" , "2 - Carvajal" , 
        "14 - Casemiro" , "15 - Valverde" , "8 - Kroos" , "7 - Hazard" , "20 - Vinícius" , "9 - Benzema"];
        var lista_suplentes_barcelona = ["13 - Neto" , "2 - Dest" , "8 - Pjanic" , "22 - Ansu Fati" , "17 - Trincão"];
        var lista_suplentes_realmadrid = ["13 - Lunin" , "12 - Marcelo" , "10 - Modric" , "22 - Isco" , "18 - Jovic"];
        
        aserciones.expect(salidametodo).toInclude(barcelona.nombre);
        aserciones.expect(salidametodo).toInclude(partido_prueba.arbitro);
        aserciones.expect(salidametodo).toInclude(partido_prueba.fecha.getDate());
        aserciones.expect(salidametodo).toInclude(partido_prueba.fecha.getMonth());
        aserciones.expect(salidametodo).toInclude(partido_prueba.fecha.getFullYear());
        aserciones.expect(salidametodo).toInclude(partido_prueba.fecha.getHours());
        aserciones.expect(salidametodo).toInclude(partido_prueba.fecha.getSeconds());
        aserciones.expect(salidametodo).toInclude(partido_prueba.fecha.getMinutes());

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
        aserciones.expect(player1.nombre).toEqual("Griezmann");
        aserciones.expect(player1.equipo).toEqual("Barcelona");
        aserciones.expect(player1.nacionalidad).toEqual("Francia");
        aserciones.expect(player1.fechaNacimiento).toEqual("21/03/1991");
        aserciones.expect(player1.valor).toEqual(80);
        aserciones.expect(player1.dorsal).toEqual(7);
        aserciones.expect(player1.posicion).toEqual("DL");
    });

    test("Comprobación del funcionamiento del constructor con tipos de dato no válidos", () => {
        thrown_error = () => new Jugador(404, "Barcelona", "Brasil", "12/06/1992", 60, 14, "DL");
        expectedError = new Error('Tipos de dato no validos');
        expect(thrown_error).toThrow(expectedError);
    });

    test("Comprobación del método comprobarDatos(...) con datos correctos", () => {
        var salidaMetodo = player1.comprobarDatos("Coutinho", "Barcelona", "Brasil", "12/06/1992", 60, 14, "DL");
        aserciones.expect(salidaMetodo).toEqual(true);
    });

    test("Comprobación del método comprobarDatos(...) con datos no válidos", () => {
        var salidaMetodo = player1.comprobarDatos("Coutinho", 555, "Brasil", "12/06/1992", 60, 14, "RF");
        aserciones.expect(salidaMetodo).toEqual(false);
    });

});

describe("Test de la clase Equipo", () =>{

    test("Comprobación del funcionamiento del constructor", () => {
        aserciones.expect(team.nombre).toEqual("Barcelona");
        aserciones.expect(team.listaJugadores.length).toEqual(3);
    });

    test("Comprobación del funcionamiento del constructor con tipos de dato no válidos", () => {
        thrown_error = () => new Equipo(404, listempty);
        expectedError = new Error('Tipos de dato no validos');
        expect(thrown_error).toThrow(expectedError);
    });

});

describe("Test de la clase Partido", () =>{

    test("Comprobación del funcionamiento del constructor", () => {
        aserciones.expect(partido_prueba.equipoLocal.nombre).toEqual("Barcelona");
        aserciones.expect(partido_prueba.equipoVisitante.nombre).toEqual("Real Madrid");
        aserciones.expect(partido_prueba.onceInicialLocal.length).toEqual(11);
        aserciones.expect(partido_prueba.onceInicialVisitante.length).toEqual(11);
        for (let i = 0; i < 11; i++) {
            expect(partido_prueba.onceInicialLocal[i]).toEqual(oncebarcelona[i]);
            expect(partido_prueba.onceInicialVisitante[i]).toEqual(oncerealmadrid[i]);
        }
        for (let i = 0; i < suplentesbarcelona; i++) {
            expect(partido_prueba.suplentesLocal[i]).toEqual(suplentesbarcelona[i]);
        }
        for (let i = 0; i < suplentesrealmadrid; i++) {
            expect(partido_prueba.suplentesVisitante[i]).toEqual(suplentesrealmadrid[i]);
        }
        aserciones.expect(partido_prueba.fecha.toString()).toInclude("Nov 24 2020 16:00:00");
        aserciones.expect(partido_prueba.estadio).toEqual("Camp Nou");
        aserciones.expect(partido_prueba.arbitro).toEqual("Martinez Munuera");
        aserciones.expect(partido_prueba.golesLocal).toEqual(0);
        aserciones.expect(partido_prueba.golesVisitante).toEqual(0);
    });

    test("Comprobación del funcionamiento del constructor con tipos de datos no válidos", () => {
        thrown_error = () => new Partido("Barcelona", "Real Madrid", "20/12/2020 16:00", oncebarcelona,
        oncerealmadrid, suplentesbarcelona, suplentesrealmadrid, "Camp Nou", "Martinez Munuera");
        expectedError = new Error('Tipos de dato no validos');
        expect(thrown_error).toThrow(expectedError);
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