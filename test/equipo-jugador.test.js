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
            expect(salidametodo.includes(elemento.verJugador())).toBe(true);
        })
    });

    test("Comprobación del funcionamiento del método verEquipo() con un equipo sin jugadores", () => {
        var salidametodo = teamempty.verEquipo();
        expect(salidametodo.includes("Equipo sin jugadores actualmente.")).toBe(true);  
    });

    test("Comprobando que se muestran los jugadores de un equipo correctamente", () => {
        var salidametodo = team.verEquipo();
        expect(typeof salidametodo).toBe("string");
        expect(salidametodo.includes("Lista de jugadores del")).toBe(true);
        expect(salidametodo.includes(player1.verJugador())).toBe(true);
        expect(salidametodo.includes(player2.verJugador())).toBe(true);
        expect(salidametodo.includes(player3.verJugador())).toBe(true);
    });

});

describe("Tests relacionados con la funcionalidad de mostrar al usuario los datos de un jugador", () =>{
    
    test("Comprobación del funcionamiento del método verJugador()", () => {
        var salidametodo = player1.verJugador();
        expect(salidametodo.includes(player1.nombre)).toBe(true);
        expect(salidametodo.includes(player1.equipo)).toBe(true);
        expect(salidametodo.includes(player1.nacionalidad)).toBe(true);
        expect(salidametodo.includes(player1.fechaNacimiento)).toBe(true);
        expect(salidametodo.includes(player1.valor)).toBe(true);
        expect(salidametodo.includes(player1.dorsal)).toBe(true);
        expect(salidametodo.includes(player1.posicion)).toBe(true);
    });

    test("Comprobando que se muestran los datos de varios jugadores correctamente", () => {
        var salidametodo3 = player3.verJugador();
        var salidametodo4 = player4.verJugador();
        var salidametodo5 = player5.verJugador();

        expect(typeof salidametodo3 === "string" && typeof salidametodo4 === "string" && typeof salidametodo5 === "string").toBe(true);
        
        var valor_player3 = player3.valor;
        var equipo_player4 = player4.equipo;
        var fecha_n_player5 = player5.fechaNacimiento;
        var dorsal_player4 = player4.dorsal;
        var posicion_player5 = player5.posicion;

        expect(salidametodo3.includes(valor_player3)).toBe(true);
        expect(salidametodo4.includes(equipo_player4)).toBe(true);
        expect(salidametodo5.includes(fecha_n_player5)).toBe(true);
        expect(salidametodo4.includes(dorsal_player4)).toBe(true);
        expect(salidametodo5.includes(posicion_player5)).toBe(true);
        expect(salidametodo3.includes(player5.nombre)).toBe(false);
    });

});

describe("Test de la clase Jugador", () =>{

    test("Comprobación del funcionamiento del constructor", () => {
        expect(player1.nombre).toBe("Griezmann");
        expect(player1.equipo).toBe("Barcelona");
        expect(player1.nacionalidad).toBe("Francia");
        expect(player1.fechaNacimiento).toBe("21/03/1991");
        expect(player1.valor).toBe(80);
        expect(player1.dorsal).toBe(7);
        expect(player1.posicion).toBe("DL");
    });

    test("Comprobación del funcionamiento del constructor con tipos de dato no válidos", () => {
        thrown_error = () => new Jugador(404, "Barcelona", "Brasil", "12/06/1992", 60, 14, "DL");
        expectedError = new Error('Tipos de dato no validos');
        expect(thrown_error).toThrow(expectedError);
    });

    test("Comprobación del método comprobarDatos(...) con datos correctos", () => {
        var salidaMetodo = player1.comprobarDatos("Coutinho", "Barcelona", "Brasil", "12/06/1992", 60, 14, "DL");
        expect(salidaMetodo).toBe(true);
    });

    test("Comprobación del método comprobarDatos(...) con datos no válidos", () => {
        var salidaMetodo = player1.comprobarDatos("Coutinho", 555, "Brasil", "12/06/1992", 60, 14, "RF");
        expect(salidaMetodo).toBe(false);
    });

});

describe("Test de la clase Equipo", () =>{

    test("Comprobación del funcionamiento del constructor", () => {
        expect(team.nombre).toBe("Barcelona");
        expect(team.listaJugadores.length).toBe(3);
    });

    test("Comprobación del funcionamiento del constructor con tipos de dato no válidos", () => {
        thrown_error = () => new Equipo(404, listempty);
        expectedError = new Error('Tipos de dato no validos');
        expect(thrown_error).toThrow(expectedError);
    });

});