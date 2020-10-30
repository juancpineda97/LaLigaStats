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
            this.equipoLocal = equipoLocal_p;
            this.equipoVisitante = equipoVisitante_p;
            this.fecha = fecha_p;
            this.onceInicialLocal = new Array();
            this.onceInicialLocal = onceInicialLocal_p;
            this.onceInicialVisitante = new Array();
            this.onceInicialVisitante = onceInicialVisitante_p;
            this.suplentesLocal = new Array();
            this.suplentesLocal = suplentesLocal_p;
            this.suplentesVisitante = new Array();
            this.suplentesVisitante = suplentesVisitante_p;
            this.estadio = estadio_p;
            this.arbitro = arbitro_p;
            this.golesLocal = 0;
            this.golesVisitante = 0;
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
}

module.exports = Partido;