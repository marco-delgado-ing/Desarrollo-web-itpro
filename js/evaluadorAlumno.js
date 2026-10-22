//let calificacion = 9;
const pResultado = document.querySelector("#resultado");
const inputNombre = document.querySelector("#nombre");
const inputCalificacion = document.querySelector("#calificacion");
const btnEvaluar = document.querySelector("#evaluar");

// Ejemplo de if else
// if (calificacion >= 9) {
//     resultado.textContent = "Excelente";
// } else if (calificacion >= 6) {
//     resultado.textContent = "Mas o menos";
// } else{
//     resultado.textContent = "Muy mal";
// }

// Ejemplo switch
// switch (Math.floor(calificacion)) {
//     case 10:
//         resultado.textContent = "Perfecto";
//         break;
//     case 9:
//         resultado.textContent = "Casi perfecto";
//         break;
//         default:
//             resultado.textContent = "calificación inválida";

// }

// Ejemplo de ciclo for
// let texto = "";

// for (let i = 0; i <= 10; i++) {
//     texto += i + " ";
// }

// Ejemplo ciclo while
// let texto = "";
// let i=0;

// while(i<=10){
//     texto += i + " ";
//     i++;
// }

// resultado.textContent = texto;

// Ejemplo contar elementos array
// let calificaciones = [8, 5, 6, 7, 3, 10];
// let aprobados = 0;

// for (let i = 0; i < calificaciones.length; i++) {
//     if (calificaciones[i] >= 6) {
//         aprobados++;
//     }
// }
// resultado.textContent = "Materias aprobadas: " + aprobados;

// Ejemplo eventos
btnEvaluar.addEventListener("click",
    function () {
        if (inputNombre.value.trim() == "") {
            pResultado.textContent = "Escribe el nombre del alumno";
        } else if (inputCalificacion.value == "") {
            pResultado.textContent = "Escribe la calificación del alumno";
        } else if (inputCalificacion.value>=9){
            pResultado.textContent = "Excelente!!!";
            pResultado.style.color="green";
        } else if (inputCalificacion.value>=6){
            pResultado.textContent = "Puedes mejorar :(";
            pResultado.style.color="orange";
        }else{
            pResultado.textContent = "Muy mal!!!!";
            pResultado.style.color="red";
            
        }
    }
)