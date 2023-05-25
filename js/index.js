
//API DE AUTOS---------- https://cdn.imagin.studio/getImage?&customer=arpowereco&make=peugeot&modelFamily=308&modelRange=308&modelVariant=ce&modelYear=2019&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0016&angle=01
//API DE MARCELA---------- http://mcerda.pythonanywhere.com/autos

//**********************************TARJETA 1**********************************
const t1 = fetch('https://cdn.imagin.studio/getImage?&customer=arpowereco&make=peugeot&modelFamily=308&modelRange=308&modelVariant=ce&modelYear=2019&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0016&angle=01')
	.then(t1 => {
		if (t1.ok) {
			return t1.blob(); // Obtener los datos binarios de la imagen
		} else {
			throw new Error('Error al cargar la imagen');
		}
	})
	.then(imageBlob => {
		const tarjetas = document.querySelectorAll('#tarjeta-1');

		tarjetas.forEach(tarjeta => {
			const img = document.createElement('img');
			img.src = URL.createObjectURL(imageBlob); // Crear una URL para el objeto de imagen
			tarjeta.innerHTML = ''; // Limpiar el contenido existente de la tarjeta
			tarjeta.appendChild(img);
		});
	})
	.catch(error => {
		console.error(error);
	});


//**********************************TARJETA 2**********************************


const t2 = fetch('  https://cdn.imagin.studio/getImage?&customer=arpowereco&make=volvo&modelFamily=c40&modelRange=recharge&modelVariant=od&modelYear=2021&powerTrain=electric&transmission=0&bodySize=5&trim=core&paintId=pspc0367&angle=01')
	.then(t2 => {
		if (t2.ok) {
			return t2.blob();
		} else {
			throw new Error('Error al cargar la imagen');
		}
	})
	.then(imageBlob => {
		const tarjetas = document.querySelectorAll('#tarjeta-2');

		tarjetas.forEach(tarjeta => {
			const img = document.createElement('img');
			img.src = URL.createObjectURL(imageBlob);
			tarjeta.innerHTML = '';
			tarjeta.appendChild(img);
		});
	})
	.catch(error => {
		console.error(error);
	});

//**********************************TARJETA 3**********************************

const t3 = fetch('https://cdn.imagin.studio/getImage?&customer=arpowereco&make=tesla&modelFamily=model-y&modelRange=model-y&modelVariant=od&modelYear=2020&powerTrain=electric&transmission=0&bodySize=5&trim=eu&paintId=pspc0108&angle=01')
	.then(t3 => {
		if (t3.ok) {
			return t3.blob();
		} else {
			throw new Error('Error al cargar la imagen');
		}
	})
	.then(imageBlob => {
		const tarjetas = document.querySelectorAll('#tarjeta-3');

		tarjetas.forEach(tarjeta => {
			const img = document.createElement('img');
			img.src = URL.createObjectURL(imageBlob);
			tarjeta.innerHTML = '';
			tarjeta.appendChild(img);
		});
	})
	.catch(error => {
		console.error(error);
	});

//**********************************TARJETA 4**********************************

const t4 = fetch('https://cdn.imagin.studio/getImage?&customer=arpowereco&make=renault&modelFamily=kwid&modelRange=kwid&modelVariant=od&modelYear=2021&powerTrain=electric&transmission=0&bodySize=5&trim=eu&paintId=pspc0093&angle=01')
	.then(t4 => {
		if (t4.ok) {
			return t4.blob();
		} else {
			throw new Error('Error al cargar la imagen');
		}
	})
	.then(imageBlob => {
		const tarjetas = document.querySelectorAll('#tarjeta-4');

		tarjetas.forEach(tarjeta => {
			const img = document.createElement('img');
			img.src = URL.createObjectURL(imageBlob);
			tarjeta.innerHTML = '';
			tarjeta.appendChild(img);
		});
	})
	.catch(error => {
		console.error(error);
	});

//**********************************TARJETA 5**********************************

const t5 = fetch('https://cdn.imagin.studio/getImage?&customer=arpowereco&make=volvo&modelFamily=xc90&modelRange=xc90&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0045&angle=01')
	.then(t5 => {
		if (t5.ok) {
			return t5.blob();
		} else {
			throw new Error('Error al cargar la imagen');
		}
	})
	.then(imageBlob => {
		const tarjetas = document.querySelectorAll('#tarjeta-5');

		tarjetas.forEach(tarjeta => {
			const img = document.createElement('img');
			img.src = URL.createObjectURL(imageBlob);
			tarjeta.innerHTML = '';
			tarjeta.appendChild(img);
		});
	})
	.catch(error => {
		console.error(error);
	});


//**********************************TARJETA 6**********************************

const t6 = fetch('https://cdn.imagin.studio/getImage?&customer=arpowereco&make=tesla&modelFamily=model-y&modelRange=model-y&modelVariant=od&modelYear=2020&powerTrain=electric&transmission=0&bodySize=5&trim=eu&paintId=pspc0064&angle=01')
	.then(t6 => {
		if (t6.ok) {
			return t6.blob();
		} else {
			throw new Error('Error al cargar la imagen');
		}
	})
	.then(imageBlob => {
		const tarjetas = document.querySelectorAll('#tarjeta-6');

		tarjetas.forEach(tarjeta => {
			const img = document.createElement('img');
			img.src = URL.createObjectURL(imageBlob);
			tarjeta.innerHTML = '';
			tarjeta.appendChild(img);
		});
	})
	.catch(error => {
		console.error(error);
	});