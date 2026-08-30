/* =============================== */
/* MENÚ LATERAL */
/* =============================== */

const menuBtn = document.getElementById("menuBtn");

const sidebar = document.getElementById("sidebar");

const overlay = document.getElementById("overlay");

/* =============================== */
/* ABRIR / CERRAR MENÚ */
/* =============================== */

menuBtn.addEventListener("click", () => {


sidebar.classList.toggle("active");

overlay.classList.toggle("active");


});

/* =============================== */
/* CERRAR CON OVERLAY */
/* =============================== */

overlay.addEventListener("click", () => {


sidebar.classList.remove("active");

overlay.classList.remove("active");


});

/* =============================== */
/* CERRAR CON ESC */
/* =============================== */

document.addEventListener("keydown", (e) => {


if(e.key === "Escape"){

    sidebar.classList.remove("active");

    overlay.classList.remove("active");

}


});
