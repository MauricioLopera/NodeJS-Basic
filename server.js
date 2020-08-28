//primer paso inicializar npm
//luego instalar express
//luego instalamos body-parser para poder trabajar con el body de las peticiones

//importamos el uso de express en este documento
const express = require('express');

//importamos el uso de body-parser
const bodyParser = require('body-parser');

//importamos nuestro archivo de rutas
const router = require('./network/routes');

//inicializamos express y demas librerias, el body parser debe ir antes del router para que funcione correctamente
var app = express();
app.use(bodyParser.json());
//app.use(router);

//pasamos el servidor al archivo de rutas para que genere la rutas necesarias
router(app);


//defino una ruta por defecto sin usar router
// app.use('/', function(req,res){
//     res.send('Server running');
// });


//tambien podemos reponder archivos estaticos para nuestro frontend, por buenas practicas usamos public
app.use('/app', express.static('public'));


//defino el puerto de escucha del server
app.listen(3000);
console.log('Server running on http://localhost:3000')
