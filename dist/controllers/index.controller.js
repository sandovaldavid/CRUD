// Auto redirect can be disabled by setting this to false
const AUTO_REDIRECT = false; // Disabled auto-redirect
const REDIRECT_DELAY = 5000; // 5 seconds
const REDIRECT_URL = './screens/lista_cliente.html';

// Handle navigation highlighting
document.addEventListener('DOMContentLoaded', () => {
	// Set up the redirect if enabled
	if (AUTO_REDIRECT) {
		setTimeout(() => {
			window.location.href = REDIRECT_URL;
		}, REDIRECT_DELAY);
	}
});
