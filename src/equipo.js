/**
 * Clase que representa al objeto Equipo
 */
class Equipo{

    /**
     * Constructor básico de la clase Equipo.
     * @param {string} nombre - Nombre del equipo
     * @param {Array[Jugador]} listaJugadores - Lista con los jugadores del equipo
     */
    constructor(nombre, listaJugadores){
        this.nombre = nombre;
        this.listaJugadores = new Array();
        this.listaJugadores = listaJugadores;
    }
    
    /**
     * Método que muestra todos los jugadores de un equipo.
     * @param {String} nombreEquipo 
     */
    verEquipo(nombreEquipo){

    }
}

module.exports = Equipo;