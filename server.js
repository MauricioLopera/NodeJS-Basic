//primer paso inicializar npm
//luego instalar express
//luego instalamos body-parser para poder trabajar con el body de las peticiones

//importamos el uso de express en este documento
const express = require('express');
//importamos el uso de router para poder darle manejo a las peticiones
const router = express.Router();
//importamos el uso de body-parser
const bodyParser = require('body-parser');
//importo mi archivo de respuestas personalizadas
const response = require('./network/responses');

//inicializamos express y demas librerias, el body parser debe ir antes del router para que funcione correctamente
var app = express();
app.use(bodyParser.json());
app.use(router);


//definimos las rutas segun el tipo de peticion y uri
router.get('/', function(req,res){
    console.log(req.headers);
    res.header({
        "custom-header":"Valor personalizado"
    });
    //res.status(201).send('Server running');
    response.success(req,res,'Server running');
});

router.post('/create', function(req,res){
    console.log(req.query);
    console.log(req.body);
    //res.send(`Se guardo el mensaje ${req.body.mensaje}`);
    response.success(req,res,`Se guardo el mensaje ${req.body.mensaje}`,201);
});

router.delete('/delete',function(req,res){
    //res.send('Delete executed');
    if(req.query.fail == 'yes'){
        response.error(req,res,'Error on delete','This is a simulated error');
    }else{
        response.success(req,res,'Deleted success');
    }
    
});

//defino una ruta por defecto sin usar router
// app.use('/', function(req,res){
//     res.send('Server running');
// });


//tambien podemos reponder archivos estaticos para nuestro frontend, por buenas practicas usamos public
app.use('/app', express.static('public'));


//defino el puerto de escucha del server
app.listen(3000);
console.log('Server running on http://localhost:3000')
