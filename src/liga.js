const Equipo = require("./equipo.js");
const Jugador = require("./jugador.js");
const Partido = require("./partido.js");

const data = require("../data/equipos.json");
var archivo = JSON.parse(JSON.stringify(data));
var keys = Object.keys(archivo);


/**
 * Clase que representa al objeto Liga
 */
class Liga{

    /**
     * Constructor básico de la clase Liga
     * @param {JSON} datos - Archivo con los datos de los equipos
     */
    constructor(datos){
        if(typeof datos != 'object'){
            throw new Error('Tipos de dato no validos');
        }
        else{
            //Atributos Privados
            var equipos = new Array();
            var partidos = new Array();
            
            //Completando equipos
            var keys = Object.keys(datos);
            keys.forEach(nombre_equipo => {
                var jugadores_equipo = []

                datos[nombre_equipo].forEach(datos_jugador => {
                    var jugador = new Jugador(datos_jugador['nombre'],
                    nombre_equipo, datos_jugador['nacionalidad'],
                    datos_jugador['fechaNacimiento'], datos_jugador['valor'],
                    datos_jugador['dorsal'], datos_jugador['posicion'],
                    datos_jugador['pieHabil'], datos_jugador['altura'],
                    datos_jugador['capitan'])

                    jugadores_equipo.push(jugador);
                });

                var equipo = new Equipo(nombre_equipo, jugadores_equipo);

                equipos.push(equipo);
                
            });
        }

        //Get de atributos privados

        this.getEquipos = function(){
            return equipos;
        }

        this.getPartidos = function(){
            return partidos;
        }
    }

}

module.exports = Liga;