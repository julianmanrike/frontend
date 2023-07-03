const logout = document.querySelector(".abandonar")
const cancelar = document.querySelector(".cancelarLogout")

logout.addEventListener("click", borrarUsuario)
cancelar.addEventListener("click", volverInicio)

function borrarUsuario(event){
    event.preventDefault()
    console.log(localStorage.clear())
    window.location.href = "../index.html"
}

function volverInicio(event){
    event.preventDefault()
    window.location.href = "../vehiculos.html"

}

