 fetch("./JS/noticias.json")
        .then(response => response.json())
        .then(noticias => {
            const container = document.getElementById("noticias-container");

            noticias.forEach(noticia => {
                const div = document.createElement("div");
                div.classList.add("noticia");

                div.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.mensaje}</p>
                    <span><strong>Autor:</strong> ${noticia.usuario}</span>
                `;

                container.appendChild(div);
            });
        })
        .catch(error => console.error("Error cargando noticias:", error));
