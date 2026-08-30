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
/* DATOS DE LOS TORNEOS */
/* =============================== */

const torneos = [

    /* ================================= */
    /* TORNEO 1 */
    /* ================================= */

    {

        nombre: "Torneo Interno 2026",

        tipo: "Torneo donde participa Joga Bonito FC",

        icono: "🏆",

        fecha: "Agosto 2026",

        lugar: "Cancha Joga Bonito",

        estado: "En curso",

        equipos: "4 equipos",

        posicion: "1°",

        pj: "4",

        pg: "3",

        pe: "1",

        pp: "0",

        gf: "15",

        gc: "8",

        puntos: "10",

        figura: "Sergio Sosa",

        descripcion:
        "Torneo interno disputado entre los jugadores de Joga Bonito FC. Los equipos se forman utilizando distintos colores de chalecos.",

        tabla: [

            {
                posicion: 1,
                equipo: "Joga Bonito FC",
                pj: 4,
                pg: 3,
                pe: 1,
                pp: 0,
                gf: 15,
                gc: 8,
                puntos: 10,
                joga: true
            },

            {
                posicion: 2,
                equipo: "Equipo Azul",
                pj: 4,
                pg: 2,
                pe: 1,
                pp: 1,
                gf: 12,
                gc: 9,
                puntos: 7,
                joga: false
            },

            {
                posicion: 3,
                equipo: "Equipo Rojo",
                pj: 4,
                pg: 1,
                pe: 1,
                pp: 2,
                gf: 9,
                gc: 13,
                puntos: 4,
                joga: false
            },

            {
                posicion: 4,
                equipo: "Equipo Verde",
                pj: 4,
                pg: 0,
                pe: 1,
                pp: 3,
                gf: 6,
                gc: 12,
                puntos: 1,
                joga: false
            }

        ]

    },


    /* ================================= */
    /* TORNEO 2 */
    /* ================================= */

    {

        nombre: "Copa de Invierno",

        tipo: "Torneo donde participa Joga Bonito FC",

        icono: "⚽",

        fecha: "Julio 2026",

        lugar: "Complejo Deportivo",

        estado: "Finalizado",

        equipos: "4 equipos",

        posicion: "2°",

        pj: "3",

        pg: "2",

        pe: "0",

        pp: "1",

        gf: "11",

        gc: "7",

        puntos: "6",

        figura: "Hilario Martínez",

        descripcion:
        "Competencia de invierno en la que Joga Bonito FC consiguió llegar hasta las primeras posiciones.",

        tabla: [

            {
                posicion: 1,
                equipo: "Equipo Rojo",
                pj: 3,
                pg: 3,
                pe: 0,
                pp: 0,
                gf: 14,
                gc: 5,
                puntos: 9,
                joga: false
            },

            {
                posicion: 2,
                equipo: "Joga Bonito FC",
                pj: 3,
                pg: 2,
                pe: 0,
                pp: 1,
                gf: 11,
                gc: 7,
                puntos: 6,
                joga: true
            },

            {
                posicion: 3,
                equipo: "Equipo Azul",
                pj: 3,
                pg: 1,
                pe: 0,
                pp: 2,
                gf: 8,
                gc: 10,
                puntos: 3,
                joga: false
            },

            {
                posicion: 4,
                equipo: "Equipo Verde",
                pj: 3,
                pg: 0,
                pe: 0,
                pp: 3,
                gf: 5,
                gc: 16,
                puntos: 0,
                joga: false
            }

        ]

    },


    /* ================================= */
    /* TORNEO 3 */
    /* ================================= */

    {

        nombre: "Copa Joga Bonito",

        tipo: "Torneo organizado por Joga Bonito FC",

        icono: "🏟️",

        fecha: "Septiembre 2026",

        lugar: "Cancha Joga Bonito",

        estado: "Próximamente",

        equipos: "Por definir",

        posicion: "-",

        pj: "0",

        pg: "0",

        pe: "0",

        pp: "0",

        gf: "0",

        gc: "0",

        puntos: "0",

        figura: "Por definir",

        descripcion:
        "Torneo organizado por Joga Bonito FC. Los equipos y el sistema de competición serán definidos próximamente.",

        tabla: [

            {
                posicion: 1,
                equipo: "Por definir",
                pj: "-",
                pg: "-",
                pe: "-",
                pp: "-",
                gf: "-",
                gc: "-",
                puntos: "-",
                joga: false
            },

            {
                posicion: 2,
                equipo: "Por definir",
                pj: "-",
                pg: "-",
                pe: "-",
                pp: "-",
                gf: "-",
                gc: "-",
                puntos: "-",
                joga: false
            },

            {
                posicion: 3,
                equipo: "Por definir",
                pj: "-",
                pg: "-",
                pe: "-",
                pp: "-",
                gf: "-",
                gc: "-",
                puntos: "-",
                joga: false
            },

            {
                posicion: 4,
                equipo: "Por definir",
                pj: "-",
                pg: "-",
                pe: "-",
                pp: "-",
                gf: "-",
                gc: "-",
                puntos: "-",
                joga: false
            }

        ]

    },


    /* ================================= */
    /* TORNEO 4 */
    /* ================================= */

    {

        nombre: "Desafío Joga Bonito",

        tipo: "Torneo organizado por Joga Bonito FC",

        icono: "🥇",

        fecha: "Octubre 2026",

        lugar: "Por definir",

        estado: "Próximamente",

        equipos: "Por definir",

        posicion: "-",

        pj: "0",

        pg: "0",

        pe: "0",

        pp: "0",

        gf: "0",

        gc: "0",

        puntos: "0",

        figura: "Por definir",

        descripcion:
        "Próxima competencia organizada por Joga Bonito FC. Próximamente se publicarán los equipos participantes y el calendario.",

        tabla: [

            {
                posicion: 1,
                equipo: "Por definir",
                pj: "-",
                pg: "-",
                pe: "-",
                pp: "-",
                gf: "-",
                gc: "-",
                puntos: "-",
                joga: false
            },

            {
                posicion: 2,
                equipo: "Por definir",
                pj: "-",
                pg: "-",
                pe: "-",
                pp: "-",
                gf: "-",
                gc: "-",
                puntos: "-",
                joga: false
            },

            {
                posicion: 3,
                equipo: "Por definir",
                pj: "-",
                pg: "-",
                pe: "-",
                pp: "-",
                gf: "-",
                gc: "-",
                puntos: "-",
                joga: false
            },

            {
                posicion: 4,
                equipo: "Por definir",
                pj: "-",
                pg: "-",
                pe: "-",
                pp: "-",
                gf: "-",
                gc: "-",
                puntos: "-",
                joga: false
            }

        ]

    }

];


