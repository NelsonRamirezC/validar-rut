import { Fn } from "./validarRut.js";

let formulario = document.getElementById("formValidarRut");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let rutUsuario = rut.value;
    Fn.validaRut(rutUsuario) ? alert("Rut válido") : alert("Rut inválido");
});
