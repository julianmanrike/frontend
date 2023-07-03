if(localStorage.getItem("usuario") == "aceptado"){
    console.log("dar permisos")
    setTimeout(darPermisos,500)
}

function darPermisos(){
    let navLogin = document.getElementById("navLogin")
    let navLogout = document.getElementById("navLogout")
    botonesUsuario = document.querySelectorAll(".visualizar")

    navLogin.style.display = "none"
    navLogout.style.display = "block"

    console.log(botonesUsuario)

    botonesUsuario.forEach((boton)=>{
        boton.style.display= "inline"
    })

}
