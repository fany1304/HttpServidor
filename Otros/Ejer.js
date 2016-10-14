var fs = require("fs");
fs.readFile("Ejer.js","utf8",function(error, text){
    if(error)
        throw error;
        console.log("The file contained:", text);

});

