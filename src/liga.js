const Equipo = require("./equipo.js");
const Jugador = require("./jugador.js");
const Partido = require("./partido.js");

/**
 * Clase que representa al objeto Liga
 */
class Liga{

    /**
     * Constructor básico de la clase Liga
     * @param {JSON} datos - Archivo con los datos de los equipos
     */
    constructor(datos){
        if(typeof datos != 'object'){
            throw new Error('Tipos de dato no validos');
        }
        else{
            //Atributos Privados
            var equipos = new Array();
            var partidos = new Array();
            
            //Completando equipos
            var keys = Object.keys(datos);
            keys.forEach(nombre_equipo => {
                var jugadores_equipo = []

                datos[nombre_equipo].forEach(datos_jugador => {
                    var jugador = new Jugador(datos_jugador['nombre'],
                    nombre_equipo, datos_jugador['nacionalidad'],
                    datos_jugador['fechaNacimiento'], datos_jugador['valor'],
                    datos_jugador['dorsal'], datos_jugador['posicion'],
                    datos_jugador['pieHabil'], datos_jugador['altura'],
                    datos_jugador['capitan'])

                    jugadores_equipo.push(jugador);
                });

                var equipo = new Equipo(nombre_equipo, jugadores_equipo);

                equipos.push(equipo);
                
            });
        }

        //Get de atributos privados

        this.getEquipos = function(){
            return equipos;
        }

        this.getPartidos = function(){
            return partidos;
        }

        this.addPartido = function(partido){
            partidos.push(partido);
        }
    }


    /**
     * Método para obtener la lista completa de jugadores de la liga.
     * @returns {array[Jugador]} - Lista de jugadores
     */
    getJugadores(){
        var jugadores = [];

        this.getEquipos().forEach(equipo => {
            equipo.getListaJugadores().forEach(jugador => {
                jugadores.push(jugador);
            });
        });

        return jugadores;
    }


    /**
     * Método que devuelve los jugadores de un equipo dado
     * @param {String} nombreEquipo - Nombre del equipo a mostrar
     * @param {boolean} JSON - True si se quieren los resultados en formato de JSON, False en formato de String.
     * @returns {JSON || String} - Jugadores del equipo
     */
    verJugadoresEquipo(nombreEquipo, JSON){
        var re = new RegExp(nombreEquipo, "i");
        var resultado;

        if (JSON){
            resultado = {};
        }
        else {
            resultado = "";
        }

        var equipos_total = this.getEquipos();
        var equipos_coinciden = []

        equipos_total.forEach(equipo => {
            if(equipo.getNombre().match(re)){
                equipos_coinciden.push(equipo);
            }
        });

        equipos_coinciden.forEach(equipo => {

            if (JSON){
                resultado[equipo.getNombre()] = [];

                equipo.getListaJugadores().forEach(jugador => {
                    var datos_jugador = {};
                    datos_jugador['nombre'] = jugador.getNombre();
                    datos_jugador['nacionalidad'] = jugador.getNacionalidad();
                    datos_jugador['fechaNacimiento'] = jugador.getFechaNacimiento();
                    datos_jugador['valor'] = jugador.getValor();
                    datos_jugador['dorsal'] = jugador.getDorsal();
                    datos_jugador['posicion'] = jugador.getPosicion();
                    datos_jugador['pieHabil'] = jugador.getPieHabil();
                    datos_jugador['altura'] = jugador.getAltura();
                    datos_jugador['capitan'] = jugador.getCapitan();
                    
                    resultado[equipo.getNombre()].push(datos_jugador);
                });
            }

            else {
                resultado += equipo.verEquipo();
            }
            
        });

        return resultado;

    }

