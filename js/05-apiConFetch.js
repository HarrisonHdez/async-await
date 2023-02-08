//* Consultar API con Fetch

// const url = 'https://picsum.photos/list';


// function obtenerDatos() {
//     fetch(url)
//         .then( respuesta  => respuesta.json())
//         .then( resultado  => console.log(resultado))
//         .catch( error => console.log(error));
// }
// obtenerDatos()

//* Consultar con Async - Await


const obtenerDatos = async () => {
    try {
        const url = 'https://picsum.photos/list';
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        console.log( resultado );
    } catch (err) {
        console.log(err);
    }
    
}

obtenerDatos()