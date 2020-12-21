const data = require("../data/equipos.json");
var archivo = JSON.parse(JSON.stringify(data));
var keys = Object.keys(archivo);

exports.handler = async event => {

    var valores_equipos = {};
    
    keys.forEach(equipo => {
        var valor_acumulado = 0.0;
        archivo[equipo].forEach(jugador => {
            valor_acumulado = (parseFloat(valor_acumulado) + parseFloat(jugador['valor'])).toFixed(1);
        });
        valores_equipos[equipo] = valor_acumulado;
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

    return {
        statusCode:200,
        body:JSON.stringify(valores_equipos_ordenados)
    }
}