const API_BASE_URL = "https://allocated-discuss-sig-beads.trycloudflare.com";

const formAlumno = document.querySelector("#formAlumno");
const mensaje = document.querySelector("#mensaje");




async function enviarPOST(datos) {
    const respuesta = await fetch(API_BASE_URL + "/api/alumnos",{
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    });

    const resultado = await respuesta.json();

    if(!respuesta.ok || resultado.status!= "success"){
        throw new Error(
            resultado.message
        );
    }
    return resultado;
}

formAlumno.addEventListener("submit", async function (event) {
    event.preventDefault();

    const datos = {
        numCuenta: document.querySelector("#numCuenta").value.trim(),
        nombre: document.querySelector("#nombre").value.trim(),
        apellidoPaterno: document.querySelector("#apellidoPaterno").value.trim(),
        apellidoMaterno: document.querySelector("#apellidoMaterno").value.trim(),
    };
    try{
        const resultado = await enviarPOST(datos);
        mensaje.textContent = resultado.message;
        formAlumno.reset();
        //window.location="home.html";

    }catch(error){
        mensaje.textContent=error.message;
    }
})