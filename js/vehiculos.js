fetch('data.json')
  .then(response => response.json())
  .then(data => {
    mostrarInformacion(data);
  })
  .catch(error => {
    console.error('Error al obtener los vehículos:', error);
  });

function mostrarInformacion(data) {
  var solapasDiv = document.getElementById('solapas');

  // Iterar sobre las marcas de vehículos
  data.vehiculos.forEach(marca => {
    var marcaId = marca.marca.toLowerCase();

    // Crear input radio y label para la marca
    var inputRadio = document.createElement('input');
    inputRadio.setAttribute('type', 'radio');
    inputRadio.setAttribute('name', 'marca');
    inputRadio.setAttribute('id', marcaId);
    if (marcaId === 'renault') {
      inputRadio.checked = true;
    }
    var label = document.createElement('label');
    label.setAttribute('for', marcaId);
    label.textContent = marca.marca;

    // Crear div para el contenido de la marca
    var contenidoDiv = document.createElement('div');
    contenidoDiv.setAttribute('id', 'contenido-' + marcaId);
    contenidoDiv.classList.add('solapa-contenido');

    // Crear contenedor de tarjetas para los modelos
    var contenedorTarjetas = document.createElement('div');
    contenedorTarjetas.classList.add('contenedor-tarjetas');

    // Iterar sobre los modelos de cada marca
    marca.modelos.forEach(modelo => {
      // Crear tarjeta para cada modelo
      var tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-auto');

      var imagen = document.createElement('img');
      imagen.src = modelo.imagen;
      imagen.alt = modelo.nombre;

      var titulo = document.createElement('h3');
      titulo.textContent = modelo.nombre;

      var precio = document.createElement('h4');
      precio.textContent = 'Desde: ' + modelo.precio;

      var checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('name', 'conocer');
      checkbox.classList.add('conocer-mas');

      var labelConocer = document.createElement('label');
      labelConocer.setAttribute('for', 'conocer');
      labelConocer.classList.add('conocer');
      labelConocer.textContent = 'Conocer más';

      var descripcion = document.createElement('p');
      descripcion.classList.add('descripcion');
      descripcion.textContent = modelo.descripcion;

      // Agregar elementos a la tarjeta
      tarjeta.appendChild(imagen);
      tarjeta.appendChild(titulo);
      tarjeta.appendChild(precio);
      tarjeta.appendChild(checkbox);
      tarjeta.appendChild(labelConocer);
      tarjeta.appendChild(descripcion);

      // Agregar tarjeta al contenedor
      contenedorTarjetas.appendChild(tarjeta);
    });

    // Agregar contenedor de tarjetas al contenido de la marca
    contenidoDiv.appendChild(contenedorTarjetas);

    // Agregar input radio, label y contenido al contenedor principal
    solapasDiv.appendChild(inputRadio);
    solapasDiv.appendChild(label);
    solapasDiv.appendChild(contenidoDiv);
  });
}


/* ************************************CRUD************************************ */
const API_URL = 'data.json';
let products = [];
let deleteId = null;

window.addEventListener('DOMContentLoaded', () => {
  getProducts();
})

const getProducts = () => {
  fetch(API_URL)
  .then(response => response.json())
  .catch(error => {
    console.error('Ocurrió un problema al cargar los productos:', error);
  })
  .then(data => {
    products = data;
    renderResult(products);
  })
}

const productsList = document.querySelector('#productsList');

const renderResult = (products) => {
  let listHTML = "";
  if(Array.isArray(products)){

  
  products.forEach(product => {
    listHTML += `
      <div class="card">
        <div>Nombre: ${product.Nombre}</div>
        <div>Color: ${product.Color}</div>
        <div>Precio: ${product.Precio}</div>
        <div class="options">
          <button type="button" onclick="editProduct(${product.Id})">Editar</button>
          <button type="button" onclick="openModalConfirm(${product.Id})">Eliminar</button>
        </div>
      </div>
    `;
  });
  productsList.innerHTML = listHTML;
}

}

const createProduct = () => {
  const formData = new FormData(document.querySelector('#formAdd'));

  if (!formData.get('nombre').length || !formData.get('color') || !formData.get('precio')) {
    document.querySelector('#msgFormAdd').innerHTML = '* Llena todos los campos';
    return;
  }
  document.querySelector('#msgFormAdd').innerHTML = '';

  const product = {
    Nombre: formData.get('nombre'),
    Color: formData.get('color'),
    Precio: formData.get('precio'),
  }

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(error => {
    console.error('Error al crear el producto:', error);
    document.querySelector('#formAdd').reset();
  })
  .then(response => {
    alertManager('success', response.mensaje)
    getProducts();
  })
}

const editProduct = (id) => {
  let product = products.find(prod => prod.Id === id);

  document.querySelector('#formEdit #ID').value = product.Id;
  document.querySelector('#formEdit #nombre').value = product.Nombre;
  document.querySelector('#formEdit #color').value = product.Color;
  document.querySelector('#formEdit #precio').value = product.Precio;

  openModalEdit();
}

const updateProduct = () => {
  const product = {
    Nombre: document.querySelector('#formEdit #nombre').value,
    Color: document.querySelector('#formEdit #color').value,
    Precio: document.querySelector('#formEdit #precio').value,
    Id: document.querySelector('#formEdit #ID').value,
  }

  if (!product.Nombre || !product.Color || !product.Precio) {
    document.querySelector('#msgFormEdit').innerHTML = '* Los campos no deben estar vacíos';
    return;
  }
  document.querySelector('#msgFormEdit').innerHTML = '';

  fetch(API_URL, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(error => {
    console.error('Error al actualizar el producto:', error);
    document.querySelector('#formEdit').reset();
  })
  .then(response => {
    alertManager('success', response.mensaje)
    closeModalEdit();
    getProducts();
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

  fetch(`${API_URL}/${deleteId}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .catch(error => {
    console.error('Error al eliminar el producto:', error);
  })
  .then(response => {
    alertManager('success', response.mensaje)
    closeModalConfirm();
    getProducts();
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
