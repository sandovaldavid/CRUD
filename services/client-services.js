//Abrir http (metodo, url);

//CRUD      - Metodos HTTP
//Create    - POST
//Read      - GET
//Update    - PUT/PATCH
//Dlete     - DELETE

//Fetch API
const listaClientes = async () => {
    try {
        fetch("http://localhost:3000/perfil").then((respuesta) =>
            respuesta.json()
        );
    } catch (error) {
        window.location.href = "/screens/error.html";
    }
};

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
const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) =>
        respuesta.json()
    );
};

const actualizarCliente = async (nombre, email, id) => {
    try {
        return fetch(`http://localhost:3000/perfil/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ nombre, email }),
        });
    } catch (error) {
        window.location.href = "/screens/error.html";
    }
};

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};
