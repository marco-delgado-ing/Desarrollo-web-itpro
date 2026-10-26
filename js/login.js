//CAMBIO 0: AGREGAR UN ID AL MAIN O BODY DEL HOME Y MAPEARLO
//CAMBIO 1: SE VALIDA QUE ESTEMOS TRABAJANDO CON LA VISTA CORRECTA
//CAMBIO 2: COLOCAMOS EL PARRAFO PAAR EL MENSAJE EN TODAS LAS VISTAS
//CAMBIO 3: QUITAMOS EL HIDDEN DEL BOTON CERRAR SESION EN F INICIAR SESION Y AÑADIMOS UN TIMEOUT
//CAMBIO 4: MOSTRAR SESION AL CARGAR EL HOME
//CAMBIO 5: ELEVAR EL SCOPE DE datosSesion Y usuariosRegistrados PARA QUE TODAS LAS F ALCANCEN A VERLA
//CAMBIO 6: AÑADIR LINK PARA REGISTRARSE EN EL INDEX
//CAMBIO 7: REDIRECCIONAR DESPUES DE REGISTRAR

// Definir elementos del DOM
let formRegistro = document.querySelector("#formRegistro");
let formLogin = document.querySelector("#formLogin");
//CAMBIO 0
let home = document.querySelector("#home");

let mensaje = document.querySelector("#mensaje");
let sesion = document.querySelector("#sesion");
let cerrar = document.querySelector("#cerrarSesion");
//CAMBIO 5
let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
let datosSesion = {}

//Definir flujo
//CAMBIO 1
if (formRegistro) {
    formRegistro.addEventListener("submit", registrarUsuario);
}
if (formLogin) {
    formLogin.addEventListener("submit", iniciarSesion);
}
if (home) {
    mostrarSesion(datosSesion);
    cerrar.addEventListener("click", cerrarSesion);
    recuperarSesion();
}




//Definir funciones
function mostrarMensaje(texto) {
    mensaje.textContent = texto;
}
function registrarUsuario(event) {

    event.preventDefault();

    let nombre = document.querySelector("#nombreRegistro").value.trim();
    let correo = document.querySelector("#correoRegistro").value.trim();
    let contra = document.querySelector("#passwordRegistro").value.trim();

    if (nombre == "" || correo == "" || contra == "") {
        mostrarMensaje("Todos los campos son obligatorios");
    } else if (contra.length < 8) {
        mostrarMensaje("La contraseña debe ser mínimo de 8 caracteres");
    } else {

        usuariosRegistrados.push(
            {
                name: nombre,
                email: correo,
                password: contra
            }
        );
        localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
        mostrarMensaje("Usuario registrado");
        formRegistro.reset();
        //CAMBIO 7:
        setTimeout(() => {
            window.location = "../index.html";
        }, 3000);
    }
}
function iniciarSesion(event) {
    event.preventDefault();

    let correo = document.querySelector("#correoLogin").value;
    let contra = document.querySelector("#passwordLogin").value;
    // CAMBIO 5
    usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios") || "[]");

    let usuarioLoggeado = usuariosRegistrados.find(function (item) {
        return item.email === correo && item.password === contra;
    }
    );

    if (!usuarioLoggeado) {
        mostrarMensaje("Credenciales incorrectas");
        return;
    }

    datosSesion = {
        nombre: usuarioLoggeado.name,
        correo: usuarioLoggeado.email
    }

    sessionStorage.setItem("sesionActual", JSON.stringify(datosSesion));

    //cerrar.hidden = false;
    formLogin.reset();
    //CAMBIO 3
    mostrarMensaje("Iniciaste sesión correctamente :)");
    setTimeout(() => {
        window.location = "./pages/home.html";
    }, 1000);
}
function mostrarSesion(usuario) {
    mensaje.textContent = "Iniciaste sesión correctamente";
    sesion.textContent = "Bienvenido al sistema " + usuario.nombre;
}
function recuperarSesion() {
    try {
        let datos = sessionStorage.getItem("sesionActual");
        if (datos) {
            let usuario = JSON.parse(datos);
            mostrarSesion(usuario);
            mostrarMensaje("Sesión recuperada");
            cerrar.hidden = false;
        }
    } catch {
        mostrarMensaje("No fue posible cargar los datos de sesión");
    }
}
function cerrarSesion() {
    sessionStorage.removeItem("sesionActual");
    sesion.textContent = "";
    cerrar.hidden = true;
    mostrarMensaje("Cerraste sesión :)");
    window.location.href = "../index.html";
}