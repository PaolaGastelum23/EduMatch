const tutores = [

    {
        id: 1,
        nombre: "Juan Perez",
        materia: "matematicas",
        descripcion: "Tutor especializado en álgebra y cálculo.",
        horas: "2 horas",
        estado: "Disponible",
        destacado: true,
        foto: "../img/Juan.jpg"
    },

    {
        id: 2,
        nombre: "Annette Garcia",
        materia: "programacion",
        descripcion: "Experta en JavaScript y desarrollo web.",
        horas: "1 hora",
        estado: "Disponible",
        destacado: true,
        foto: "../img/Annette.jpg"
    },

    {
        id: 3,
        nombre: "Carlos Ruiz",
        materia: "quimica",
        descripcion: "Apoyo en química general y orgánica.",
        horas: "3 horas",
        estado: "Ocupado",
        destacado: false,
        foto: "../img/carlos.jpg"
    },

    {
        id: 4,
        nombre: "Lucia Fernandez",
        materia: "medicina",
        descripcion: "Tutorías enfocadas en anatomía y biología.",
        horas: "2 horas",
        estado: "Disponible",
        destacado: false,
        foto: "../img/Lucia.jpg"
    },

    {
        id: 5,
        nombre: "Rodolfo Sanz",
        materia: "biologia",
        descripcion: "Especialista en genética y microbiología.",
        horas: "4 horas",
        estado: "Disponible",
        destacado: false,
        foto: "../img/rodolfo.jpg"
    },

    {
        id: 6,
        nombre: "Angelica Tequida",
        materia: "ingles",
        descripcion: "Tutorías de inglés conversacional.",
        horas: "1.5 horas",
        estado: "Disponible",
        destacado: true,
        foto: "../img/Angelica.jpg"
    }

];

const studentsGrid = document.querySelector("#students-grid");

const mejoresTutores = document.querySelector("#mejores-tutores");

const otrosTutores = document.querySelector("#otros-tutores");

const buscador = document.querySelector(".search-input");

const filtroMateria = document.querySelector(".materia-dropdown");

function capitalizar(texto) {

    return texto.charAt(0).toUpperCase() +
           texto.slice(1);
}

function renderTutores(datos = tutores) {

    studentsGrid.innerHTML = "";

    datos.forEach(tutor => {

        const card = document.createElement("article");

        card.className = "student-card";

        card.innerHTML = `
        
            <div class="card-header">

                <div>

                    <h3>${tutor.nombre}</h3>

                    <p class="materia-card">
                        ${capitalizar(tutor.materia)}
                    </p>

                </div>

                <span class="estado-tag">
                    ${tutor.estado}
                </span>

            </div>

            <div class="card-body">

                <img 
                    src="${tutor.foto}" 
                    alt="${tutor.nombre}"
                    class="tutor-photo"
                >

                <div class="card-info">

                    <p>
                        ${tutor.descripcion}
                    </p>

                    <div class="info-extra">

                        <span>
                            <i class="fa-solid fa-clock"></i>
                            ${tutor.horas}
                        </span>

                    </div>

                </div>

            </div>

            <div class="card-buttons">

                <button class="btn-message">
                    Ver perfil
                </button>

                <button class="btn-solicitar-card">
                    Solicitar tutoría
                </button>

            </div>
        `;

        studentsGrid.appendChild(card);
    });
}

function renderAside() {

    mejoresTutores.innerHTML = "";

    otrosTutores.innerHTML = "";

    const destacados =
        tutores.filter(t => t.destacado);

    const normales =
        tutores.filter(t => !t.destacado);

    renderLista(destacados, mejoresTutores);

    renderLista(normales, otrosTutores);
}

function renderLista(lista, contenedor) {

    lista.forEach(tutor => {

        const item = document.createElement("div");

        item.className = "tutor-item";

        item.innerHTML = `
        
            <div class="basic-info">

                <img 
                    src="${tutor.foto}" 
                    class="circle-photo"
                >

                <div>

                    <h4>${tutor.nombre}</h4>

                    <p>
                        ${capitalizar(tutor.materia)}
                    </p>

                </div>

            </div>

            <div class="details-content">

                <p>
                    <strong>Materia:</strong>
                    ${capitalizar(tutor.materia)}
                </p>

                <p>
                    <strong>Horario:</strong>
                    ${tutor.horas}
                </p>

                <p>
                    <strong>Estado:</strong>
                    ${tutor.estado}
                </p>

                <div class="btn-group">

                    <button 
                        class="btn-accept"
                        onclick="aceptarTutor(this)"
                    >
                        Aceptar
                    </button>

                    <button 
                        class="btn-reject"
                        onclick="rechazarTutor(this)"
                    >
                        Rechazar
                    </button>

                </div>

            </div>
        `;

        item.addEventListener("click", () => {

            document
                .querySelectorAll(".tutor-item")
                .forEach(el =>
                    el.classList.remove("active")
                );

            item.classList.add("active");
        });

        contenedor.appendChild(item);
    });
}

function filtrarTutores() {

    const texto = buscador.value.toLowerCase();

    const materia = filtroMateria.value;

    const filtrados = tutores.filter(tutor => {

        const coincideNombre =
            tutor.nombre.toLowerCase().includes(texto);

        const coincideBusquedaMateria =
            tutor.materia.toLowerCase().includes(texto);

        const coincideMateria =
            materia === "todas" ||
            tutor.materia.toLowerCase() === materia;

        return (
            (coincideNombre || coincideBusquedaMateria) &&
            coincideMateria
        );
    });

    renderTutores(filtrados);
}

function aceptarTutor(btn) {

    const card =
        btn.closest(".tutor-item");

    card.classList.add("slide-out");

    setTimeout(() => {

        card.remove();

    }, 400);
}

function rechazarTutor(btn) {

    const card =
        btn.closest(".tutor-item");

    card.classList.add("slide-out");

    setTimeout(() => {

        card.remove();

    }, 400);
}

window.aceptarTutor = aceptarTutor;

window.rechazarTutor = rechazarTutor;

buscador.addEventListener("input", filtrarTutores);

filtroMateria.addEventListener("change", filtrarTutores);

document
.querySelector("#btn-home")
.addEventListener("click", () => {

    window.location.href =
    "../Tutor/InicioTutor.html";
});

document
.querySelector("#btn-mensajes")
.addEventListener("click", () => {

    window.location.href =
    "../Tutor/MensajesTutor.html";
});

renderTutores();

renderAside();