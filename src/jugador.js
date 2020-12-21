/**
 * Clase que representa al objeto Jugador
 */
class Jugador{

    /**
     * Constructor básico de la clase Jugador.
     * @param {String} nombre_p - Nombre del jugador
     * @param {String} equipo_p - Nombre del equipo al que pertenece
     * @param {String} nacionalidad_p - Nacionalidad del jugador
     * @param {String} fechaNacimiento_p - Fecha de nacimiento
     * @param {double} valor_p - Valor del jugador en millones de euros.
     * @param {int} dorsal_p - Dorsal del jugador en el equipo.
     * @param {String} posicion_p - Posición del jugador, valores posibles = "PT" , "DF" , "MC" , "DL".
     * @param {int} pieHabil_p - Pie hábil del jugador
     * @param {int} altura_p - Altura del jugador.
     * @param {int} capitan_p - True si es el capitan del equipo, False en otro caso.
     */
    constructor(nombre_p, equipo_p, nacionalidad_p, fechaNacimiento_p, valor_p, dorsal_p, posicion_p){
        var sonValidos = this.comprobarDatos(nombre_p, equipo_p, nacionalidad_p, fechaNacimiento_p, valor_p, dorsal_p, posicion_p, pieHabil_p, altura_p, capitan_p);
        if(!sonValidos){
            throw new Error('Tipos de dato no validos');
        }
        else{
            //Atributos Privados
            var nombre = nombre_p;
            var equipo = equipo_p;
            var nacionalidad = nacionalidad_p;
            var fechaNacimiento = fechaNacimiento_p;
            var valor = valor_p;
            var dorsal = dorsal_p;
            var posicion = posicion_p;
            var pieHabil = pieHabil_p;
            var altura = altura_p;
            var capitan = capitan_p;
        }

        //Get de atributos privados

        this.getNombre = function(){
  	        return nombre;
        }

        this.getEquipo = function(){
  	        return equipo;
        }

        this.getNacionalidad = function(){
  	        return nacionalidad;
        }

        this.getFechaNacimiento = function(){
  	        return fechaNacimiento;
        }

        this.getValor = function(){
  	        return valor;
        }

        this.getDorsal = function(){
  	        return dorsal;
        }

        this.getPosicion = function(){
  	        return posicion;
        }

        this.getPieHabil = function(){
            return pieHabil;
        }

        this.getAltura = function(){
                return altura;
        }

        this.getCapitan = function(){
                return capitan;
        }
    }

    /**
     * Método que muestra los datos del jugador.
     * @returns {String} Datos del jugador. 
     */
    verJugador(){
        var datosJugador = "Nombre: " + this.getNombre() + "\n" +
        "Equipo: " + this.getEquipo() + "\n" +
        "Nacionalidad: " + this.getNacionalidad() + "\n" +
        "Fecha de nacimiento: " + this.getFechaNacimiento() + "\n" +
        "Valor(M): " + this.getValor() + "\n" +
        "Dorsal: " + this.getDorsal() + "\n" +
        "Posición: " + this.getPosicion() + "\n" +
        "Pie Hábil: ";
        
        if (this.getPieHabil() == 'D'){
            datosJugador = datosJugador + "Diestro" + "\n";
        }
        else if (this.getPieHabil() == 'I'){
            datosJugador = datosJugador + "Zurdo" + "\n";
        }
        else{
            datosJugador = datosJugador + "Ambidiestro" + "\n";
        }
        
        datosJugador = datosJugador + "Altura (m): " + this.getAltura();

        if (this.getCapitan == true){
            datosJugador = datosJugador + "\n" + "CAPITÁN del equipo";
        }

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
     * @returns {String} True si los datos son correctos, False en otro caso.
     */
    comprobarDatos(nombre_p, equipo_p, nacionalidad_p, fechaNacimiento_p, valor_p, dorsal_p, posicion_p){
        var correctos = false;
        if(typeof nombre_p === 'string' && typeof equipo_p === 'string' && 
        typeof nacionalidad_p === 'string' && typeof fechaNacimiento_p === 'string' && 
        typeof valor_p === 'number' && typeof dorsal_p === 'number' && 
        typeof posicion_p === 'string' && (posicion_p === "PT" || posicion_p === "DF" || posicion_p === "MC" || posicion_p === "DL")){
            correctos = true;
        }
        return correctos;
    }
}

module.exports = Jugador;