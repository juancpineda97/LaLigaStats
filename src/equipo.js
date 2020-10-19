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
     * @returns {String} Datos de los jugadores del equipo dado.
     */
    verEquipo(){

        var jugadores;

        if(Object.keys(this.listaJugadores).length === 0){
            jugadores = "Equipo sin jugadores actualmente.";
        }
        else{
            jugadores = "Lista de jugadores del " + this.nombre + ":";
        
            this.listaJugadores.forEach(function(elemento) {
                jugadores += "\n\n" + elemento.verJugador();
            })
        }

        return jugadores;
    }
}

module.exports = Equipo;