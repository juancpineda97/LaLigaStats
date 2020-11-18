/**
 * Clase que representa a los partidos
 */
class Partido {
    
    /**
     * Constructor de la clase Partido
     * @param {Equipo} equipoLocal_p - Equipo que juega como local
     * @param {Equipo} equipoVisitante_p - Equipo que juega como visitante
     * @param {Date} fecha_p - Fecha de inicio del partido
     * @param {Array[int]} onceInicialLocal_p - Lista de dorsales de los jugadores del 11 inicial local
     * @param {Array[int]} onceInicialVisitante_p - Lista de dorsales de los jugadores del 11 inicial visitante
     * @param {Array[int]} suplentesLocal_p - Lista de dorsales de los jugadores suplentes locales
     * @param {Array[int]} suplentesVisitante_p - Lista de dorsales de los jugadores suplentes visitantes
     * @param {string} estadio_p - Estadio en el que se juega el partido
     * @param {string} arbitro_p - Arbitro del partido
     */
    constructor(equipoLocal_p, equipoVisitante_p, fecha_p, onceInicialLocal_p, onceInicialVisitante_p, suplentesLocal_p, suplentesVisitante_p, estadio_p, arbitro_p){
        var sonValidos = this.comprobarDatosPartido(equipoLocal_p, equipoVisitante_p, fecha_p, onceInicialLocal_p, onceInicialVisitante_p, suplentesLocal_p, suplentesVisitante_p, estadio_p, arbitro_p);
        if(!sonValidos){
            throw new Error('Tipos de dato no validos');
        }
        else{
            var equipoLocal = equipoLocal_p;
            var equipoVisitante = equipoVisitante_p;
            var fecha = fecha_p;
            var onceInicialLocal = new Array();
            onceInicialLocal = onceInicialLocal_p;
            var onceInicialVisitante = new Array();
            onceInicialVisitante = onceInicialVisitante_p;
            var suplentesLocal = new Array();
            suplentesLocal = suplentesLocal_p;
            var suplentesVisitante = new Array();
            suplentesVisitante = suplentesVisitante_p;
            var estadio = estadio_p;
            var arbitro = arbitro_p;
            var golesLocal = 0;
            var golesVisitante = 0;

            //Get de atributos privados

            this.getEquipoLocal = function(){
                return equipoLocal;
            }

            this.getEquipoVisitante = function(){
                return equipoVisitante;
            }

            this.getFecha = function(){
                return fecha;
            }

            this.getOnceInicialLocal = function(){
                return onceInicialLocal;
            }

            this.getOnceInicialVisitante = function(){
                return onceInicialVisitante;
            }

            this.getSuplentesLocal = function(){
                return suplentesLocal;
            }

            this.getSuplentesVisitante = function(){
                return suplentesVisitante;
            }

            this.getEstadio = function(){
                return estadio;
            }

            this.getArbitro = function(){
                return arbitro;
            }

            this.getGolesLocal = function(){
                return golesLocal;
            }

            this.getGolesVisitante = function(){
                return golesVisitante;
            }
        }
    }

