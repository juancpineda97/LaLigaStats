const Equipo = require("../src/equipo.js");
const Jugador = require("../src/jugador.js");
const Asercion = require("../src/asserts.js");

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