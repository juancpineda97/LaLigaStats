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
     */
    constructor(nombre, equipo, nacionalidad, fechaNacimiento){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nacionalidad = nacionalidad;
        this.fechaNacimiento = fechaNacimiento;
    }

}