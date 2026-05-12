 function  mostrarError(mensaje){
        const div = document.getElementById('mensaje-error');
        div.textContent = mensaje;
        div.classList.add('visible');

        //se oculta a los 5 segundos
        setTimeout(() => {
           div.classList.remove('visible');
        }, 4000);
    }

document.addEventListener('DOMContentLoaded').addEventListener('click', () => {
 const nombre = document.getElementById('nombre').value.trim();
 const materia = document.getElementById('materia').value.trim();
 const semestre = document.getElementById('semestre').value.trim();

 if(nombre === ""){
    mostrarError("Por favor ingrese su nombre completo ");
    return;
 }
 if(materia == ""){
    mostrarError("Por favor escoga una materia dominante");
 }
 if(semestre == ""){
    mostrarError("Por favor seleccione un semestre");
 }
});