// Configuración de la API y variables de entorno
// Esta configuración permite cambiar fácilmente entre entornos de desarrollo y producción

// Detectar el entorno actual
const isProduction =
	window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

// API URL base por defecto (desarrollo)
let API_BASE_URL = 'http://localhost:3000';

// Si existe una variable de entorno almacenada, usarla
const storedApiUrl = localStorage.getItem('API_BASE_URL');
if (storedApiUrl) {
	API_BASE_URL = storedApiUrl;
}

// Si estamos en producción y no hay una URL personalizada, sugerir una URL de producción
if (isProduction && !storedApiUrl) {
	// Esta URL debe ser reemplazada con la URL real de tu API en producción
	// Por ejemplo: https://tu-backend-crud.onrender.com
	API_BASE_URL = 'https://tu-api-produccion.onrender.com';

	// Almacenar para futuras cargas de página
	localStorage.setItem('API_BASE_URL', API_BASE_URL);
}

// Función para cambiar la URL base de la API (útil para pruebas o cambios de entorno)
const setApiBaseUrl = (newUrl) => {
	API_BASE_URL = newUrl;
	localStorage.setItem('API_BASE_URL', newUrl);
	console.log(`API URL actualizada a: ${newUrl}`);
	return API_BASE_URL;
};

// Exportar la configuración
export const config = {
	API_BASE_URL,
	setApiBaseUrl,
	isProduction,
};
