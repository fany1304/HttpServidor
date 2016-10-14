var http = require("http");
var url = require('url');

var cont = 0;

 function arrancarServidor(peticion, respuesta){

    console.log("Primera conexión.");

    var ruta = url.parse(peticion.url).pathname;
         

        
     if(ruta == "/closeServer"){

        cont ++;
        console.log("Se pide la ruta " + ruta);
        console.log("Total de visitas: " + cont);
        console.log("Fin del servidor");
        process.exit();
            
    }
    else{

       if(cont == 0){

            cont++; 
            console.log("Primera conexión");
            console.log("Se pide la ruta " + ruta);
            console.log("Total de visitas: " + cont);
            respuesta.end();

       }
       else{
            
            cont++;
            console.log("Se pide la ruta " + ruta);
            console.log("Total de visitas: " + cont);
            respuesta.end();
       }
    }
}

http.createServer(arrancarServidor).listen(8080);