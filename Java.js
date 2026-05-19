const buttons = document.querySelectorAll('.role-btn');
const loginForm = document.getElementById('loginForm');
const btnTutor = document.getElementById('btn-tutor');
const userInput = document.getElementById('username');
const passInput = document.getElementById('password');

const credenciales = {
    estudiante: {
        user: "alumno",
        pass: "alumno123"
    },
    tutor: {
        user: "profe",
        pass: "profe123"
    }
};


buttons.forEach(button => {
    button.addEventListener('click', () => {

        buttons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
    });
});


loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuario = userInput.value;
    const contrasena = passInput.value;


    const esTutorSeleccionado = btnTutor.classList.contains('active');

    if (esTutorSeleccionado) {

        if (usuario === credenciales.tutor.user && contrasena === credenciales.tutor.pass) {
            window.location.href = "tutor.html";
        } else {
            alert("Error: Usuario o contraseña de Tutor incorrectos.");
        }
    } else {

        if (usuario === credenciales.estudiante.user && contrasena === credenciales.estudiante.pass) {
            window.location.href = "estudiante.html";
        } else {
            alert("Error: Usuario o contraseña de Estudiante incorrectos.");
        }
    }
});