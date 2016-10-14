var server = require("./Servidor.js");
var enrutador = require("./ruta");
var handler = require("./handler");
var peticion = {};

peticion["/"] = handler.inicio;
peticion["/inicio"] = handler.inicio;
peticion["/pagina1"] = handler.pagina1;
peticion["/salida"] = handler.salida;
peticion["/favicon.ico"] = handler.favicon;

server.iniciar(enrutador.enrutar, peticion);
