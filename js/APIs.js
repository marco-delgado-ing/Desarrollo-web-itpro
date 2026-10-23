//Declarar variables
const formPokemon = document.querySelector("#formPokemon");
const pokemon = document.querySelector("#pokemon");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");

//Flujo
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(
//         function (respuesta) {
//             return respuesta.json();
//         }
//     )
//     .then(
//         function (datos) {
//             mensaje.textContent = datos.name;
//         }
//     )
//     .catch(
//         function (error) {
//             mensaje.textContent = "Ocurrió el error: " + error.message;
//         }
//     );

formPokemon.addEventListener("submit", function (event) {
    event.preventDefault();

    let busqueda = pokemon.value.trim().toLowerCase();

    mensaje.textContent = "Buscando pokémon...";
    resultado.textContent = "";

    fetch("https://pokeapi.co/api/v2/pokemon/" + busqueda)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("No se encontró pokémon");
            }
            return respuesta.json();
        })
        .then(function (datos) {
            mensaje.textContent = "Pokémon encontrado: " + datos.name;
            resultado.innerHTML = "<h2>" + datos.name + "</h2>"+
                                "<img src='" + datos.sprites.front_default+"'>"
        })
        .catch(function (error) {
            mensaje.textContent = "Ocurrió un error: " + error.message;
        })
})