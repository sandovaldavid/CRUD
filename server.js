const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 10000;

// Usar middlewares por defecto (logger, static, cors y no-cache)
server.use(middlewares);

// En producción, queremos tener todas las rutas disponibles sin prefijo
// para mantener la compatibilidad con la configuración existente
console.log('Starting server in production mode');
console.log(`Using port: ${port}`);

// Permitir CORS para todas las solicitudes
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// Usar el router de json-server directamente sin prefijo
server.use(router);

// Iniciar el servidor
server.listen(port, () => {
	console.log(`JSON Server está ejecutándose en el puerto ${port}`);
	console.log(`Servidor API desplegado y listo para recibir solicitudes`);
});
