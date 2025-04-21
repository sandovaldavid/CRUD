import { productServices } from '../services/product-services.js';
const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', async (event) => {
	event.preventDefault();
	const nombre = document.querySelector('[data-nombre]').value;
	const precio = document.querySelector('[data-precio]').value;
	const descripcion = document.querySelector('[data-descripcion]').value;

	try {
		await productServices.crearProducto(nombre, precio, descripcion);
		window.location.href = '/screens/registro_completado.html';
	} catch (error) {
		console.error('Error al registrar producto:', error);
		window.location.href = '/screens/error.html';
	}
});
