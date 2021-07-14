function mostrar()
{
	let min = 1;
	let max = 10;

	let numero = Math.floor(Math.random()*(max-min+1)+min);

	if(numero >= 9){
		alert("excelente");
	}else if (numero >=4){
		alert("Aprobo");
	}else{
		alert("Vamos, la proxima se puede")
	}
}//FIN DE LA FUNCIÓN