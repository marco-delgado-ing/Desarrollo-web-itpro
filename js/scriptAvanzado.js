// Objetos y arreglos en JS
//Objeto
let alumno = {
    numCuenta: 311290206,
    nombre: "Marco Antonio",
    apellidoPaterno: "Delgado",
    apellidoMaterno: "González",
    edad: 31
}
// Array
let calificaciones = [6,7,10];

document.getElementById("resultado").textContent = "Alumno: "
+ alumno.nombre 
+ "Calificaciones:"
+ calificaciones.join(", ")