// Products service for handling product CRUD operations
const listaProductos = async () => {
	try {
		return fetch('http://localhost:3000/productos').then((respuesta) => respuesta.json());
	} catch (error) {
		window.location.href = '/screens/error.html';
	}
};

const crearProducto = (nombre, precio, descripcion) => {
	return fetch('http://localhost:3000/productos', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			nombre,
			precio,
			descripcion,
			id: uuid.v4(),
		}),
	});
};

const eliminarProducto = (id) => {
	return fetch(`http://localhost:3000/productos/${id}`, {
		method: 'DELETE',
	});
};

const detalleProducto = (id) => {
	return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());
};

const actualizarProducto = async (nombre, precio, descripcion, id) => {
	try {
		return fetch(`http://localhost:3000/productos/${id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ nombre, precio, descripcion }),
		});
	} catch (error) {
		window.location.href = '/screens/error.html';
	}
};

export const productServices = {
	listaProductos,
	crearProducto,
	eliminarProducto,
	detalleProducto,
	actualizarProducto,
};
