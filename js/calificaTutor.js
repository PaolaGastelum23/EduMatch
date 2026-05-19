document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todas las estrellas que actúan como botones
    const estrellas = document.querySelectorAll('.estrella-btn');

    estrellas.forEach(estrella => {
        estrella.addEventListener('click', function() {
            // 1. Identificar el grupo (la tarjeta) al que pertenece la estrella
            const contenedor = this.parentElement;
            const grupoEstrellas = contenedor.querySelectorAll('.estrella-btn');
            const valorSeleccionado = parseInt(this.getAttribute('data-value'));

            // 2. Recorrer el grupo para pintar las estrellas en orden
            grupoEstrellas.forEach(s => {
                const valorEstrella = parseInt(s.getAttribute('data-value'));

                if (valorEstrella <= valorSeleccionado) {
                    // SE PINTA: Quitamos el borde y ponemos el relleno sólido
                    s.classList.remove('fa-regular');
                    s.classList.add('fa-solid');
                } else {
                    // SE MANTIENE VACÍA: Quitamos el sólido y ponemos el borde
                    s.classList.remove('fa-solid');
                    s.classList.add('fa-regular');
                }
            });

            // 3. (Opcional) Guardar el valor en el contenedor para el envío final
            contenedor.setAttribute('data-rating', valorSeleccionado);
        });
    });
});