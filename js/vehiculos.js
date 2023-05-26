fetch('http://127.0.0.1:5500/data.json')
  .then((response) => response.json())
  .then((data) => {
    const tarjetas = data;

    const contenedorTarjetas = document.querySelector('.contenedor-tarjetas');//selecciono la clase
    console.log(tarjetas)

    //Creo todo el hmtl
    tarjetas.forEach((tarjeta) => {
      const divTarjeta = document.createElement('div');
      divTarjeta.className = 'tarjeta-auto';

      const imagen = document.createElement('img');
      imagen.src = tarjeta.imagen;
      imagen.alt = '';

      const h3 = document.createElement('h3');
      h3.textContent = tarjeta.nombre;

      const h4 = document.createElement('h4');
      h4.textContent = `Desde: ${tarjeta.desde}`;

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.name = 'conocer';
      input.className = 'conocer-mas';

      const label = document.createElement('label');
      label.htmlFor = 'conocer';
      label.className = 'conocer';
      label.textContent = 'Conocer más';

      const p = document.createElement('p');
      p.className = 'descripcion';
      p.textContent = tarjeta.descripcion;

      divTarjeta.appendChild(imagen);
      divTarjeta.appendChild(h3);
      divTarjeta.appendChild(h4);
      divTarjeta.appendChild(input);
      divTarjeta.appendChild(label);
      divTarjeta.appendChild(p);

      contenedorTarjetas.appendChild(divTarjeta);
    });
  });


//************************marca volvo. NO SE PUEDE APLICAR EL MISMO CODIGO YA QUE CADA TARJETAS DE LAS QUE SIGUEN TIENE LAS ETIQUETAS H3,H4 Y P ************************

/*  fetch('http://127.0.0.1:5500/data.json')
  .then((response) => response.json())
  .then((data) => {
    const tarjetas = data;

    const contenedorTarjetas = document.querySelector('.contenedor-volvo');//selecciono la clase
    console.log(tarjetas)

    //Creo todo el hmtl
    tarjetas.forEach((tarjeta) => {
      const divTarjeta = document.createElement('div');
      divTarjeta.className = 'tarjeta-auto';

      const imagen = document.createElement('img');
      imagen.src = tarjeta.imagen;
      imagen.alt = '';

      const h3 = document.createElement('h3');
      h3.textContent = tarjeta.nombre;

      const h4 = document.createElement('h4');
      h4.textContent = `Desde: ${tarjeta.desde}`;

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.name = 'conocer';
      input.className = 'conocer-mas';

      const label = document.createElement('label');
      label.htmlFor = 'conocer';
      label.className = 'conocer';
      label.textContent = 'Conocer más';

      const p = document.createElement('p');
      p.className = 'descripcion';
      p.textContent = tarjeta.descripcion;

      divTarjeta.appendChild(imagen);
      divTarjeta.appendChild(h3);
      divTarjeta.appendChild(h4);
      divTarjeta.appendChild(input);
      divTarjeta.appendChild(label);
      divTarjeta.appendChild(p);

      contenedorTarjetas.appendChild(divTarjeta);
    });
  });*/
