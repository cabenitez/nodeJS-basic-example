function inicio(response) {
	console.log('Solicitud para: inicio');
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<h1>Contenido de inicio</h1>');	
	response.end();
}

function pagina1(response) {
	console.log('Solicitud para: pagina1');
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<h1>Contenido de pagina1</h1>');	
	response.end();
}

function salida(response) {
	console.log('Solicitud para: salida');
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<h1>Contenido de salida</h1>');	
	response.end();
}
function favicon(response) {
	console.log('Solicitud para: favicon');
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('favicon');	
	response.end();
}

exports.inicio  = inicio;
exports.pagina1 = pagina1;
exports.salida  = salida;
exports.favicon = favicon;