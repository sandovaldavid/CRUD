// Pets service for handling pet CRUD operations
const listaPets = async () => {
	try {
		return fetch('http://localhost:3000/pets').then((respuesta) => respuesta.json());
	} catch (error) {
		window.location.href = '/screens/error.html';
	}
};

const crearPet = (nombre, edad, raza, dueno) => {
	return fetch('http://localhost:3000/pets', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			nombre,
			edad,
			raza,
			dueno,
			id: uuid.v4(),
		}),
	});
};

const eliminarPet = (id) => {
	return fetch(`http://localhost:3000/pets/${id}`, {
		method: 'DELETE',
	});
};

const detallePet = (id) => {
	return fetch(`http://localhost:3000/pets/${id}`).then((respuesta) => respuesta.json());
};

const actualizarPet = async (nombre, edad, raza, dueno, id) => {
	try {
		return fetch(`http://localhost:3000/pets/${id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ nombre, edad, raza, dueno }),
		});
	} catch (error) {
		window.location.href = '/screens/error.html';
	}
};

export const petServices = {
	listaPets,
	crearPet,
	eliminarPet,
	detallePet,
	actualizarPet,
};
