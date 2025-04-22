import { config } from '../services/config.js';

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('[data-form]');
	const apiUrlInput = document.querySelector('[data-apiurl]');
	const resetButton = document.getElementById('reset-default');
	const currentApiUrlElement = document.getElementById('current-api-url');
	const environmentModeElement = document.getElementById('environment-mode');

	// Mostrar la URL actual y el modo de entorno
	currentApiUrlElement.textContent = config.API_BASE_URL;
	environmentModeElement.textContent = config.isProduction ? 'Producción' : 'Desarrollo local';

	// Establecer el valor actual en el campo de entrada
	apiUrlInput.value = config.API_BASE_URL;

	// Evento para el formulario de configuración
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const newApiUrl = apiUrlInput.value.trim();

		// Validar URL
		if (!newApiUrl) {
			alert('Por favor ingresa una URL válida');
			return;
		}

		try {
			// Actualizar la configuración
			config.setApiBaseUrl(newApiUrl);

			// Actualizar la información mostrada
			currentApiUrlElement.textContent = newApiUrl;

			// Mostrar mensaje de éxito
			alert(
				'¡Configuración guardada correctamente! Recarga las páginas para aplicar los cambios.'
			);
		} catch (error) {
			console.error('Error al guardar la configuración:', error);
			alert('Ocurrió un error al guardar la configuración');
		}
	});

	// Evento para el botón de restablecer por defecto
	resetButton.addEventListener('click', () => {
		// Valor por defecto dependiendo del entorno
		const defaultUrl = config.isProduction
			? 'https://tu-api-produccion.onrender.com'
			: 'http://localhost:3000';

		// Confirmar antes de restablecer
		if (confirm('¿Estás seguro de que deseas restablecer la URL por defecto?')) {
			// Actualizar la configuración
			config.setApiBaseUrl(defaultUrl);

			// Actualizar el campo de entrada y la información mostrada
			apiUrlInput.value = defaultUrl;
			currentApiUrlElement.textContent = defaultUrl;

			// Mostrar mensaje de éxito
			alert('URL restablecida por defecto. Recarga las páginas para aplicar los cambios.');
		}
	});
});
