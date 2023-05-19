const res = fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(photos => {
  const tarjetas = document.querySelectorAll('.tarjeta'); // Seleccionar todas las tarjetas

  photos.slice(0, tarjetas.length).forEach((photo, index) => { // Limitar la cantidad de fotos al número de tarjetas
	const tarjeta = tarjetas[index];
	const img = document.createElement('img');
	img.src = photo.url;
	tarjeta.innerHTML = ''; // Limpiar el contenido existente de la tarjeta
	tarjeta.appendChild(img);
  });
});
