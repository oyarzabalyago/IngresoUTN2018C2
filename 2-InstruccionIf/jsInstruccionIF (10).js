function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var aleatorio;

aleatorio = Math.round(Math.random()*10);

	if(aleatorio == 10 || aleatorio == 9)
	{
		alert("Excelente, la nota es: " + aleatorio);
	}
	else if (aleatorio > 4)
	{
		alert("Aprobo, la nota es: " + aleatorio);
	}
	else
	{
		alert("Vamos, la proxima se puede, la nota es: " + aleatorio);		
	}


}//FIN DE LA FUNCIÓN