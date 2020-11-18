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
            var nombre = nombre_p;
            var listaJugadores = new Array();
            listaJugadores = listaJugadores_p;
        }

        //Get de atributos privados

        this.getNombre = function(){
            return nombre;
        }

        this.getListaJugadores = function(){
            return listaJugadores;
        }
    }
    
    /**
     * Método que muestra todos los jugadores de un equipo.
     * @returns {String} Datos de los jugadores del equipo dado.
     */
    verEquipo(){

        var jugadores;

        if(Object.keys(this.getListaJugadores()).length === 0){
            jugadores = "Equipo sin jugadores actualmente.";
        }
        else{
            jugadores = "Lista de jugadores del " + this.getNombre() + ":";
        
            this.getListaJugadores().forEach(function(elemento) {
                jugadores += "\n\n" + elemento.verJugador();
            })
        }

        return jugadores;
    }
}

module.exports = Equipo;