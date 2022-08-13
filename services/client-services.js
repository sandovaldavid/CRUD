//Abrir http (metodo, url);

//CRUD      - Metodos HTTP
//Create    - POST
//Read      - GET
//Update    - PUT/PATCH
//Dlete     - DELETE

//Fetch API
const listaClientes = () =>
    fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() }),
    });
};

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    });
};
export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
};
