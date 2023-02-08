//* Consultar la API de noticias newsapi.org y mostrar los títulos de las últimas noticias de una categoría específica.

const consultarNoticias = async (country) => {
    const appId = 'd96526c376af4a86889597be6e3d8a78';
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${appId}`;
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(`Las Noticias de ${country} son:`);
        resultado.articles.forEach(noticia => console.log(noticia.title));
    } catch (err) {
        console.log(err);
    }
}
consultarNoticias("us");