function mostrar()
{
	var acumuladorpos=0;
	var acumuladorneg=0;
	var contpos=0;
	var contneg=0;
	var contcero=0;
	var respuesta=0;
	var numero;
	var contpares=0;
	var contimp=0;
	var promediopos=0;
	var promedioneg=0;
	var diferencia=0;

	do
	{
		numero = parseInt(prompt("Ingrese un numero: "));

		
		if(numero==0) // reviso si el numero ingresado es igual a cero
		{
			contcero++;
		}		
		else if(numero > 0) // verifico si el nuemro es positivo o negativo 
		{
			acumuladorpos = acumuladorpos + numero;
			contpos++;
		}
		else
		{
			acumuladorneg = acumuladorneg + numero;
			contneg++;
		}

		/* veo si el numero es par o impar */
		if(parseInt(numero) % 2==0)
		{
			contpares++;
		}
		else
		{
			contimp++;
		}
		
		// muestro resultados
		respuesta = prompt("Desea continuar?: ");

	}while(respuesta == "si")

if(contpos != 0 )
{
	promediopos= acumuladorpos / contpos;
}

if(contneg != 0 )
{
	promedioneg= acumuladorneg / contneg;
}

diferencia= acumuladorpos-acumuladorneg;

document.write("1-Suma de los negativos: " + acumuladorneg + "<BR>");
document.write("2-Suma de los positivos: " + acumuladorpos + "<BR>");
document.write("3-Cantidad de positivos: " + contpos + "<BR>");
document.write("4-Cantidad de negativos: " + contneg + "<BR>");
document.write("5-Cantidad de ceros: " + contcero+ "<BR>");
document.write("6-Cantidad de números pares: " + contpares + "<BR>");
document.write("7-Promedio de positivos: " + promediopos + "<BR>");
document.write("8-Promedios de negativos: " + promedioneg + "<BR>");
document.write("9-Diferencia entre positivos y negativos: " + diferencia + "<BR>");

}//FIN DE LA FUNCIÓN