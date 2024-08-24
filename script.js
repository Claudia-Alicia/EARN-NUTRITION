// script.js

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");
    const title = document.getElementById("titulo-principal");

    // Animación del logo al cargar la página
    logo.style.animation = "fadeIn 2s ease-in-out forwards";
    
    // Animación del título al cargar la página
    title.style.animation = "slideIn 1s ease-in-out forwards";
});
