import { clientServices } from '../services/client-services.js';

const formulario = document.querySelector('[data-form]');

const obtenerInformacion = async () => {
	const url = new URL(window.location);
	const id = url.searchParams.get('id');

	if (id == null) {
		window.location.href = '/screens/error.html';
	}

	const nombre = document.querySelector('[data-nombre]');
	const email = document.querySelector('[data-email]');
	try {
		const perfil = await clientServices.detalleCliente(id);
		console.log(perfil);
		if (perfil.nombre && perfil.email) {
			nombre.value = perfil.nombre;
			email.value = perfil.email;
		} else {
			throw new Error();
		}
	} catch (error) {
		window.location.href = '/screens/error.html';
	}
};
obtenerInformacion();

formulario.addEventListener('submit', async (evento) => {
	evento.preventDefault();
	const url = new URL(window.location);
	const id = url.searchParams.get('id');

	const nombre = document.querySelector('[data-nombre]').value;
	const email = document.querySelector('[data-email]').value;

	// Create modal for confirmation
	const modalContainer = document.createElement('div');
	modalContainer.classList.add('modal-container');

	// Create modal HTML with proper classes matching your CSS
	modalContainer.innerHTML = `
		<article class="modal">
			<h2 class="modal__title">Confirmar Edición</h2>
			<button class="modal__close">X</button>
			<p class="modal__text">¿Estás seguro de guardar los cambios para este cliente?</p>
			<div class="modal__button-container">
				<button class="modal__button modal__button--confirm">
					Guardar
				</button>
				<button class="modal__button">Cancelar</button>
			</div>
		</article>
	`;

	// Add modal to the page
	document.body.appendChild(modalContainer);

	// Handle modal buttons
	const modalConfirmBtn = modalContainer.querySelector('.modal__button--confirm');
	const modalCancelBtn = modalContainer.querySelector(
		'.modal__button:not(.modal__button--confirm)'
	);
	const modalCloseBtn = modalContainer.querySelector('.modal__close');

	// Handle confirm button click
	modalConfirmBtn.addEventListener('click', async () => {
		try {
			await clientServices.actualizarCliente(nombre, email, id);
			window.location.href = '/screens/edicion_concluida.html';
		} catch (error) {
			window.location.href = '/screens/error.html';
		}
	});

	// Handle cancel and close buttons
	const closeModal = () => {
		document.body.removeChild(modalContainer);
	};

	modalCancelBtn.addEventListener('click', closeModal);
	modalCloseBtn.addEventListener('click', closeModal);
});
