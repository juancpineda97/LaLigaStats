/**
 * Clase que representa al objeto Jugador
 */
class Jugador{

    /**
     * Constructor básico de la clase Jugador.
     * @param {String} nombre - Nombre del jugador
     * @param {String} equipo - Nombre del equipo al que pertenece
     * @param {String} nacionalidad - Nacionalidad del jugador
     * @param {String} fechaNacimiento - Fecha de nacimiento
     * @param {double} valor - Valor del jugador en millones de euros.
     * @param {int} dorsal_p - Dorsal del jugador en el equipo.
     * @param {String} posicion_p - Posición del jugador.
     */
    constructor(nombre_p, equipo_p, nacionalidad_p, fechaNacimiento_p, valor_p, dorsal_p, posicion_p){
        var sonValidos = this.comprobarDatos(nombre_p, equipo_p, nacionalidad_p, fechaNacimiento_p, valor_p);
        if(!sonValidos){
            throw new Error('Tipos de dato no validos');
        }
        else{
            this.nombre = nombre_p;
            this.equipo = equipo_p;
            this.nacionalidad = nacionalidad_p;
            this.fechaNacimiento = fechaNacimiento_p;
            this.valor = valor_p;
            this.dorsal = dorsal_p;
            this.posicion = posicion_p;
        }
        
    }

    /**
     * Método que muestra los datos del jugador.
     * @returns {String} Datos del jugador. 
     */
    verJugador(){
        var datosJugador = "Nombre: " + this.nombre + "\n" +
        "Equipo: " + this.equipo + "\n" +
        "Nacionalidad: " + this.nacionalidad + "\n" +
        "Fecha de nacimiento: " + this.fechaNacimiento + "\n" +
        "Valor(M): " + this.valor
        return datosJugador;
    }

    /**
     * Método que comprueba que los datos son del tipo correcto.
     * @param {String} nombre_p - Nombre del jugador
     * @param {String} equipo_p - Nombre del equipo al que pertenece
     * @param {String} nacionalidad_p - Nacionalidad del jugador
     * @param {String} fechaNacimiento_p - Fecha de nacimiento
     * @param {double} valor_p - Valor del jugador en millones de euros.
     * @param {int} dorsal_p - Dorsal del jugador en el equipo.
     * @param {String} posicion_p - Posición del jugador.
     */
    comprobarDatos(nombre_p, equipo_p, nacionalidad_p, fechaNacimiento_p, valor_p, dorsal_p, posicion_p){
        var correctos = false;
        if(typeof nombre_p === 'string' && typeof equipo_p === 'string' && typeof nacionalidad_p === 'string' && typeof fechaNacimiento_p === 'string' && typeof valor_p === 'number'){
            correctos = true;
        }
        return correctos;
    }
}

module.exports = Jugador;