/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let importeDescuento;
	let resultado;

	importe = parseInt(document.getElementById("txtIdImporte").value);
	importeDescuento = importe * 0.25;
	resultado = importe - importeDescuento;
	document.getElementById("txtIdResultado").value = resultado;

	
}