/* =============================== */
/* ABRIR TORNEO */
/* =============================== */

function abrirTorneo(indice){

    const torneo = torneos[indice];


    document.getElementById("modalIcono").textContent =
        torneo.icono;


    document.getElementById("modalNombre").textContent =
        torneo.nombre;


    document.getElementById("modalTipo").textContent =
        torneo.tipo;


    document.getElementById("modalFecha").textContent =
        torneo.fecha;


    document.getElementById("modalLugar").textContent =
        torneo.lugar;


    document.getElementById("modalEstado").textContent =
        torneo.estado;


    document.getElementById("modalEquipos").textContent =
        torneo.equipos;


    document.getElementById("modalPosicion").textContent =
        torneo.posicion;


    document.getElementById("modalPJ").textContent =
        torneo.pj;


    document.getElementById("modalPG").textContent =
        torneo.pg;


    document.getElementById("modalPE").textContent =
        torneo.pe;


    document.getElementById("modalPP").textContent =
        torneo.pp;


    document.getElementById("modalGF").textContent =
        torneo.gf;


    document.getElementById("modalGC").textContent =
        torneo.gc;


    document.getElementById("modalPuntos").textContent =
        torneo.puntos;


    document.getElementById("modalFigura").textContent =
        torneo.figura;


    document.getElementById("modalDescripcion").textContent =
        torneo.descripcion;


    /* =============================== */
    /* TABLA */
    /* =============================== */

    const tabla =
        document.getElementById("tablaPosiciones");


    tabla.innerHTML = "";


    torneo.tabla.forEach(function(equipo){

        const fila =
            document.createElement("tr");


        if(equipo.joga){

            fila.classList.add("joga-bonito");

        }


        fila.innerHTML = `

            <td>
                ${equipo.posicion}
            </td>

            <td>
                ${equipo.equipo}
            </td>

            <td>
                ${equipo.pj}
            </td>

            <td>
                ${equipo.pg}
            </td>

            <td>
                ${equipo.pe}
            </td>

            <td>
                ${equipo.pp}
            </td>

            <td>
                ${equipo.gf}
            </td>

            <td>
                ${equipo.gc}
            </td>

            <td>
                ${equipo.puntos}
            </td>

        `;


        tabla.appendChild(fila);

    });


    /* =============================== */
    /* MOSTRAR MODAL */
    /* =============================== */

    document.getElementById("modal")
        .classList.add("activo");

}


/* =============================== */
/* CERRAR MODAL */
/* =============================== */

function cerrarModal(){

    document.getElementById("modal")
        .classList.remove("activo");

}


/* =============================== */
/* CERRAR AL HACER CLICK AFUERA */
/* =============================== */

document.getElementById("modal")
.addEventListener("click", function(e){

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