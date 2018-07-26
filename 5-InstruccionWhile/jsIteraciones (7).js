function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	do
	{
		numero = prompt("Ingrese un numero: ");
		
		acumulador= acumulador + nuemero;
		
		contado++;
		
		respuesta = prompt("Desea continuar?: ");

	}while(respuesta == "si")


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN