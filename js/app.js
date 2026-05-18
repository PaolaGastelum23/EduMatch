import { tutores } from "./MisTutores.js";

const tutorGrid = document.querySelector("#tutor-grid");

const buscador = document.querySelector(".search-input");

const botonBuscar = document.querySelector(".search-button");

const filtroMateria = document.querySelector(".subjects-dropdown");

const filtroCalificacion = document.querySelector(".filter-dropdown");

const botonesMenu = document.querySelectorAll(".nav-btn");

function generarEstrellas(calificacion) {

    let estrellas = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= calificacion) {

            estrellas += `<i class="fa-solid fa-star estrella-activa"></i>`;

        } else {

            estrellas += `<i class="fa-regular fa-star estrella-inactiva"></i>`;
        }
    }

    return estrellas;
}

function renderTutores(datos = tutores) {

    tutorGrid.innerHTML = "";

    if (datos.length === 0) {

        tutorGrid.innerHTML = `
            <h2 class="sin-resultados">
                No se encontraron tutores
            </h2>
        `;

        return;
    }

    datos.forEach(tutor => {

        const card = document.createElement("div");

        card.className = "tutor-card";

        card.innerHTML = `
            <div class="photo-placeholder">

                <img 
                    src="${tutor.foto}" 
                    alt="${tutor.nombre}"
                    class="tutor-photo"
                >

            </div>

            <div class="card-info">

                <p class="tutor-name">
                    ${tutor.nombre}
                </p>

                <p class="tutor-subject">
                    ${tutor.materia}
                </p>

                <div class="contenedor-estrellas">
                    ${generarEstrellas(tutor.calificacion)}
                </div>

                <div class="status-bar"></div>

            </div>
        `;

        tutorGrid.appendChild(card);
    });
}

function filtrarTutores() {

    const texto = buscador.value.toLowerCase();

    const materiaSeleccionada =
        filtroMateria.value.toLowerCase();

    const calificacionSeleccionada =
        filtroCalificacion.value;

    const filtrados = tutores.filter(tutor => {

        const coincideNombre =
            tutor.nombre.toLowerCase().includes(texto);

        const coincideBusquedaMateria =
            tutor.materia.toLowerCase().includes(texto);

        const coincideMateria =
            materiaSeleccionada === "materias" ||
            tutor.materia.toLowerCase() === materiaSeleccionada;

        const coincideCalificacion =
            calificacionSeleccionada === "calificacion" ||
            tutor.calificacion == calificacionSeleccionada;

        return (
            (coincideNombre || coincideBusquedaMateria) &&
            coincideMateria &&
            coincideCalificacion
        );
    });

    renderTutores(filtrados);
}

botonBuscar.addEventListener("click", filtrarTutores);

buscador.addEventListener("input", filtrarTutores);

filtroMateria.addEventListener("change", filtrarTutores);

filtroCalificacion.addEventListener("change", filtrarTutores);

botonesMenu.forEach(boton => {

    boton.addEventListener("click", () => {

        botonesMenu.forEach(btn =>
            btn.classList.remove("active")
        );

        boton.classList.add("active");
    });
});

renderTutores();
