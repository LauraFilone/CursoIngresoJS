function mostrar()
{
	let precio = 15000;
	let estacion;
	let destino;
	let nuevoPrecio;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById(txtIdEstacion).value;

	switch (estacion){
		case invierno:
			if (estacion == "Bariloche"){
			nuevoPrecio = precio *1.20;
			}else if (estacion == "Cordoba"){
				nuevoPrecio = (precio * 20/100) 
			}



		break;

		case otoño:
		case primavera:

		break;

		




	}

	
	




}//FIN DE LA FUNCIÓN

//codigo profe
function mostrar() {
	let precio = 15000;
	let estacion;
	let destino;
	let precioFinal;
	
  
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
  
	switch (estacion) {
	  case "Invierno":
		if (destino == "Bariloche") {
		  precioFinal = precio * 1.2;
		} else if (destino == "Mar del plata") {
		  precioFinal = precio * 0.8;
		} else {
		  precioFinal = precio * 0.9;
		}
		break;
	  case "Verano":
		if (destino == "Bariloche") {
		  precioFinal = precio * 0.8;
		} else if (destino == "Mar del plata") {
		  precioFinal = precio * 1.2;
		} else {
		  precioFinal = precio * 1.1;
		}
		break;
	  case "Otoño":
	  case "Primavera":
		if (destino == "Cordoba") {
		  precioFinal = precio;
		} else {
		  precioFinal = precio * 1.1;
		}
		break;
	} // fin del switch
  
	alert("El precio final es $ " + precioFinal);
  }
  
  