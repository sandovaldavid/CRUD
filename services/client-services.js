import { config } from './config.js';

//Abrir http (metodo, url);

//CRUD      - Metodos HTTP
//Create    - POST
//Read      - GET
//Update    - PUT/PATCH
//Dlete     - DELETE

//Fetch API
const listaClientes = async () => {
	try {
		return fetch(`${config.API_BASE_URL}/perfil`).then((respuesta) => respuesta.json());
	} catch (error) {
		window.location.href = '/screens/error.html';
	}
};

const crearCliente = (nombre, email) => {
	return fetch(`${config.API_BASE_URL}/perfil`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({ nombre, email, id: uuid.v4() }),
	});
};

const eliminarCliente = (id) => {
	return fetch(`${config.API_BASE_URL}/perfil/${id}`, {
		method: 'DELETE',
	});
};
const detalleCliente = (id) => {
	return fetch(`${config.API_BASE_URL}/perfil/${id}`).then((respuesta) => respuesta.json());
};

const actualizarCliente = async (nombre, email, id) => {
	try {
		return fetch(`${config.API_BASE_URL}/perfil/${id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ nombre, email }),
		});
	} catch (error) {
		window.location.href = '/screens/error.html';
	}
};

export const clientServices = {
	listaClientes,
	crearCliente,
	eliminarCliente,
	detalleCliente,
	actualizarCliente,
};
