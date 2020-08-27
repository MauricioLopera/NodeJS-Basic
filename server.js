//primer paso inicializar npm
//luego instalar express
//luego instalamos body-parser para poder trabajar con el body de las peticiones

//importamos el uso de express en este documento
const express = require('express');
//importamos el uso de router para poder darle manejo a las peticiones
const router = express.Router();
//importamos el uso de body-parser
const bodyParser = require('body-parser');

//inicializamos express y demas librerias, el body parser debe ir antes del router para que funcione correctamente
var app = express();
app.use(bodyParser.json());
app.use(router);


//definimos las rutas segun el tipo de peticion y uri
router.get('/', function(req,res){
    res.send('Server running');
});

router.post('/create', function(req,res){
    console.log(req.query);
    console.log(req.body);
    res.send(`Se guardo el mensaje ${req.body.mensaje}`);
});

router.delete('/delete',function(req,res){
    res.send('Delete executed');
});

//defino una ruta por defecto sin usar router
// app.use('/', function(req,res){
//     res.send('Server running');
// });



//defino el puerto de escucha del server
app.listen(3000);
console.log('Server running on http://localhost:3000')
