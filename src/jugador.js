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
        var datosJugador = "Nombre: " + this.nombre + "\n" +
        "Equipo: " + this.equipo + "\n" +
        "Nacionalidad: " + this.nacionalidad + "\n" +
        "Fecha de nacimiento: " + this.fechaNacimiento + "\n" +
        "Valor(M): " + this.valor;
        return datosJugador;
    }

    /**
     * Método que comprueba que los datos son del tipo correcto.
     * @param {String} nombre_p - Nombre del jugador
     * @param {String} equipo_p - Nombre del equipo al que pertenece
     * @param {String} nacionalidad_p - Nacionalidad del jugador
     * @param {String} fechaNacimiento_p - Fecha de nacimiento
     * @param {double} valor_p - Valor del jugador en millones de euros.
     */
    comprobarDatos(nombre_p, equipo_p, nacionalidad_p, fechaNacimiento_p, valor_p){
        var correctos = false;
        if(typeof nombre_p === 'string' && typeof equipo_p === 'string' && typeof nacionalidad_p === 'string' && typeof fechaNacimiento_p === 'string' && typeof valor_p === 'number'){
            correctos = true;
        }
        return correctos;
    }
}

module.exports = Jugador;