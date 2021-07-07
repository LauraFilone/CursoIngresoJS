/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/


function mostrar()
{
	// Reservo espacio en memoria para guardar el nombre
	let nombre;
	// Guardo la variabble
	nombre = prompt ("Indique su nombre");
	document.getElementById("txtIdNombre").value = nombre;
}

