var fs = require("fs");
fs.readFile("Ejer2.js",function(err,buffer){
    if(err) throw err;
    console.log("The file contained", buffer.length, "bytes", "The first byte is:",buffer[0]);
});