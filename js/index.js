// Archivo: \js\index.js

function tutores(){
 
     window.location.href = '/Inicio/RegistroTutor.html';;

   
}

function alumnos(){
 
   window.location.href = '/Inicio/RegistroAlumnos.html';

}

function vinculaT(){

    const usuario = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(usuario !== "" && password !== ""){
        window.location.href = '/Inicio/RegistroTutor.html';
    } else {
        alert("Completa todos los campos");
    }

}

function vinculaA(){

    const usuario = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(usuario !== "" && password !== ""){
        window.location.href = '/Inicio/RegistroAlumnos.html';
    } else {
        alert("Completa todos los campos");
    }

}