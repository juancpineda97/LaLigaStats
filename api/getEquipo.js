const data = require("../data/equipos.json");
var archivo = JSON.parse(JSON.stringify(data));
var keys = Object.keys(archivo);

module.exports = (req, res) => {
    var equipo = req.query['equipo'];
    if(equipo == undefined){
        res.status(400).send("No se ha indicado ningún equipo");
    }
    else if (equipo.length < 3){
        res.status(400).send("Por favor, indique un nombre de equipo con al menos 3 letras");
    }
    else{
        var equipos_a_mostrar = [];
        var re = new RegExp(equipo, "i");
    
        for (var i in keys){
            if (keys[i].toString().match(re)){
                equipos_a_mostrar.push(keys[i]);
            }
        }

        if (equipos_a_mostrar.length > 0){
            var mensaje = {};
            for (let j = 0; j < equipos_a_mostrar.length; j++) {
                //mensaje = mensaje + JSON.stringify(archivo[equipos_a_mostrar[j]]);
                var equipo_temp = [];
                equipo_temp = archivo[equipos_a_mostrar[j]];
                mensaje[equipos_a_mostrar[j]] = equipo_temp;
            }
            res.status(200).send(mensaje);
        }
        else{
            res.status(404).send("Equipo no encontrado");
        }
    }
}