import { petServices } from '../services/pet-services.js';

const formulario = document.querySelector('[data-form]');

const obtenerInformacion = async () => {
	const url = new URL(window.location);
	const id = url.searchParams.get('id');

	if (id === null) {
		window.location.href = '/screens/error.html';
	}

	const nombre = document.querySelector('[data-nombre]');
	const edad = document.querySelector('[data-edad]');
	const raza = document.querySelector('[data-raza]');
	const dueno = document.querySelector('[data-dueno]');

	try {
		const pet = await petServices.detallePet(id);

		if (pet.nombre && pet.edad && pet.raza && pet.dueno) {
			nombre.value = pet.nombre;
			edad.value = pet.edad;
			raza.value = pet.raza;
			dueno.value = pet.dueno;
		} else {
			throw new Error();
		}
	} catch (error) {
		console.error('Error al obtener detalles de la mascota:', error);
		window.location.href = '/screens/error.html';
	}
};

obtenerInformacion();

formulario.addEventListener('submit', async (evento) => {
	evento.preventDefault();

	const url = new URL(window.location);
	const id = url.searchParams.get('id');

	const nombre = document.querySelector('[data-nombre]').value;
	const edad = document.querySelector('[data-edad]').value;
	const raza = document.querySelector('[data-raza]').value;
	const dueno = document.querySelector('[data-dueno]').value;

	// Add dynamic CSS import to ensure styles are loaded
	const linkModalCSS = document.createElement('link');
	linkModalCSS.rel = 'stylesheet';
	linkModalCSS.href = '../assets/css/componentes/modal.css';
	document.head.appendChild(linkModalCSS);

	// Create modal for confirmation
	const modalContainer = document.createElement('div');
	modalContainer.classList.add('modal-container');

	// Create modal HTML
	modalContainer.innerHTML = `
        <article class="modal">
            <h2 class="modal__title">Confirmar Edición</h2>
            <button class="modal__close">X</button>
            <p class="modal__text">¿Estás seguro de guardar los cambios para esta mascota?</p>
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
			await petServices.actualizarPet(nombre, edad, raza, dueno, id);
			window.location.href = '/screens/edicion_concluida_pet.html';
		} catch (error) {
			console.error('Error al actualizar mascota:', error);
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
