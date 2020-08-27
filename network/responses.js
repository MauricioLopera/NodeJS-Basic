//archivo de respuestas personalizadas para responder a todas las peticiones en el mismo formato
exports.success = function(req, res, message, status){
    res.status(status || 200).send(message);
}

exports.error = function(req, res, message, details, status){
    console.log(`[response error] ${details}`);
    res.status(status || 501).send(message);
}