
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
/* MODAL */
/* =============================== */

function abrirModal(){

    document.getElementById("modal").classList.add("activo");

}


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

