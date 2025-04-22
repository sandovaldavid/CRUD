import { clientServices } from '../services/client-services.js';

//backticks
const crearNuevaLinea = (nombre, email, id) => {
	const linea = document.createElement('tr');
	const contenido = `
        <td class="td" data-td>
            ${nombre}
        </td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html?id=${id}"
                        class="simple-button simple-button--edit"
                    >
                        Editar
                    </a>
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                        id = "${id}"
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`;
	linea.innerHTML = contenido;
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

		modalTitle.textContent = 'Eliminar Cliente';
		modalText.textContent = '¿Estás seguro de que deseas eliminar este cliente?';

		// Show the modal
		modalContainer.classList.remove('modal--close');

		// Handle modal confirm button
		const confirmDelete = async () => {
			try {
				await clientServices.eliminarCliente(id);
				// Remove the row after successful deletion
				linea.remove();
				modalContainer.classList.add('modal--close');
			} catch (error) {
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

const table = document.querySelector('[data-table]');

const data = await clientServices.listaClientes();

try {
	data.forEach((perfil) => {
		//{ nombre, email, id } -->tambien puede ser reemplazado por perfil
		const { nombre, email, id } = perfil;
		const nuevaLinea = crearNuevaLinea(nombre, email, id);
		table.appendChild(nuevaLinea);
	});
} catch (error) {
	window.location.href = '/screens/error.html';
}
