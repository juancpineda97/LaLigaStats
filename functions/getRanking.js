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

    return {
        statusCode:200,
        body:JSON.stringify(valores_equipos)
    }

}