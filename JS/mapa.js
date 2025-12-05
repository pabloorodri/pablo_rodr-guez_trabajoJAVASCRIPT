 // Ubicación REAL de RideOn
    const rideOnLocation = [37.33562, -5.95746]; // Calle Numa 29, Montequinto

    // Configurar mapa centrado inicialmente en el negocio
    const map = L.map('map').setView(rideOnLocation, 15);

    // Capa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Marcador de la empresa
    const marker = L.marker(rideOnLocation).addTo(map)
        .bindPopup('📍 RideOn - Experiencias Rurales<br>Calle Numa 29, Montequinto')
        .openPopup();

    /* ================================
       MOSTRAR UBICACIÓN DEL USUARIO
       ================================ */
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;

                const userLocation = [userLat, userLng];

                // Marcador del usuario
                L.marker(userLocation, { icon: L.icon({
                    iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
                    iconSize: [25, 41],
                })}).addTo(map)
                  .bindPopup("📍 Estás aquí")
                  .openPopup();

                // Ajustar vista para mostrar ambos puntos
                const group = L.featureGroup([
                    L.marker(rideOnLocation),
                    L.marker(userLocation)
                ]);
                map.fitBounds(group.getBounds(), { padding: [50, 50] });

                /* ================================
                   RUTA entre usuario → empresa
                   ================================ */
                L.Routing.control({
                    waypoints: [
                        L.latLng(userLocation),
                        L.latLng(rideOnLocation)
                    ],
                    routeWhileDragging: false,
                    show: true
                }).addTo(map);
            },

            // Error de geolocalización
            error => {
                console.error("No se puede obtener la ubicación del usuario.");
            }
        );
    } else {
        console.log("La geolocalización no está disponible en este navegador.");
    }