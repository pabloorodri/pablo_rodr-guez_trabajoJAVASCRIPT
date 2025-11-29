const imagenes = [
    'assets/img/sendero.jpg',
    'assets/img/escalada1.jpg',
    'assets/img/campamento1.jpg',
    'assets/img/actividad-grupo1.jpg'
];

const container = document.querySelector('.imagenes-container');

imagenes.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Actividad RideOn';
    img.classList.add('galeria-img');
    container.appendChild(img);
});
