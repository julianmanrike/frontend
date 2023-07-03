let urlUsuario = "https://julianmanrike.pythonanywhere.com/usuario"
let datos={
    usuario: "",
    password:""
}

fetch(urlUsuario)
    .then(response => response.json())
    .then(data=> {
        datos.usuario = data[0].usuario
        datos.password = data[0].password
        })
        .catch(error=>{
            console.error("error al cargar Usuario", error)
        })

let botonLogin = document.querySelector(".ingresar")
let cancelarLogin = document.querySelector(".cancelarLogin")
let inputUsuario = document.getElementById("usuario")
let inputPassword = document.getElementById("password")

let usuarioInvalido = document.getElementById("invalido")

botonLogin.addEventListener("click", aceptarLogin)


function aceptarLogin(event){
    event.preventDefault()

    if(inputUsuario.value == datos.usuario && inputPassword.value == datos.password){
        usuarioInvalido.innerHTML=""
        // console.log(datos)
        localStorage.setItem('usuario', "aceptado");
        window.location.href = "../vehiculos.html"
    }else{
        usuarioInvalido.innerHTML="Usuario o contraseña invalidos"
    }
}

cancelarLogin.addEventListener("click", volverInicio)

function volverInicio(){
    window.location.href = "../index.html"
}