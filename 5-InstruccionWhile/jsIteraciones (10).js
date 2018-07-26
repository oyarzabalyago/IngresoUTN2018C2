function mostrar()
{
	var acumuladorpos=0;
	var acumuladorneg=1;
	var contpos;
	var contneg;
	var contcero;
	var respuesta;
	var numero;

	do
	{
		numero = prompt("Ingrese un numero: ");
		if(parseInt(numero)==0)
		{
			contcero++;
		}

		if(parseInt(numero) > 0)
		{
			acumuladorpos = parseInt(acumuladorpos) + parseInt(numero);
			contpos++;
		}
		else
		{
			acumuladorneg = parseInt(acumuladorneg) + parseInt(numero);
			contneg++;
		}


		contpares = parseInt(num1) % parseInt(num2);

		respuesta = prompt("Desea continuar?: ");

	}while(respuesta == "si")


document.getElementById('suma').value=acumuladorpos;
document.getElementById('producto').value=acumuladorneg;

Document.write(hola);

}//FIN DE LA FUNCIÓN