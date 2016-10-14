//var moment = require("moment");
function enrutar(ruta,request,respuesta){

    console.log("Rutear a " + ruta); //+ " a las " + moment().format() + "\n\n");

    if(typeof request[ruta] === "function"){

        return request[ruta](respuesta);
    }
    else{

        console.log("No se ha definido una función para " + ruta);
        respuesta.writeHead(404,{"Content-Type":"text/html"});
        respuesta.write("<h1>404 - No se ha encontrado: " + ruta + "</h1>");
        respuesta.end();
    }
    
}

exports.enrutar = enrutar; 