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

        this.aniadeJugador = function(jugador){
            if (typeof jugador != 'object'){
                throw new Error('Tipo de dato no valido');
            }

            if (jugador.getEquipo() != nombre){
                throw new Error('El equipo del jugador no coincide');
            }

            if (jugador.getDorsal() != 0){
                throw new Error('El dorsal debe ser 0 al inicio');
            }

            listaJugadores.push(jugador);
        }

        this.eliminaJugador = function(jugador){
            if (typeof jugador != 'object'){
                throw new Error('Tipo de dato no valido');
            }

            var i = listaJugadores.indexOf(jugador);
 
            if ( i !== -1 ) {
                listaJugadores.splice( i, 1 );
            }
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