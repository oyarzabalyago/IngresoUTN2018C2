function mostrar()
{
	var acumuladorpos=0;
	var acumuladorneg=1;
	var respuesta;
	var numero;

	do
	{
		numero = prompt("Ingrese un numero: ");
		
		if(parseInt(numero) > 0)
		{
			acumuladorpos =parseInt(acumuladorpos) + parseInt(numero);
		}
		else
		{
			acumuladorneg = acumuladorneg * numero;
		}

		respuesta = prompt("Desea continuar?: ");

	}while(respuesta == "si")


document.getElementById('suma').value=acumuladorpos;
document.getElementById('producto').value=acumuladorneg;

}//FIN DE LA FUNCIÓN