    /**
     * Método que muestra a los jugadores que coinciden con el nombre dado
     * @param {String} nombre - Nombre del jugador a mostrar
     * @param {boolean} JSON - True si se quieren los resultados en formato de JSON, False en formato de String.
     * @returns {JSON || String} - Jugadores que coinciden con el nombre
     */
    verJugador(nombre, JSON){
        var re = new RegExp(nombre, "i");
        var resultado;

        if (JSON){
            resultado = {};
            resultado[nombre] = [];
        }
        else {
            resultado = "";
        }

        var jugadores_total = this.getJugadores();
        var jugadores_coinciden = [];

        jugadores_total.forEach(jugador => {
            if(jugador.getNombre().match(re)){
                jugadores_coinciden.push(jugador);
            }
        });

        jugadores_coinciden.forEach(jugador => {
            
            if (JSON){

                var datos_jugador = {};
                datos_jugador['nombre'] = jugador.getNombre();
                datos_jugador['nacionalidad'] = jugador.getNacionalidad();
                datos_jugador['fechaNacimiento'] = jugador.getFechaNacimiento();
                datos_jugador['valor'] = jugador.getValor();
                datos_jugador['dorsal'] = jugador.getDorsal();
                datos_jugador['posicion'] = jugador.getPosicion();
                datos_jugador['pieHabil'] = jugador.getPieHabil();
                datos_jugador['altura'] = jugador.getAltura();
                datos_jugador['capitan'] = jugador.getCapitan();
                    
                resultado[nombre].push(datos_jugador);
            }
            else{
                resultado += jugador.verJugador() + "\n\n";
            }
        });

        return resultado;
    }
    
    
    /**
     * Método que muestra los partidos jugados por el equipo dado
     * @param {String} nombre_equipo - Nombre del equipo
     * @param {boolean} JSON - True si se quieren los resultados en formato de JSON, False en formato de String.
     * @returns {JSON || String} - Partidos que ha jugado el equipo
     */
    verPartido(nombre_equipo, JSON){
        var re = new RegExp(nombre_equipo, "i");
        var resultado;

        if (JSON){
            resultado = {};
            resultado[nombre_equipo] = [];
        }
        else {
            resultado = "";
        }

        var partidos_total = this.getPartidos();
        var partidos_coinciden = [];

        partidos_total.forEach(partido => {
            if(partido.getEquipoLocal().getNombre().match(re) || 
            partido.getEquipoVisitante().getNombre().match(re)){
                partidos_coinciden.push(partido);
            }
        });

        partidos_coinciden.forEach(partido => {
            
            if (JSON){

                var datos_partido = {};
                datos_partido['equipoLocal'] = partido.getEquipoLocal().getNombre();
                datos_partido['equipoVisitante'] = partido.getEquipoVisitante().getNombre();
                datos_partido['fecha'] = partido.getFecha();
                datos_partido['onceInicialLocal'] = partido.getOnceInicialLocal();
                datos_partido['onceInicialVisitante'] = partido.getOnceInicialVisitante();
                datos_partido['suplentesLocal'] = partido.getSuplentesLocal();
                datos_partido['suplentesVisitante'] = partido.getSuplentesVisitante();
                datos_partido['estadio'] = partido.getEstadio();
                datos_partido['arbitro'] = partido.getArbitro();
                datos_partido['golesLocal'] = partido.getGolesLocal();
                datos_partido['golesVisitante'] = partido.getGolesVisitante();
                    
                resultado[nombre_equipo].push(datos_partido);
            }
            else{
                resultado += partido.verPartido() + "\n\n";
            }
        });

        return resultado;

    }

    /**
    * Método que devuelve un ranking del valor total de los equipos de la liga. 
    * @param {boolean} JSON - True si se quieren los resultados en formato de JSON, False en formato de String.
    * @returns {JSON || String} - Ranking de los equipos de mayor a menor valor.
    */
    verRankingEquipos(JSON){
        var valores_equipos = {};

        var equipos = this.getEquipos();

        equipos.forEach(equipo => {
            var valor_acumulado = 0.0
            equipo.getListaJugadores().forEach(jugador => {
                valor_acumulado = (parseFloat(valor_acumulado) + parseFloat(jugador.getValor())).toFixed(1);
            });
            valores_equipos[equipo.getNombre()] = parseFloat(valor_acumulado);
        });

        var valores_equipos_array= Object.entries(valores_equipos);
        valores_equipos_array.sort((a,b) => b[1] -a[1]);

        var valores_equipos_ordenados = {};

        valores_equipos_array.forEach(equipo => {
            if ((equipo[1] % 1) == 0){
                valores_equipos_ordenados[equipo[0]] = Math.trunc(equipo[1]);
            }
            else{
                valores_equipos_ordenados[equipo[0]] = equipo[1];
            }     
        });

        var keys = Object.keys(valores_equipos_ordenados);

        if (JSON){
            return valores_equipos_ordenados;
        }
        else{
            var mensaje = "Ranking de equipos más valiosos de LaLiga:" + "\n\n";
            var n = 1;
            for (const equipo_valor in valores_equipos_ordenados) {
                mensaje = mensaje + n.toString() + " -> " + equipo_valor + ": " +
                valores_equipos_ordenados[equipo_valor].toString() + " M(€)";
                if (n < keys.length){
                    mensaje = mensaje + "\n";
                }
                n++;
            }

            return mensaje;
        }
    }


