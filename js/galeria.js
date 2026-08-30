/* =============================== */
/* MENÚ LATERAL */
/* =============================== */

const menuBtn = document.getElementById("menuBtn");

const sidebar = document.getElementById("sidebar");

const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {

sidebar.classList.toggle("active");

overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

sidebar.classList.remove("active");

overlay.classList.remove("active");

});

/* =============================== */
/* FILTROS DE GALERÍA */
/* =============================== */

const filtros = document.querySelectorAll(".filtro");

const fotos = document.querySelectorAll(".foto-card");

filtros.forEach((boton) => {

boton.addEventListener("click", () => {

    const filtro = boton.dataset.filtro;


    /* Cambiar botón activo */

    filtros.forEach((btn) => {

        btn.classList.remove("activo");

    });

    boton.classList.add("activo");


    /* Mostrar / ocultar fotos */

    fotos.forEach((foto) => {

        const categoria = foto.dataset.categoria;


        if(
            filtro === "todos" ||
            categoria === filtro
        ){

            foto.style.display = "block";

        }else{

            foto.style.display = "none";

        }

    });

});

});

/* =============================== */
/* MODAL DE FOTOS */
/* =============================== */

const modal = document.getElementById("modal");

const imagenModal = document.getElementById("imagenModal");

const tituloModal = document.getElementById("tituloModal");

const descripcionModal =
document.getElementById("descripcionModal");

const cerrarModal =
document.getElementById("cerrarModal");

/* Abrir foto */

fotos.forEach((foto) => {

foto.addEventListener("click", () => {

    const imagen = foto.querySelector("img");

    const titulo = foto.querySelector("h3");

    const descripcion = foto.querySelector("p");


    imagenModal.src = imagen.src;

    imagenModal.alt = imagen.alt;

    tituloModal.textContent =
        titulo.textContent;

    descripcionModal.textContent =
        descripcion.textContent;


    modal.classList.add("activo");

});

});

/* Cerrar botón */

cerrarModal.addEventListener("click", () => {

modal.classList.remove("activo");

});

/* Cerrar haciendo click fuera */

modal.addEventListener("click", (e) => {


if(e.target === modal){

    modal.classList.remove("activo");

}


});

/* Cerrar con ESC */

document.addEventListener("keydown", (e) => {


if(e.key === "Escape"){

    modal.classList.remove("activo");

    sidebar.classList.remove("active");

    overlay.classList.remove("active");

}


});
