const express = require('express');
//importamos el uso de router para poder darle manejo a las peticiones
const router = express.Router();
//importo mi archivo de respuestas personalizadas
const response = require('../../network/responses');
//importo la logica de negocio
const cotroller = require('./controller');
const controller = require('./controller');

//definimos las rutas segun el tipo de peticion y uri
router.get('/', function(req,res){
    controller.getMessages()
        .then((messageList) => {
            response.success(req,res,messageList,200);
        })
        .catch(e => {
            response.error(req,res,'No hay datos para mostrar',e,500);
        });
});

router.post('/', function(req,res){
    //envio el mensaje al controlador
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req,res,`Mensaje almacenado satisfactoriamente: ${fullMessage.message}`,200);
        })
        .catch(e => {
            response.error(req,res,e,e,400);
        });

    //res.send(`Se guardo el mensaje ${req.body.mensaje}`);
    
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
