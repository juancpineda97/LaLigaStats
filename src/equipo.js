/**
 * Clase que representa al objeto Equipo
 */
class Equipo{

    /**
     * 
     * @param {string} nombre - Nombre del equipo
     * @param {Array[Jugador]} listaJugadores - Lista con los jugadores del equipo
     */
    constructor(nombre, listaJugadores){
        this.nombre = nombre;
        this.listaJugadores = new Array();
        this.listaJugadores = listaJugadores;
    }    
}