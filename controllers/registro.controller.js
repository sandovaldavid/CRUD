import { clientServices } from "../services/client-services.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async () => {
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    try {
        clientServices.crearCliente(nombre, email);
        window.location.href = "/screens/registro_completado.html";
    } catch (error) {
        window.location.href = "/screens/error.html";
    }
});