    /**
    * Método que traspasa un jugador dado de un equipo a otro. 
    * @param {String} nombre_jugador - Nombre del jugador a traspasar.
    * @param {String} nombre_equipo - Nombre del equipo al que se traspasa el jugador.
    * @returns {JSON} - Información con el resultado de la operación.
    */
    traspasoJugador(nombre_jugador, nombre_equipo){
        var equipos_total = this.getEquipos();
        var jugadores_total = this.getJugadores();

        var re1 = new RegExp(nombre_jugador, "i");
        var jugadores_coinciden = [];

        jugadores_total.forEach(jugador => {
            if(jugador.getNombre().match(re1)){
                jugadores_coinciden.push(jugador);
            }
        });

        if (jugadores_coinciden.length < 1){
            return {
                "done":false,
                "error":"No se ha encontrado al jugador especificado"
            }
        }

        if (jugadores_coinciden.length > 1){
            return {
                "done":false,
                "error":"Se ha encontrado más de un jugador"
            }
        }

        var re2 = new RegExp(nombre_equipo, "i");
        var re3 = new RegExp(jugadores_coinciden[0].getEquipo(), "i");
        var equipos_coinciden = [];
        var equipo_antiguo;

        equipos_total.forEach(equipo => {
            if(equipo.getNombre().match(re2)){
                equipos_coinciden.push(equipo);
            }

            if(equipo.getNombre().match(re3)){
                equipo_antiguo = equipo;
            }
        });

        if (equipos_coinciden.length < 1){
            return {
                "done":false,
                "error":"No se ha encontrado el equipo especificado"
            }
        }

        if (equipos_coinciden.length > 1){
            return {
                "done":false,
                "error":"Se ha encontrado más de un equipo"
            }
        }

        equipo_antiguo.eliminaJugador(jugadores_coinciden[0]);

        var jugador_traspaso = new Jugador(jugadores_coinciden[0].getNombre(),
        equipos_coinciden[0].getNombre(), jugadores_coinciden[0].getNacionalidad(),
        jugadores_coinciden[0].getFechaNacimiento(), jugadores_coinciden[0].getValor(),
        0, jugadores_coinciden[0].getPosicion(), jugadores_coinciden[0].getPieHabil(),
        jugadores_coinciden[0].getAltura(), false)

        equipos_coinciden[0].aniadeJugador(jugador_traspaso);

        return {
            "done":true,
            "jugador":{
                'nombre':jugador_traspaso.getNombre(),
                'equipo':jugador_traspaso.getEquipo(),
                'nacionalidad':jugador_traspaso.getNacionalidad(),
                'fechaNacimiento':jugador_traspaso.getFechaNacimiento(),
                'valor':jugador_traspaso.getValor(),
                'dorsal':jugador_traspaso.getDorsal(),
                'posicion':jugador_traspaso.getPosicion(),
                'pieHabil':jugador_traspaso.getPieHabil(),
                'altura':jugador_traspaso.getAltura(),
                'capitan':jugador_traspaso.getCapitan()
            }
        }
    }


