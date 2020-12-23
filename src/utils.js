const Equipo = require("./equipo.js");
const Jugador = require("./jugador.js");

const data = require("../data/equipos.json");
var archivo = JSON.parse(JSON.stringify(data));

/**
 * Función que devuelve los jugadores de un equipo dado.
 * @param {boolean} JSON - True si se quiere la salida en formato JSON, false si se quiere en formato de string.
 * @param {String} equipo - Equipo del que se quieren mostrar los jugadores.
 */
function getJugadoresEquipo(JSON, equipo){

}