function descargarClientes() {
    
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('El Listado de Clientes se descargo correctamente');
            } else {
                reject('Error en la conexion');
            }
        }, 3000);
    })
}

// Async await
async function ejecutar() {
    try {
        const respuesta = await descargarClientes();

        console.log(respuesta);
    } catch (error ) {
        console.log(error);
    }
}
ejecutar();