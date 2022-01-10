const XLSX = require('xlsx');
const axios = require('axios');


const leerExcel = (ruta) => {
    const workbook = XLSX.readFile(ruta);
    const sheet_name_list = workbook.SheetNames;
    const sheet = sheet_name_list[0]
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    
    return data; 
}
let datos =JSON.parse(JSON.stringify(leerExcel('DESEMBOLSOS.xlsx')));

for (let i = 0; i < datos.length ; i++) {

	const element = datos[i];
			let rutaLaravel = 'http://127.0.0.1:8000/cre/caj/facturarAutomaticGet/'+
						element.NOMBRE + '/' + 
						element.DNI +'/'+ 
						element.MONTO +'/'+ 
						element.NUMERO+'/'+
						element.SERIE;
			// console.log(rutaLaravel);
			axios.get(rutaLaravel)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
}






