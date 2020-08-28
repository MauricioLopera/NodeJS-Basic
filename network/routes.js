//archivo de rutas que determina que componente utilizar
const express = require('express');
const message = require('../components/message/network');

//creo una funcion que contenga las rutas
const routes = function(server){
    server.use('/message', message);
}

//exportamos para hacerlo accesible desde otros archivos
module.exports = routes;