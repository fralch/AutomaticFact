const axios = require('axios');


numero = 100; 

for (let i = 0; i < numero ; i++) {

			let rutaLaravel = 'http://127.0.0.1:8000/faker/'
			// console.log(rutaLaravel);
			axios.get(rutaLaravel)
			.then((res) => {
				console.log('faker');
			})
			.catch((err) => {
				console.log(err);
			});
}






