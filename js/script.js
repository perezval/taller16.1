// Llama a la API de NASA APOD
fetch('https://api.nasa.gov/planetary/apod?api_key=eIJGIMcX2j9a9jO1nEzgChMRCutFpHG3qPUSECcy')
    // Convierte la respuesta en formato JSON para poder usar los datos
    .then(response => response.json())
    .then(data => {
        // Obtiene el elemento con id 'title' y guarda una referencia en titleElement
        const titleElement = document.getElementById('title');
        const imageElement = document.getElementById('image');
        const descriptionElement = document.getElementById('description');
  
        // Asigna el título de la imagen del día al contenido de texto de titleElement
        titleElement.textContent = data.title;
        imageElement.src = data.hdurl;
        descriptionElement.textContent = data.explanation;
    })
    // Muestra un error en la consola si ocurre algún problema al obtener o procesar los datos
    .catch(error => {
        console.error('Error:', error);
    });
