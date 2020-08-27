//primer paso inicializar npm
//luego instalar express

//importamos el uso de express en este documento
const express = require('express');

//inicializamos express
var app = express();

//defino una ruta por defecto
app.use('/', function(req,res){
    res.send('Server running');
});

//defino el puerto de escucha del server
app.listen(3000);
console.log('Server running on http://localhost:3000')
