const express = require('express');
//importamos el uso de router para poder darle manejo a las peticiones
const router = express.Router();
//importo mi archivo de respuestas personalizadas
const response = require('../../network/responses');

//definimos las rutas segun el tipo de peticion y uri
router.get('/', function(req,res){
    console.log(req.headers);
    res.header({
        "custom-header":"Valor personalizado"
    });
    //res.status(201).send('Server running');
    response.success(req,res,'Server running');
});

router.post('/', function(req,res){
    console.log(req.query);
    console.log(req.body);
    //res.send(`Se guardo el mensaje ${req.body.mensaje}`);
    response.success(req,res,`Se guardo el mensaje ${req.body.mensaje}`,201);
});

router.delete('/',function(req,res){
    //res.send('Delete executed');
    if(req.query.fail == 'yes'){
        response.error(req,res,'Error on delete','This is a simulated error');
    }else{
        response.success(req,res,'Deleted success');
    }
    
});

//exportamos para hacerlo accesible desde otros archivos
module.exports = router;
