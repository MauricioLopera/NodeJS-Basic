//simulacion de base de datos con un array
const list = [];

//funcion para añadir datos al almacenamiento
function addMessage(message){
    list.push(message);
}

//funcion para leer mensajes
function getMessages(){
    //valido si no hay mensajes
    if(list.length === 0){
        return 'No hay mensajes';
    }else{
        return list;
    }
    
}

//exportamos las funciones de almacenamiento necesarias
module.exports = {
    add: addMessage,
    list: getMessages
}