    /**
     * Método que comprueba que los datos son del tipo correcto.
     * @param {Equipo} equipoLocal_p - Equipo que juega como local
     * @param {Equipo} equipoVisitante_p - Equipo que juega como visitante
     * @param {Date} fecha_p - Fecha de inicio del partido
     * @param {Array[int]} onceInicialLocal_p - Lista de dorsales de los jugadores del 11 inicial local
     * @param {Array[int]} onceInicialVisitante_p - Lista de dorsales de los jugadores del 11 inicial visitante
     * @param {Array[int]} suplentesLocal_p - Lista de dorsales de los jugadores suplentes locales
     * @param {Array[int]} suplentesVisitante_p - Lista de dorsales de los jugadores suplentes visitantes
     * @param {string} estadio_p - Estadio en el que se juega el partido
     * @param {string} arbitro_p - Arbitro del partido
     */
    comprobarDatosPartido(equipoLocal_p, equipoVisitante_p, fecha_p, onceInicialLocal_p, onceInicialVisitante_p, suplentesLocal_p, suplentesVisitante_p, estadio_p, arbitro_p){
        var correctos = true;

        if(typeof equipoLocal_p !== 'object' || typeof equipoVisitante_p !== 'object' || 
        typeof fecha_p !== 'object' || typeof onceInicialLocal_p !== 'object' || typeof onceInicialVisitante_p !== 'object' || 
        typeof suplentesLocal_p !== 'object' || typeof suplentesVisitante_p !== 'object' || typeof estadio_p !== 'string' || typeof arbitro_p !== 'string'){
            correctos = false;
        }
        if(onceInicialLocal_p.length !== 11 || onceInicialVisitante_p.length !== 11){
            correctos = false;
        }
        for (let i = 0; i < 11; i++) {
            if(typeof onceInicialLocal_p[i] !== 'number' || typeof onceInicialVisitante_p[i] !== 'number'){
                correctos = false;
            }
        }
        for (let i = 0; i < suplentesLocal_p.lenght; i++) {
            if(typeof suplentesLocal_p[i] !== 'number'){
                correctos = false;
            }
        }
        for (let i = 0; i < suplentesVisitante_p.lenght; i++) {
            if(typeof suplentesVisitante_p[i] !== 'number'){
                correctos = false;
            }
        }        
        return correctos;
    }

    /**
     * Método que muestra los datos de un partido
     * @returns {String} Datos del partido dado.
     */
    verPartido(){
        var resultado = "";
        resultado += "Partido jugado el " + this.getFecha().getDate() + "/" + this.getFecha().getMonth() + "/" + this.getFecha().getFullYear() + 
        " a las " + this.getFecha().getHours() + ":" + this.getFecha().getMinutes() + ":" + this.getFecha().getSeconds() + "\n";
        resultado += "Equipo Local: " + this.getEquipoLocal().nombre + "\n" + "Equipo Visitante: " + this.getEquipoVisitante().nombre + "\n";
        resultado += "Resultado: " + this.getGolesLocal() + "-" + this.getGolesVisitante() + "\n";
        resultado += "Estadio: " + this.getEstadio() + " Árbitro: " + this.getArbitro() + "\n";

        var listaOnceLocal = "";
        this.getOnceInicialLocal().forEach(dorsal_tmp => {
            this.getEquipoLocal().getListaJugadores().forEach(jugador_tmp => {
                if(jugador_tmp.getDorsal() == dorsal_tmp){
                    listaOnceLocal += dorsal_tmp + " - " + jugador_tmp.getNombre() + "\n";
                }
            });
        });

        var listaOnceVisitante = "";
        this.getOnceInicialVisitante().forEach(dorsal_tmp => {
            this.getEquipoVisitante().getListaJugadores().forEach(jugador_tmp => {
                if(jugador_tmp.getDorsal() == dorsal_tmp){
                    listaOnceVisitante += dorsal_tmp + " - " + jugador_tmp.getNombre() + "\n";
                }
            });
        });

        var listaSuplentesLocal = "";
        this.getSuplentesLocal().forEach(dorsal_tmp => {
            this.getEquipoLocal().getListaJugadores().forEach(jugador_tmp => {
                if(jugador_tmp.getDorsal() == dorsal_tmp){
                    listaSuplentesLocal += dorsal_tmp + " - " + jugador_tmp.getNombre() + "\n";
                }
            });
        });

        var listaSuplentesVisitante = "";
        this.getSuplentesVisitante().forEach(dorsal_tmp => {
            this.getEquipoVisitante().getListaJugadores().forEach(jugador_tmp => {
                if(jugador_tmp.getDorsal() == dorsal_tmp){
                    listaSuplentesVisitante += dorsal_tmp + " - " + jugador_tmp.getNombre() + "\n";
                }
            });
        });

        resultado += "\nOnce inicial del " + this.getEquipoLocal().getNombre() + ":\n" + listaOnceLocal + "\n";
        resultado += "Suplentes:\n" + listaSuplentesLocal;
        resultado += "\nOnce inicial del " + this.getEquipoVisitante().getNombre() + ":\n" + listaOnceVisitante + "\n";
        resultado += "Suplentes:\n" + listaSuplentesVisitante;

        return resultado;
    }
}

module.exports = Partido;