    /**
    * Método que añade un nuevo partido. 
    * @param {JSON} datos - Datos del partido a añadir.
    * @returns {JSON} - Información con el resultado de la operación.
    */
    aniadePartido(datos){
        if (typeof datos != 'object'){
            return{
                "done":false,
                "error":"Tipo de dato no valido"
            }
        }

        var keys = Object.keys(datos);

        if ((keys.includes("equipoLocal") == false) || 
        (keys.includes("equipoVisitante") == false) ||
        (keys.includes("fecha_dia") == false) || 
        (keys.includes("fecha_mes") == false) ||
        (keys.includes("fecha_anio") == false) ||
        (keys.includes("fecha_hora") == false) ||
        (keys.includes("fecha_minutos") == false)){
            return{
                "done":false,
                "error":"Argumentos no válidos. Se debe incluir equipoLocal, equipoVisitante, fecha_dia, fecha_mes, fecha_anio, fecha_hora, fecha_minutos"
            }
        }

        var equipos_total = this.getEquipos();

        var re1 = new RegExp(datos.equipoLocal, "i");
        var re2 = new RegExp(datos.equipoVisitante, "i");
        var equipoLocal_coincidencias = [];
        var equipoVisitante_coincidencias = [];
        
        equipos_total.forEach(equipo => {
            if(equipo.getNombre().match(re1)){
                equipoLocal_coincidencias.push(equipo);
            }

            if(equipo.getNombre().match(re2)){
                equipoVisitante_coincidencias.push(equipo);
                console.log(equipo.getNombre());
            }
        });

        if (equipoLocal_coincidencias.length < 1 || equipoVisitante_coincidencias.length < 1){
            return {
                "done":false,
                "error":"No se han encontrado los equipos"
            }
        }

        if (equipoLocal_coincidencias.length > 1 || equipoVisitante_coincidencias.length > 1){
            return {
                "done":false,
                "error":"Hay varias coincidencias para alguno de los equipos dados"
            }
        }

        var equipoLocal = equipoLocal_coincidencias[0];
        var equipoVisitante = equipoVisitante_coincidencias[0];

        var onceInicialLocal;
        var onceInicialVisitante;
        var suplentesLocal;
        var suplentesVisitante;
        var estadio;
        var arbitro;

        if (keys.includes("onceInicialLocal") == false){
            onceInicialLocal = [0,0,0,0,0,0,0,0,0,0,0];
        }
        else{
            onceInicialLocal = datos.onceInicialLocal;
        }

        if (keys.includes("onceInicialVisitante") == false){
            onceInicialVisitante = [0,0,0,0,0,0,0,0,0,0,0];
        }
        else{
            onceInicialVisitante = datos.onceInicialVisitante;
        }

        if (keys.includes("suplentesLocal") == false){
            suplentesLocal = [0,0,0,0,0];
        }
        else{
            suplentesLocal = datos.suplentesLocal;
        }

        if (keys.includes("suplentesVisitante") == false){
            suplentesVisitante = [0,0,0,0,0];
        }
        else{
            suplentesVisitante = datos.suplentesVisitante;
        }

        if (keys.includes("estadio") == false){
            estadio = "Sin definir";
        }
        else{
            estadio = datos.estadio;
        }

        if (keys.includes("arbitro") == false){
            arbitro = "Sin definir";
        }
        else{
            arbitro = datos.arbitro;
        }

        var fecha = new Date(datos.fecha_anio, datos.fecha_mes, datos.fecha_dia,
            datos.fecha_hora, datos.fecha_minutos, 0);

        var partido = new Partido(equipoLocal, equipoVisitante, fecha, onceInicialLocal, 
            onceInicialVisitante, suplentesLocal, suplentesVisitante, estadio, arbitro);

        this.addPartido(partido);

        return{
            "done":true,
            "partido":{
                'equipoLocal':partido.getEquipoLocal().getNombre(),
                'equipoVisitante':partido.getEquipoVisitante().getNombre(),
                'fecha':partido.getFecha(),
                'onceInicialLocal':partido.getOnceInicialLocal(),
                'onceInicialVisitante':partido.getOnceInicialVisitante(),
                'suplentesLocal':partido.getSuplentesLocal(),
                'suplentesVisitante':partido.getSuplentesVisitante(),
                'estadio':partido.getEstadio(),
                'arbitro':partido.getArbitro(),
                'golesLocal':partido.getGolesLocal(),
                'golesVisitante':partido.getGolesVisitante()

            }
        }

    }

}

module.exports = Liga;