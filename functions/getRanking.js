const utils = require("../src/utils.js");

exports.handler = async event => {
    var ranking = utils.getRankingValorEquipos(true);
    
    if(ranking != ""){
        return {
            statusCode:200,
            body:JSON.stringify(ranking)
        }
    }
    else{
        return {
            statusCode:500,
            body:"INTERNAL ERROR: No hay ningun equipo disponible para mostrar"
        }
    }

}