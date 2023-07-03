const url = "https://julianmanrike.pythonanywhere.com/vehiculos"
let vehiculos = []
let deleteId = null;
// traerApi()


window.addEventListener('DOMContentLoaded', () => {
  traerApi();
})

function traerApi(){
    fetch(url)
            .then(response => response.json())
            .then(data => {
                mostrarInfo(data)
                vehiculos = data
                // console.log(vehiculos)
            })
            .catch(error => {
                console.log("error al obtener datos de la api vehiculos", error)
            })
}

function mostrarInfo(data){
    
    var solapasDiv = document.getElementById('solapas');
    solapasDiv.innerHTML=""
    let marcas=[]
    //array para obtener marcas sin repetir
    data.forEach(vehiculos=>{
        let marcaId = vehiculos.marca.toLowerCase()
        if(!marcas.includes(marcaId)){

            marcas.push(marcaId)
        }
    })

    marcas.forEach(marcaId=>{
        //se recorre array por marcas
        // console.log(marcaId)

        var inputRadio = document.createElement('input');
        inputRadio.setAttribute('type', 'radio');
        inputRadio.setAttribute('name', 'marca');
        inputRadio.setAttribute('id', marcaId);
        if (marcaId === 'renault') {
            inputRadio.checked = true;
        }
        var label = document.createElement('label');
        label.setAttribute('for', marcaId);
        label.textContent = marcaId;

        // Crear div para el contenido de la marca
        var contenidoDiv = document.createElement('div');
        contenidoDiv.setAttribute('id', 'contenido-' + marcaId);
        contenidoDiv.classList.add('solapa-contenido');

        // Crear contenedor de tarjetas para los modelos
        var contenedorTarjetas = document.createElement('div');
        contenedorTarjetas.classList.add('contenedor-tarjetas');

        data.forEach(vehiculo=>
            {
                if(vehiculo.marca.toLowerCase()==marcaId)   {
                    //se recorre array por cada vehiculo que tiene la marca
                    // console.log(vehiculo)
                    var tarjeta = document.createElement('div');
                    tarjeta.classList.add('tarjeta-auto');

                    tarjeta.innerHTML += `
                        <p class="idVehiculo">${vehiculo.id}</p>
                        <button class="botonBorrar"onclick="openModalConfirm(${vehiculo.id})">borrar</button>
                        <button class="botonEditar" onclick="editProduct(${vehiculo.id})" >editar</button>
                        <img src="${vehiculo.imagen}" alt="${vehiculo.nombre}">
                        <h3>${vehiculo.nombre}</h3>    
                        <h4>Desde: $${vehiculo.precio} </h4>
                        <input type="checkbox" name="conocer" class="conocer-mas">
                        <label for="conocer" class="conocer">Conocer más</label>
                    `
                    // Agregar tarjeta al contenedor
                    contenedorTarjetas.appendChild(tarjeta);
                }
            })
            
            // Agregar contenedor de tarjetas al contenido de la marca
            contenidoDiv.appendChild(contenedorTarjetas);

            // // Agregar input radio, label y contenido al contenedor principal
            solapasDiv.appendChild(inputRadio);
            solapasDiv.appendChild(label);
            solapasDiv.appendChild(contenidoDiv);
    })
}



function agregarVehiculo(){
    const formData = new FormData(document.querySelector('#formAdd'));

//   if (!formData.get('nombre').length || !formData.get('color') || !formData.get('precio')) {
//     document.querySelector('#msgFormAdd').innerHTML = '* Llena todos los campos';
//     return;
//   }
//     document.querySelector('#msgFormAdd').innerHTML = '';

    let product = {
    marca: formData.get('marca'),
    nombre: formData.get('modelo'),
    descripcion: formData.get('descripcion'),
    imagen: formData.get('imagen'),
    precio: formData.get('precio')
    }

    fetch(url, {
        method: 'POST', 
        body: JSON.stringify(product),
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
    .then(response => response.json()) 
    .then(json => {console.log(json)
        location.reload()
    })
    .catch(err => console.log(err))

    traerApi()
    console.log(JSON.stringify(product))
    
}

const editProduct = (id) => {
  let vehiculo = vehiculos.find(vehiculo => vehiculo.id === id);

//   console.log(vehiculo)

  document.querySelector('#formEdit #ID').value = vehiculo.id;
  document.querySelector('#formEdit #modelo').value = vehiculo.nombre;
  document.querySelector('#formEdit #marca').value = vehiculo.marca;
  document.querySelector('#formEdit #precio').value = vehiculo.precio;
  document.querySelector('#formEdit #imagen').value = vehiculo.imagen;
  document.querySelector('#formEdit #descripcion').value = vehiculo.descripcion;

  openModalEdit();
}

function openModalEdit(){
    document.querySelector('#modalEdit').style.display = 'block';
}

const updateProduct = () => {
  const vehiculo = {
    nombre: document.querySelector('#formEdit #modelo').value,
    marca: document.querySelector('#formEdit #marca').value,
    precio: document.querySelector('#formEdit #precio').value,
    id: document.querySelector('#formEdit #ID').value,
    imagen: document.querySelector('#formEdit #imagen').value,
    descripcion : document.querySelector('#formEdit #descripcion').value
  }

//   if (!product.Nombre || !product.Color || !product.Precio) {
//     document.querySelector('#msgFormEdit').innerHTML = '* Los campos no deben estar vacíos';
//     return;
//   }
  document.querySelector('#msgFormEdit').innerHTML = '';

  fetch(url + "/" + vehiculo.id,{
    method: 'PUT',
    body: JSON.stringify(vehiculo),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(error => {
    console.error('Error al actualizar el vehiculo:', error);
    document.querySelector('#formEdit').reset();
  })
  .then(response => {
    alertManager('success', response.mensaje)
    closeModalEdit();
    traerApi()
    // getProducts();
  })
}

const openModalConfirm = (id) => {
  deleteId = id;
  document.querySelector('#modalConfirm').style.display = 'block';
}

const closeModalConfirm = () => {
  deleteId = null;
  document.querySelector('#modalConfirm').style.display = 'none';
}

const confirmDelete = (deleteProduct) => {
  if (!deleteProduct) {
    closeModalConfirm();
    return;
  }

  fetch(`${url}/${deleteId}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .catch(error => {
    console.error('Error al eliminar el vehiculo:', error);
  })
  .then(response => {
    alertManager('success', response.mensaje)
    closeModalConfirm();
    traerApi()
  })
}

const alertManager = (type, message) => {
  const alertElement = document.querySelector('#alert');
  alertElement.textContent = message;
  alertElement.className = `alert ${type}`;
  alertElement.style.display = 'block';

  setTimeout(() => {
    alertElement.style.display = 'none';
  }, 3000);
}

const closeModalAdd = () => {
  document.querySelector('#formAdd').reset();
  document.querySelector('#msgFormAdd').innerHTML = '';
  document.querySelector('#modalAdd').style.display = 'none';
}

const closeModalEdit = () => {
  document.querySelector('#formEdit').reset();
  document.querySelector('#msgFormEdit').innerHTML = '';
  document.querySelector('#modalEdit').style.display = 'none';
}

document.querySelector('#btnAdd').addEventListener('click', () => {
  document.querySelector('#modalAdd').style.display = 'block';
});


