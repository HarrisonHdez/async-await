//* Consultar la API de clima y mostrar la temperatura actual para una ciudad específica.
const consultarClima = async (city) => {
    const appId = '01faddaa8bed3d0fd11f85e6654fa36f'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`;
    try {

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const temperaturaCelsius = resultado.main.temp - 273.15;
        console.log(`La temperatura actual en ${city} es de ${Math.round(temperaturaCelsius * 10) / 10}°C.`);
    } catch (err) {
        console.log(err);
    }
    
}
consultarClima("New York");