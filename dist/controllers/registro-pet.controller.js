import { petServices } from '../services/pet-services.js';
const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', async (event) => {
	event.preventDefault();
	const nombre = document.querySelector('[data-nombre]').value;
	const edad = document.querySelector('[data-edad]').value;
	const raza = document.querySelector('[data-raza]').value;
	const dueno = document.querySelector('[data-dueno]').value;

	try {
		await petServices.crearPet(nombre, edad, raza, dueno);
		window.location.href = '/screens/registro_completado.html';
	} catch (error) {
		console.error('Error al registrar mascota:', error);
		window.location.href = '/screens/error.html';
	}
});
