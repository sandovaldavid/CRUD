// Auto redirect can be disabled by setting this to false
const AUTO_REDIRECT = false; // Disabled auto-redirect
const REDIRECT_DELAY = 5000; // 5 seconds
const REDIRECT_URL = './screens/lista_cliente.html';

// Handle navigation highlighting
document.addEventListener('DOMContentLoaded', () => {
	// Highlight the Dashboard link as active
	const dashboardLink = document.querySelector('.header__link:first-child a');
	if (dashboardLink) {
		dashboardLink.style.fontWeight = 'bold';
		dashboardLink.style.color = 'var(--primary-color)';
	}

	// Set up the redirect if enabled
	if (AUTO_REDIRECT) {
		setTimeout(() => {
			window.location.href = REDIRECT_URL;
		}, REDIRECT_DELAY);
	}
});
