
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
/* DATOS DE LOS JUGADORES */
/* =============================== */

const jugadores = [

    {
        nombre: "Sergio Sosa",
        numero: "#1",
        posicion: "Arquero",
        apodo: "El lobo",
        edad: "24 años",
        altura: "1.78 m",
        nacimiento: "Por definir",
        pie: "Derecho",
        partidos: "0",
        goles: "0",
        asistencias: "0",
        descripcion: "Arquero del plantel de Joga Bonito FC.",
        imagen: "img/anonimo.jpg"
    },

    {
        nombre: "Manuel Sosa",
        numero: "#7",
        posicion: "Ala",
        apodo: "Manu",
        edad: "23 años",
        altura: "1.75 m",
        nacimiento: "Por definir",
        pie: "Derecho",
        partidos: "0",
        goles: "0",
        asistencias: "0",
        descripcion: "Jugador de banda del plantel de Joga Bonito FC.",
        imagen: "img/anonimo.jpg"
    },

    {
        nombre: "Hilario Martínez",
        numero: "#10",
        posicion: "Pivot",
        apodo: "Hila",
        edad: "25 años",
        altura: "1.80 m",
        nacimiento: "Por definir",
        pie: "Derecho",
        partidos: "0",
        goles: "0",
        asistencias: "0",
        descripcion: "Pivot del plantel de Joga Bonito FC.",
        imagen: "img/anonimo.jpg"
    },

    {
        nombre: "Diego Rojas",
        numero: "#5",
        posicion: "El GOAT",
        apodo: "Diego",
        edad: "24 años",
        altura: "1.77 m",
        nacimiento: "Por definir",
        pie: "Derecho",
        partidos: "0",
        goles: "0",
        asistencias: "0",
        descripcion: "Jugador del plantel de Joga Bonito FC.",
        imagen: "img/anonimo.jpg"
    },

    {
        nombre: "Edwar Rojas",
        numero: "#8",
        posicion: "Ala",
        apodo: "Boliviano",
        edad: "22 años",
        altura: "1.73 m",
        nacimiento: "Por definir",
        pie: "Derecho",
        partidos: "0",
        goles: "0",
        asistencias: "0",
        descripcion: "Ala del plantel de Joga Bonito FC.",
        imagen: "img/anonimo.jpg"
    },

    {
        nombre: "Luis Amarilla",
        numero: "#9",
        posicion: "Pivot",
        apodo: "Luis",
        edad: "26 años",
        altura: "1.82 m",
        nacimiento: "Por definir",
        pie: "Derecho",
        partidos: "0",
        goles: "0",
        asistencias: "0",
        descripcion: "Pivot del plantel de Joga Bonito FC.",
        imagen: "img/anonimo.jpg"
    }

];


/* =============================== */
/* ABRIR MODAL */
/* =============================== */

function abrirModal(indice){

    const jugador = jugadores[indice];

    document.getElementById("modalNombre").textContent =
        jugador.nombre;

    document.getElementById("modalNumero").textContent =
        jugador.numero;

    /* CORREGIDO */
    document.getElementById("modalPosicion").textContent =
        jugador.posicion;

    document.getElementById("modalApodo").textContent =
        jugador.apodo;

    document.getElementById("modalEdad").textContent =
        jugador.edad;

    document.getElementById("modalAltura").textContent =
        jugador.altura;

    document.getElementById("modalNacimiento").textContent =
        jugador.nacimiento;

    document.getElementById("modalPie").textContent =
        jugador.pie;

    document.getElementById("modalPartidos").textContent =
        jugador.partidos;

    document.getElementById("modalGoles").textContent =
        jugador.goles;

    document.getElementById("modalAsistencias").textContent =
        jugador.asistencias;

    document.getElementById("modalDescripcion").textContent =
        jugador.descripcion;

    document.getElementById("modalImagen").src =
        jugador.imagen;

    document.getElementById("modalImagen").alt =
        jugador.nombre;

    document.getElementById("modal").classList.add("activo");

}


/* =============================== */
/* CERRAR MODAL */
/* =============================== */

function cerrarModal(){

    document.getElementById("modal").classList.remove("activo");

}


/* =============================== */
/* CERRAR AL HACER CLICK AFUERA */
/* =============================== */

document.getElementById("modal").addEventListener("click", function(e){

    if(e.target === this){

        cerrarModal();

    }

});


/* =============================== */
/* CERRAR CON ESC */
/* =============================== */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        cerrarModal();

    }

});
