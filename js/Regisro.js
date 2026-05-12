document.addEventListener('DOMContentLoaded', () => {

    const botones = document.querySelectorAll('.materia-items');
    const materiasSeleccionadas = [];
//seleccion de botones
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            boton.classList.toggle('selected');
            const materia = boton.querySelector('span').textContent;
            const index = materiasSeleccionadas.indexOf(materia);
            if (index === -1) {
                materiasSeleccionadas.push(materia);
            } else {
                materiasSeleccionadas.splice(index, 1);
            }
        });
    });

    function  mostrarError(mensaje){
        const div = document.getElementById('mensaje-error');
        div.textContent = mensaje;
        div.classList.add('visible');

        //se oculta a los 5 segundos
        setTimeout(() => {
           div.classList.remove('visible');
        }, 4000);
    }

    document.querySelector('.btn-registro').addEventListener('click', () => {

        // Lee los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const carrera = document.getElementById('carrera').value;
        const plantel = document.getElementById('plantel').value.trim();
        const expediente = document.getElementById('expediente').value.trim();



        // Valida cada campo y muestra un mensaje específico
        if (nombre === '') {
            mostrarError('Por favor escribe tu nombre completo');
            return; // detiene todo, no sigue
        }
        if (carrera === '') {
            mostrarError('Por favor selecciona tu carrera');
            return;
        }
        if (plantel === '') {
            mostrarError('Por favor escribe tu plantel');
            return;
        }
        if (expediente === '') {
            mostrarError('Por favor escribe tu expediente estudiantil');
            return;
        }
        if (materiasSeleccionadas.length === 0) {
            mostrarError('Por favor selecciona al menos una materia');
            return;
        }

        
        window.location.href = '/Inicio/LoginRegitrocintrasena.html';
    });

   
});