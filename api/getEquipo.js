const data = require("../data/equipos.json");
var archivo = JSON.parse(JSON.stringify(data));
var keys = Object.keys(archivo);

module.exports = (req, res) => {
    var equipo = req.query['equipo'];
    if (keys.includes(equipo)){
        var equipo_completo = archivo[equipo];
        res.status(200).send(equipo_completo);
    }
    else{
        res.status(404).send("Equipo no encontrado");
    }
}