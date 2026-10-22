let formRegistro = document.querySelector("#formRegistro");
let formLogin = document.querySelector("#formLogin");
let mensaje = document.querySelector("#mensaje");
let sesion = document.querySelector("#sesion");
let cerrarSesion = document.querySelector("#cerrarSesion");

recuperarSesion()

function mostrarMensaje(texto) {
    mensaje.textContent = texto;
}

formRegistro.addEventListener("submit", registrarUsuario);
formLogin.addEventListener("submit", iniciarSesion);

function registrarUsuario(event) {

    event.preventDefault();

    let nombre = document.querySelector("#nombreRegistro").value.trim();
    let correo = document.querySelector("#correoRegistro").value.trim();
    let contra = document.querySelector("#passwordRegistro").value.trim();
    let usuariosRegistrados = [];

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
    }
}

function iniciarSesion(event){
    event.preventDefault();
    
    let correo = document.querySelector("#correoLogin").value;
    let contra = document.querySelector("#passwordLogin").value;

    let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios") || "[]");

    let usuarioLoggeado = usuariosRegistrados.find(function (item){
        return item.email === correo && item.password === contra;
    }
    );

    if(!usuarioLoggeado){
        mostrarMensaje("Credenciales incorrectas" + usuarioLoggeado);
        return;
    }

    let datosSesion = {
        nombre: usuarioLoggeado.name,
        correo: usuarioLoggeado.email
    }

    sessionStorage.setItem("sesionActual", JSON.stringify(datosSesion));
    mostrarSesion(datosSesion);
    formLogin.reset();
}
function mostrarSesion(usuario){
    mensaje.textContent="Iniciaste sesión correctamente";
    sesion.textContent = "Bienvenido al sistema "+ usuario.nombre;
}

function recuperarSesion(){
    try{
        let datos = sessionStorage.getItem("sesionActual");
        if(datos){
            let usuario = JSON.parse(datos);
            mostrarSesion(usuario);
            mostrarMensaje("Sesión recuperada");
        }
    }catch{
        mostrarMensaje("No fue posible cargar los datos de sesión");
    }
}