const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// Configurar el path base para la API
// En producción, todas las rutas de la API estarán bajo /api
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/api' : '';

// Usar middlewares por defecto (logger, static, cors y no-cache)
server.use(middlewares);

// Si estamos en producción, reescribir las rutas para usar el prefijo /api
if (isProduction) {
	server.use((req, res, next) => {
		if (req.url === '/') {
			req.url = '/api';
		} else {
			req.url = req.url.replace('/api', '');
		}
		next();
	});
}

// Usar el router de json-server
server.use(basePath, router);

// Iniciar el servidor
server.listen(port, () => {
	console.log(`JSON Server está ejecutándose en el puerto ${port}`);
	console.log(`Modo: ${isProduction ? 'Producción' : 'Desarrollo'}`);
	console.log(`Base path: ${isProduction ? '/api' : '/'}`);
});
