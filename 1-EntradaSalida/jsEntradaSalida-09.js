/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	// 1 Declarar variables sueldo aumento nuevoSueldo
	let sueldo;
	let aumento;
	let nuevoSueldo;
	// 2 conseguir el sueldo
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	//3 calcular el aumento
	aumento = sueldo * 0.1; 
	// 4 calcular el nuevo sueldo
	nuevoSueldo = sueldo + aumento;
	//5 mostrar el usuario el nuevo sueldo
	document.getElementById("txtIdResultado").value = nuevoSueldo.toFixed(2);
}
