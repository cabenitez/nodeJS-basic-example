function enrutar(ruta, peticion, response){
    console.log('Rutear a: ' + ruta);

    if (typeof peticion[ruta] === 'function'){
        return peticion[ruta](response);
    }else{
        console.log('No se ha definido una función para ' + ruta);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write('<h1>404 - No se ha encontrado: ' + ruta + '</h1>');
        response.end();
    }
}

exports.enrutar = enrutar;