function mostrar()
{
	var maximo=0;
	var minimo=1;
	var respuesta;
	var numero=0;
	var flag=0;

	do
	{
		numero = prompt("Ingrese un numero: ");
		
		if(maximo <= numero || flag==0)
		{
			maximo = numero;
		}
		
		if(minimo >= numero || flag==0)
		{
			minimo = numero;
			contador++;
			flag=1;
		}

		respuesta = prompt("Desea continuar?: ");

	}while(respuesta == "si")


document.getElementById('maximo').value=maximo;

if (flag==0){
	minimo=0;
}
document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN