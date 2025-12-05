const form = document.getElementById('presupuestoForm');
            const totalE1 = document.getElementById('total');
            const producto = document.getElementById('producto');
            const plazo = document.getElementById('plazo');
            const extras = document.querySelectorAll('.extras input');

           // Funcion principal: calcular presupuesto
            function calcularPresupuesto() {
                let total = 0;


                //Producto
                const precioProducto = parseFloat(producto.value) || 0;
                total += precioProducto;

                //Extras
                extras.forEach(extra => {
                    if (extra.checked) {
                        total += parseFloat(extra.value);
                    }
                });

                //Descuento por plazo
                const meses = parseInt(plazo.value) || 1;
                if (meses > 12) {
                    total *= 0.9; //10% descuento si plazo > 12 meses
                }

                totalE1.textContent = total.toFixed(2) + ' €';
            }


            //Actualizar total automaticamente
            producto.addEventListener('change', calcularPresupuesto);
            plazo.addEventListener('input', calcularPresupuesto);
            extras.forEach(extra => extra.addEventListener('change', calcularPresupuesto));

            //Validacion de datos de contacto 
            form.addEventListener('submit', e => {
                e.preventDefault();

                const nombre = document.getElementById('nombre').value.trim();
                const apellidos = document.getElementById('apellidos').value.trim();
                const telefono = document.getElementById('telefono').value.trim();
                const email = document.getElementById('email').value.trim();
                const condiciones = document.getElementById('condiciones').checked;


                const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
                const soloNumeros = /^[0-9]+$/;
                const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!soloLetras.test(nombre) || nombre.length > 15) {
                    alert("El nombre solo puede contener letras y máximo 15 caracteres.");
                    return;
                }

                if (!soloLetras.test(apellidos) || apellidos.length > 40) {
                    alert("Los apellidos solo pueden contener letras y máximo 40 caracteres.");
                    return;
                }

                if (!soloNumeros.test(telefono) || telefono.length !== 9) {
                    alert("El teléfono debe contener solo números y tener 9 dígitos.");
                    return;
                }

                if (!emailValido.test(email)) {
                    alert("Introduce un correo electrónico válido.");
                    return;
                }

                if (!condiciones) {
                    alert("Debes aceptar las condiciones de privacidad.");
                    return;
                }

                alert("Formulario enviado correctamente ✅");
                form.reset();
                totalE1.textContent = "0 €";
            });