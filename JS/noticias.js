fetch('assets/noticias.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('noticias-container');
        data.forEach(noticia => {
            const noticiaDiv = document.createElement('div');
            noticiaDiv.classList.add('noticia');
            noticiaDiv.innerHTML = `<h3>${noticia.titulo}</h3><small>${noticia.fecha}</small><p>${noticia.contenido}</p>`;
            container.appendChild(noticiaDiv);
        });
    })
    .catch(error => console.error('Error al cargar noticias:', error));
