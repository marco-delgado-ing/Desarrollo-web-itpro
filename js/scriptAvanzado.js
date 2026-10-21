const pizarron = document.querySelector("#resultado");
//EJ1. Objetos y arreglos en JS
//Objeto
let alumno = {
    numCuenta: 311290206,
    nombre: "Marco Antonio",
    apellidoPaterno: "Delgado",
    apellidoMaterno: "González",
    edad: 31
}
// Array
let calificaciones = [6, 7, 10];

document.getElementById("resultado").innerHTML += "<br>Alumno: "
    + alumno.nombre
    + "Calificaciones:"
    + calificaciones.join(", ")

// EJ 2. Funciones
function saludar() {
    let saludo = "Te estoy saludando";
    pizarron.innerHTML += "<br>Hola " + alumno.nombre + saludo;
}

// EJ3. Propiedades y métodos en JS
let profe = {
    numTrabajador: "897047",
    nombre: "Marco",
    apellidoPaterno: "Delgado",
    apellidoMaterno: "González",
    clase: "Ing. de SW",
    nombreCompleto() {
        return this.nombre + " " + this.apellidoPaterno + " " + this.apellidoMaterno
    }
}
pizarron.innerHTML += "<br>" + profe.nombreCompleto();

// EJ4. Métodos en Arrays
// push y pop
calificaciones.push(5);
pizarron.innerHTML += "<br> Nuevas calificaciones" + calificaciones.join(", ");
calificaciones.pop();
calificaciones.push(6);
pizarron.innerHTML += "<br> Nuevas calificaciones" + calificaciones.join(", ");
// filter
let aprobadas = calificaciones.filter(n => n >= 8);
pizarron.innerHTML += "<br> Calificaciones aprobadas: " + aprobadas.join(", ");
// map
let duplicado = calificaciones.map(n => n * 2);
pizarron.innerHTML += "<br> Calificaciones duplicadas: " + duplicado.join(", ");
