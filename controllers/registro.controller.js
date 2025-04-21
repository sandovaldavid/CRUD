import { clientServices } from "../services/client-services.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    try {
        await clientServices.crearCliente(nombre, email);
        window.location.href = "/screens/registro_completado.html";
    } catch (error) {
        console.error("Error al registrar cliente:", error);
        window.location.href = "/screens/error.html";
    }
});
