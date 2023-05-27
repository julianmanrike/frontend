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
