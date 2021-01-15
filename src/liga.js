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


    /**
     * Método para obtener la lista completa de jugadores de la liga.
     * @returns {array[Jugador]} - Lista de jugadores
     */
    getJugadores(){
        var jugadores = [];

        this.getEquipos().forEach(equipo => {
            equipo.getListaJugadores().forEach(jugador => {
                jugadores.push(jugador);
            });
        });

        return jugadores;
    }


    /**
     * Método que devuelve los jugadores de un equipo dado
     * @param {String} nombreEquipo - Nombre del equipo a mostrar
     * @param {boolean} JSON - True si se quieren los resultados en formato de JSON, False en formato de String.
     * @returns {JSON || boolean} - Jugadores del equipo
     */
    verJugadoresEquipo(nombreEquipo, JSON){
        var re = new RegExp(nombreEquipo, "i");
        var resultado;

        if (JSON){
            resultado = {};
        }
        else {
            resultado = "";
        }

        var equipos_total = this.getEquipos();
        var equipos_coinciden = []

        equipos_total.forEach(equipo => {
            if(equipo.getNombre().match(re)){
                equipos_coinciden.push(equipo);
            }
        });

        equipos_coinciden.forEach(equipo => {

            if (JSON){
                resultado[equipo.getNombre()] = [];

                equipo.getListaJugadores().forEach(jugador => {
                    var datos_jugador = {};
                    datos_jugador['nombre'] = jugador.getNombre();
                    datos_jugador['nacionalidad'] = jugador.getNacionalidad();
                    datos_jugador['fechaNacimiento'] = jugador.getFechaNacimiento();
                    datos_jugador['valor'] = jugador.getValor();
                    datos_jugador['dorsal'] = jugador.getDorsal();
                    datos_jugador['posicion'] = jugador.getPosicion();
                    datos_jugador['pieHabil'] = jugador.getPieHabil();
                    datos_jugador['altura'] = jugador.getAltura();
                    datos_jugador['capitan'] = jugador.getCapitan();
                    
                    resultado[equipo.getNombre()].push(datos_jugador);
                });
            }

            else {
                resultado += equipo.verEquipo();
            }
            
        });

        return resultado;

    }

    /**
     * Método que muestra a los jugadores que coinciden con el nombre dado
     * @param {String} nombre - Nombre del jugador a mostrar
     * @param {boolean} JSON - True si se quieren los resultados en formato de JSON, False en formato de String.
     * @returns {JSON || boolean} - Jugadores que coinciden con el nombre
     */
    verJugador(nombre, JSON){
        var re = new RegExp(nombre, "i");
        var resultado;

        if (JSON){
            resultado = {};
            resultado[nombre] = [];
        }
        else {
            resultado = "";
        }

        var jugadores_total = this.getJugadores();
        var jugadores_coinciden = [];

        jugadores_total.forEach(jugador => {
            if(jugador.getNombre().match(re)){
                jugadores_coinciden.push(jugador);
            }
        });

        jugadores_coinciden.forEach(jugador => {
            
            if (JSON){

                var datos_jugador = {};
                datos_jugador['nombre'] = jugador.getNombre();
                datos_jugador['nacionalidad'] = jugador.getNacionalidad();
                datos_jugador['fechaNacimiento'] = jugador.getFechaNacimiento();
                datos_jugador['valor'] = jugador.getValor();
                datos_jugador['dorsal'] = jugador.getDorsal();
                datos_jugador['posicion'] = jugador.getPosicion();
                datos_jugador['pieHabil'] = jugador.getPieHabil();
                datos_jugador['altura'] = jugador.getAltura();
                datos_jugador['capitan'] = jugador.getCapitan();
                    
                resultado[nombre].push(datos_jugador);
            }
            else{
                resultado += jugador.verJugador() + "\n\n";
            }
        });

        return resultado;
    }

}

module.exports = Liga;