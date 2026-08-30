/* =============================== */
/* MENÚ LATERAL */
/* =============================== */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");


menuBtn.addEventListener("click", function(){

    sidebar.classList.toggle("active");

    overlay.classList.toggle("active");

});


overlay.addEventListener("click", function(){

    sidebar.classList.remove("active");

    overlay.classList.remove("active");

});


/* =============================== */
/* DATOS DE LAS NOTICIAS */
/* =============================== */

const noticias = [

    {
        titulo: "Joga Bonito FC vuelve a la cancha",

        fecha: "29/08/2026",

        descripcion:
            "Toda la información y novedades de Joga Bonito FC. El equipo continúa preparándose para sus próximos partidos.",

        imagen: "img/noticia1.jpg"
    },


    {
        titulo: "Nuevo partido confirmado",

        fecha: "25/08/2026",

        descripcion:
            "El equipo se prepara para un nuevo encuentro. Todos los jugadores están listos para dejarlo todo en la cancha.",

        imagen: "img/noticia2.jpg"
    },


    {
        titulo: "Joga Bonito FC sigue creciendo",

        fecha: "20/08/2026",

        descripcion:
            "El equipo continúa creciendo partido a partido, fortaleciendo la unión y la pasión por el fútbol.",

        imagen: "img/noticia3.jpg"
    }

];


/* =============================== */
/* ABRIR NOTICIA */
/* =============================== */

function abrirNoticia(indice){

    const noticia = noticias[indice];


    document.getElementById("modalImagen").src =
        noticia.imagen;


    document.getElementById("modalImagen").alt =
        noticia.titulo;


    document.getElementById("modalFecha").textContent =
        noticia.fecha;


    document.getElementById("modalTitulo").textContent =
        noticia.titulo;


    document.getElementById("modalDescripcion").textContent =
        noticia.descripcion;


    document.getElementById("modal").classList.add("activo");


    /* Evita que la página de fondo se desplace */

    document.body.style.overflow = "hidden";

}


/* =============================== */
/* CERRAR NOTICIA */
/* =============================== */

function cerrarNoticia(){

    document.getElementById("modal").classList.remove("activo");


    document.body.style.overflow = "auto";

}


/* =============================== */
/* CERRAR AL HACER CLICK AFUERA */
/* =============================== */

document.getElementById("modal").addEventListener(
    "click",
    function(e){

        if(e.target === this){

            cerrarNoticia();

        }

    }
);


/* =============================== */
/* CERRAR CON ESC */
/* =============================== */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        cerrarNoticia();

    }

});