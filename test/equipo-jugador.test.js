const Equipo = require("../src/equipo.js");
const Jugador = require("../src/jugador.js");

// Variables para tests
var player1 = new Jugador("Griezmann", "Barcelona", "Francia", "21/03/1991", 80);
var player2 = new Jugador("Messi", "Barcelona", "Argentina", "24/06/1987", 100);
var player3 = new Jugador("Coutinho", "Barcelona", "Brasil", "12/06/1992", 60);
let listaJugadores = [player1, player2, player3];
var team = new Equipo("Barcelona", listaJugadores);
let listempty = new Array();
var teamempty = new Equipo("Barcelona", listempty);

describe("Test de la clase Jugador", () =>{

    test("Comprobación del funcionamiento del constructor", () => {
        expect(player1.nombre).toBe("Griezmann");
        expect(player1.equipo).toBe("Barcelona");
        expect(player1.nacionalidad).toBe("Francia");
        expect(player1.fechaNacimiento).toBe("21/03/1991");
        expect(player1.valor).toBe(80);
    });

    test("Comprobación del funcionamiento del constructor con tipos de dato no válidos", () => {
        thrown_error = () => new Jugador(404, "Barcelona", "Brasil", "12/06/1992", 60);
        expectedError = new Error('Tipos de dato no validos');
        expect(thrown_error).toThrow(expectedError);
    });

    test("Comprobación del funcionamiento del método verJugador()", () => {
        var salidametodo = player1.verJugador();
        expect(salidametodo.includes(player1.nombre)).toBe(true);
        expect(salidametodo.includes(player1.equipo)).toBe(true);
        expect(salidametodo.includes(player1.nacionalidad)).toBe(true);
        expect(salidametodo.includes(player1.fechaNacimiento)).toBe(true);
        expect(salidametodo.includes(player1.valor)).toBe(true);
    });

    test("Comprobación del método comprobarDatos(...) con datos correctos", () => {
        var salidaMetodo = player1.comprobarDatos("Coutinho", "Barcelona", "Brasil", "12/06/1992", 60);
        expect(salidaMetodo).toBe(true);
    });

    test("Comprobación del método comprobarDatos(...) con datos no válidos", () => {
        var salidaMetodo = player1.comprobarDatos("Coutinho", 555, "Brasil", "12/06/1992", 60);
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

});