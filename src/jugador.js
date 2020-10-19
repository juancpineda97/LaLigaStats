/**
 * Clase que representa al objeto Equipo
 */
class Jugador{

    /**
     * Constructor básico de la clase Jugador.
     * @param {String} nombre - Nombre del jugador
     * @param {String} equipo - Nombre del equipo al que pertenece
     * @param {String} nacionalidad - Nacionalidad del jugador
     * @param {String} fechaNacimiento - Fecha de nacimiento
     * @param {double} valor - Valor del jugador en millones de euros.
     */
    constructor(nombre, equipo, nacionalidad, fechaNacimiento, valor){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nacionalidad = nacionalidad;
        this.fechaNacimiento = fechaNacimiento;
        this.valor = valor
    }

    /**
     * Método que muestra los datos del jugador.
     * @returns {String} Datos del jugador. 
     */
    verJugador(){

    }
}

module.exports = Jugador;