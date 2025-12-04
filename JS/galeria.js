// Seleccionar todas las imágenes
const images = document.querySelectorAll('.img-gallery img');

// Crear el modal dinámicamente
const modal = document.createElement('div');
modal.classList.add('modal-galeria');
modal.innerHTML = `
    <span class="cerrar">&times;</span>
    <img class="modal-img">
    <span class="flecha izquierda">&#10094;</span>
    <span class="flecha derecha">&#10095;</span>
`;
document.body.appendChild(modal);

const modalImg = document.querySelector('.modal-img');
const cerrarBtn = document.querySelector('.cerrar');
const flechaIzq = document.querySelector('.izquierda');
const flechaDer = document.querySelector('.derecha');

let imgActual = 0;

// Al hacer clic en una imagen, abrir modal
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        imgActual = index;
        abrirModal(img.src);
    });
});

function abrirModal(src) {
    modalImg.src = src;
    modal.classList.add('activo');
}

function cerrarModal() {
    modal.classList.remove('activo');
}

// Botones
cerrarBtn.addEventListener('click', cerrarModal);

// Navegación
flechaDer.addEventListener('click', () => {
    imgActual = (imgActual + 1) % images.length;
    modalImg.src = images[imgActual].src;
});

flechaIzq.addEventListener('click', () => {
    imgActual = (imgActual - 1 + images.length) % images.length;
    modalImg.src = images[imgActual].src;
});

// Cerrar si se hace clic fuera de la imagen
modal.addEventListener('click', (e) => {
    if (e.target === modal) cerrarModal();
});

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") cerrarModal();

    if (e.key === "ArrowRight") {
        imgActual = (imgActual + 1) % images.length;
        modalImg.src = images[imgActual].src;
    }

    if (e.key === "ArrowLeft") {
        imgActual = (imgActual - 1 + images.length) % images.length;
        modalImg.src = images[imgActual].src;
    }
});
