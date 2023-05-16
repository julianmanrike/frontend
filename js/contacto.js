let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let enviar = document.getElementById("enviar")
let reset = document.getElementById("reset")

let nombreInvalido = document.getElementById("nombreInvalido")
let apellidoInvalido = document.getElementById("apellidoInvalido")
let emailInvalido = document.getElementById("emailInvalido")

let errorEnNombre = 0
let errorEnApellido = 0
let errorEnEmail = 0

function primerMayuscula(valor){
    return valor[0]===valor[0].toUpperCase()
}

function haySimbolos(valor){
    let simbolos = "!#$%&/()=?¡'¿+}{][¨*-.,;:_"
    let contador = 0
    for(elemento of valor){
        if(simbolos.includes(elemento)){
            contador++
        }
    }
    return contador>0
}

function hayNumeros(valor){
    let numeros = "1234567890"
    let contador = 0
    for(elemento of valor){
        if(numeros.includes(elemento)){
            contador++
        }
    }
    return contador>0
}

function formatoEmail(valor){
    return valor.indexOf("@")<valor.lastIndexOf(".")

}

function validarNombre(e){
    nombreInvalido.innerHTML=""
    errorEnNombre = 0
    let valorIngresado = e.target.value
    if(valorIngresado){
        if(!primerMayuscula(valorIngresado)){
            errorEnNombre++
            nombreInvalido.innerHTML+=`
                Ingrese el primer caracter en mayuscula<br>
            `
        }
        if(haySimbolos(valorIngresado)){
            errorEnNombre++
            nombreInvalido.innerHTML+=`
            No se permiten simbolos<br>
        `
        }
        if(hayNumeros(valorIngresado)){
            errorEnNombre++
            nombreInvalido.innerHTML+=`
                No se permiten numeros<br>
            `
        }
    }

    if(errorEnNombre>0){
        nombre.classList.add("invalido")
    }else{
        nombre.classList.remove("invalido")
    }
}

function validarApellido(e){
    apellidoInvalido.innerHTML=""
    errorEnApellido=0
    let valorIngresado = e.target.value
    if(valorIngresado){
        if(!primerMayuscula(valorIngresado)){
            errorEnApellido++
            apellidoInvalido.innerHTML+=`
                Ingrese el primer caracter en mayuscula<br>
            `
        }
        if(haySimbolos(valorIngresado)){
            errorEnApellido++
            apellidoInvalido.innerHTML+=`
            No se permiten simbolos<br>
        `
        }
        if(hayNumeros(valorIngresado)){
            errorEnApellido++
            apellidoInvalido.innerHTML+=`
                No se permiten numeros<br>
            `
        }
    }

    if(errorEnApellido>0){
        apellido.classList.add("invalido")
    }else{
        apellido.classList.remove("invalido")
    }
}

function validarEmail(e){
    errorEnEmail=0
    emailInvalido.innerHTML=""
    let valorIngresado = e.target.value
    if(valorIngresado){
         if(!formatoEmail(valorIngresado)){
            errorEnEmail++
             emailInvalido.innerHTML+=`
                 El formato debe ser: ejemplo@mail.com<br>
             `
         }
    }

    if(errorEnEmail>0){
        email.classList.add("invalido")
    }else{
        email.classList.remove("invalido")
    }

}

function resetearValores(){
    nombreInvalido.innerHTML=""
    apellidoInvalido.innerHTML=""
    emailInvalido.innerHTML=""

}

function enviarDatos(e){
    let contadorErrores = errorEnNombre + errorEnApellido + errorEnEmail
    if(contadorErrores>0){
        e.preventDefault()

    }
    console.log(contadorErrores)

}




nombre.addEventListener("blur", validarNombre)

apellido.addEventListener("blur", validarApellido)

email.addEventListener("blur", validarEmail)

enviar.addEventListener("click", enviarDatos )
reset.addEventListener("click", resetearValores)
