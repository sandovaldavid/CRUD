import { clientServices } from "../services/client-services.js";

//backticks
const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr");
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
    const btn = linea.querySelector("button");
    btn.addEventListener("click", async () => {
        const id = btn.id;
        try {
            clientServices.eliminarCliente(id);
        } catch (error) {
            window.location.href = "/screens/error.html";
        }
    });

    return linea;
};

const table = document.querySelector("[data-table]");

const data = await clientServices.listaClientes();

try {
    data.forEach((perfil) => {
        //{ nombre, email, id } -->tambien puede ser reemplazado por perfil
        const { nombre, email, id } = perfil;
        const nuevaLinea = crearNuevaLinea(nombre, email, id);
        table.appendChild(nuevaLinea);
    });
} catch (error) {
    window.location.href = "/screens/error.html";
}
