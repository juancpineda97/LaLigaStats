const utils = require("../src/utils.js");

module.exports = (req, res) => {
    var equipo = req.query['equipo'];
    if(equipo == undefined){
        res.status(400).send("No se ha indicado ningún equipo");
    }
    else if (equipo.length < 3){
        res.status(400).send("Por favor, indique un nombre de equipo con al menos 3 letras");
    }
    else{
        var salida = utils.getJugadoresEquipo(true, equipo);

        if (salida != ""){
            res.status(200).send(salida);
        }
        else{
            res.status(404).send("Equipo no encontrado");
        }
    }
}