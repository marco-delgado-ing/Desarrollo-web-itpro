//alert("Hola mundo");
console.log("Hola mundo oculto");

let nombre = "Marco";
//var nombre = "Juan";
console.log("Bienvenido al sistema "+nombre);

let edad = 31;
let ciudad = "Ecatepec";
let seMurio = false;
let tieneDinero = null;
let simbolo = Symbol("age")

document.getElementById("name").textContent=nombre;
document.getElementById("age").textContent=edad;
document.getElementById("city").textContent=ciudad;

function cambiaEdad(){
    edad ++;
    document.getElementById("age").textContent=edad;
}