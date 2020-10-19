/**
 * Clase que representa al objeto Equipo
 */
class Equipo{

    /**
     * Constructor básico de la clase Equipo.
     * @param {string} nombre_p - Nombre del equipo
     * @param {Array[Jugador]} listaJugadores_P - Lista con los jugadores del equipo
     */
    constructor(nombre_p, listaJugadores_p){
        if(typeof nombre_p !== 'string' || typeof listaJugadores_p !== 'object'){
            throw new Error('Tipos de dato no validos');
        }
        else{
            this.nombre = nombre_p;
            this.listaJugadores = new Array();
            this.listaJugadores = listaJugadores_p;
        }    
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