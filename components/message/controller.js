//importamos las funciones de almacenamiento
const store = require('./store');

function addMessage(user, message){
    //utilizamos promesas para poder implementar validacion de logica
    return new Promise((resolve, reject) => {
        //valido que tengamos todos los datos
        if(!user || !message){
            console.log('[controllerError]: Faltan datos no se pudo guardar');
            return reject('Faltan datos para guardar');
        }

        //almaceno el mensaje con estructuras de datos como json
        const fullMessage = {
            "user": user,
            "message": message,
            "created": new Date()
        }

        //almacenamos el mensaje
        store.add(fullMessage);
        resolve(fullMessage);
    });  

}

function getMessages(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

//exportamos las funciones necesarias
module.exports = {
    addMessage,
    getMessages
}