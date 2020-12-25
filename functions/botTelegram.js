const utils = require("../src/utils.js");

exports.handler = async event => {
    var request = JSON.parse(event.body);
    if(request.message != undefined){
        var mensaje = request.message.text;
        var chat = request.message.chat.id;
        var response = "";
        
        if(mensaje == "/ranking"){
            response = utils.getRankingValorEquipos(false);
            return {
                statusCode:200,
                body: JSON.stringify({text:response, method:'sendMessage', chat_id:chat}),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        }
        else if(mensaje.includes("/equipo")){
            //Obtengo el primer parámetro = equipo
            var equipo = "";
            equipo = mensaje.split(" ")[1];
            if (equipo == undefined){
                response = "Debe indicar un nombre de equipo."
            }
            else {
                response = utils.getJugadoresEquipo(false,equipo,true);
                if (response == ""){
                    response = "Lo sentimos, no se ha encontrado el equipo indicado."
                }
            }
            
            return {
                statusCode:200,
                body: JSON.stringify({text:response, method:'sendMessage', chat_id:chat}),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        }
        else if(mensaje == "/help"){
            response = "Comandos disponibles:\n/ranking - Muestra el ranking de los equipos más valiosos de LaLiga\n/equipo [nombre equipo] - Muestra los jugadores del equipo indicado\n/help - Muestra los comandos disponibles";
            return {
                statusCode:200,
                body: JSON.stringify({text:response, method:'sendMessage', chat_id:chat}),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        }
        else{
            response = "Comando no permitido, por favor, use uno de los siguientes comandos: /ranking , /help";
            return {
                statusCode:200,
                body: JSON.stringify({text:response, method:'sendMessage', chat_id:chat}),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        }
    }
}