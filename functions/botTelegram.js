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
            //console.log(typeof equipo);
            //console.log(mensaje);
            //console.log(equipo);
            response = utils.getJugadoresEquipo(false,equipo);
            //console.log(response);
            //var ejemplo = {"FC Barcelona":[{"nombre":"Gerard Piqué","nacionalidad":"España","fechaNacimiento":"1-2-1987","valor":15,"dorsal":3,"posicion":"DF","pieHabil":"D","altura":1.94,"capitan":false},{"nombre":"Lionel Messi","nacionalidad":"Argentina","fechaNacimiento":"23-6-1987","valor":100,"dorsal":10,"posicion":"DL","pieHabil":"I","altura":1.7,"capitan":true}]};
            //ejemplo = JSON.stringify(ejemplo);
            return {
                statusCode:200,
                body: JSON.stringify({text:response, method:'sendMessage', chat_id:chat}),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        }
        else if(mensaje == "/help"){
            response = "Comandos disponibles:\n/ranking - Muestra el ranking de los equipos más valiosos de LaLiga\n/help - Muestra los comandos disponibles";
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