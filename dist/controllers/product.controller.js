import { productServices } from '../services/product-services.js';

// Create a new row for each product
const crearNuevaLinea = (nombre, precio, descripcion, id) => {
	const linea = document.createElement('tr');
	const contenido = `
        <td class="td" data-td>
            ${nombre}
        </td>
        <td>${precio}</td>
        <td>${descripcion}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_producto.html?id=${id}"
                        class="simple-button simple-button--edit"
                    >
                        Editar
                    </a>
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                        id="${id}"
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`;
	linea.innerHTML = contenido;

	// Add event listener to delete button
	const btn = linea.querySelector('button');
	btn.addEventListener('click', () => {
		const id = btn.id;

		// Show confirmation modal instead of immediate deletion
		const modalContainer = document.querySelector('.modal-container');
		const modalTitle = document.querySelector('.modal__title');
		const modalText = document.querySelector('.modal__text');
		const modalConfirmBtn = document.querySelector('.modal__button--confirm');
		const modalCancelBtn = document.querySelector(
			'.modal__button:not(.modal__button--confirm)'
		);
		const modalCloseBtn = document.querySelector('.modal__close');

		modalTitle.textContent = 'Eliminar Producto';
		modalText.textContent = '¿Estás seguro de que deseas eliminar este producto?';

		// Show the modal
		modalContainer.classList.remove('modal--close');

		// Handle modal confirm button
		const confirmDelete = async () => {
			try {
				await productServices.eliminarProducto(id);
				// Remove the row from the table after successful deletion
				linea.remove();
				modalContainer.classList.add('modal--close');
			} catch (error) {
				console.error('Error al eliminar producto:', error);
				window.location.href = '/screens/error.html';
			}
		};

		// Add event listener for confirm button (with cleanup)
		modalConfirmBtn.addEventListener('click', confirmDelete, { once: true });

		// Handle cancel and close buttons
		const closeModal = () => {
			modalContainer.classList.add('modal--close');
			// Remove the event listener to prevent memory leaks
			modalConfirmBtn.removeEventListener('click', confirmDelete);
		};

		modalCancelBtn.addEventListener('click', closeModal, { once: true });
		modalCloseBtn.addEventListener('click', closeModal, { once: true });
	});

	return linea;
};

// Select the table where products will be displayed
const table = document.querySelector('[data-table]');

// Load products when the page loads
const cargarProductos = async () => {
	try {
		const data = await productServices.listaProductos();

		// Clear any existing data
		table.innerHTML = '';

		// Add each product to the table
		data.forEach((producto) => {
			const { nombre, precio, descripcion, id } = producto;
			const nuevaLinea = crearNuevaLinea(nombre, precio, descripcion, id);
			table.appendChild(nuevaLinea);
		});
	} catch (error) {
		console.error('Error al cargar productos:', error);
		window.location.href = '/screens/error.html';
	}
};

// Initialize the page
cargarProductos();
