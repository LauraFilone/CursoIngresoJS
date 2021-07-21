function mostrar()
{let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Febrero":
			alert("Tiene 28 días");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Junio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
				alert("Tiene 31 días");
		case "Noviembre":
		case "Abril":
		case "Julio":
		case "Septiembre":
			alert("Tiene 30 días");
			break;
	}
}//FIN DE LA FUNCIÓN