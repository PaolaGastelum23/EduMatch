document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el botón por su clase
    const btnRegistro = document.querySelector('.btn-registro-tutores');

    btnRegistro.addEventListener('click', (e) => {
        // Evitamos que el enlace <a> se ejecute si hay errores
        // Nota: Es mejor que el botón NO esté dentro de un <a> si vas a validar
        
        const nombre = document.getElementById('nombre').value.trim();
        const materia = document.getElementById('materia').value.trim();
        const semestre = document.getElementById('semestre').value.trim();
        const expediente = document.getElementById('Expediente').value.trim(); // Corregido a Mayúscula
        const plantel = document.getElementById('plantel').value.trim();
        const archivo = document.getElementById('input-fila').files[0];

        function mostrarError(mensaje) {
            // Asegúrate de tener este div en tu HTML
            let div = document.getElementById('mensaje-error');
            if (!div) {
                div = document.createElement('div');
                div.id = 'mensaje-error';
                document.body.appendChild(div);
            }
            div.textContent = mensaje;
            div.style.display = 'block'; // O usa clases CSS

            setTimeout(() => {
                div.style.display = 'none';
            }, 4000);
        }

        // Validaciones
        if (nombre === "") {
            mostrarError("Por favor ingrese su nombre completo");
            e.preventDefault(); // Detiene la navegación
            return;
        }
        if (materia === "") {
            mostrarError("Por favor escoja una materia dominante");
            e.preventDefault();
            return;
        }
        if (semestre === "") {
            mostrarError("Por favor seleccione un semestre");
            e.preventDefault();
            return;
        }
        if (expediente === "") {
            mostrarError("Por favor ingrese su expediente estudiantil");
            e.preventDefault();
            return;
        }
        if (plantel === "") {
            mostrarError("Por favor ingrese su plantel");
            e.preventDefault();
            return;
        }
        if (archivo === undefined) {
            mostrarError("Por favor suba un archivo de evidencia");
            e.preventDefault();
            return;
        }

       
    });
});

// Este se mantiene igual fuera del DOMContentLoaded o dentro, funciona bien
document.getElementById('input-fila').addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : "No se eligió archivo";
    const infoArchivo = document.getElementById('nombre-archivo');
    if(infoArchivo) infoArchivo.textContent = "Archivo seleccionado: " + fileName;
});