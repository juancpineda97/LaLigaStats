const Equipo = require("./equipo.js");
const Jugador = require("./jugador.js");

const data = require("../data/equipos.json");
var archivo = JSON.parse(JSON.stringify(data));
var keys = Object.keys(archivo);

/**
 * Función que devuelve los jugadores de un equipo dado.
 * @param {boolean} JSON - True si se quiere la salida en formato de JSON, false si se quiere en formato de string.
 * @param {String} equipo - Equipo del que se quieren mostrar los jugadores.
 */
function getJugadoresEquipo(JSON, equipo){
    var equipos_a_mostrar = [];
    var re = new RegExp(equipo, "i");

    for (var i in keys){
        if (keys[i].toString().match(re)){
            equipos_a_mostrar.push(keys[i]);
        }
    }

    if (equipos_a_mostrar.length == 0){
        return "";
    }
    else{
        var mensaje;
        if (JSON){
            mensaje = {};
            for (let j = 0; j < equipos_a_mostrar.length; j++) {
                var equipo_temp = [];
                equipo_temp = archivo[equipos_a_mostrar[j]];
                mensaje[equipos_a_mostrar[j]] = equipo_temp;
            }
            return mensaje;
        }
        else{
            mensaje = "";
            for (let j = 0; j < equipos_a_mostrar.length; j++) {
                var lista_jugadores = [];
                for (let k = 0; k < archivo[equipos_a_mostrar[j]].length; k++){
                    var jugador_temp = new Jugador(
                        archivo[equipos_a_mostrar[j]][k]["nombre"],
                        equipos_a_mostrar[j],
                        archivo[equipos_a_mostrar[j]][k]["nacionalidad"],
                        archivo[equipos_a_mostrar[j]][k]["fechaNacimiento"],
                        archivo[equipos_a_mostrar[j]][k]["valor"],
                        archivo[equipos_a_mostrar[j]][k]["dorsal"],
                        archivo[equipos_a_mostrar[j]][k]["posicion"],
                        archivo[equipos_a_mostrar[j]][k]["pieHabil"],
                        archivo[equipos_a_mostrar[j]][k]["altura"],
                        archivo[equipos_a_mostrar[j]][k]["capitan"]);

                    lista_jugadores.push(jugador_temp);
                }
                var equipo_temp = new Equipo(equipos_a_mostrar[j], lista_jugadores);
                mensaje = mensaje + equipo_temp.verEquipo();
                if (j < equipos_a_mostrar.length - 1){
                    mensaje = mensaje + "\n\n\n";
                }
            }
            return mensaje;
        }
    }
}

module.exports = {getJugadoresEquipo};