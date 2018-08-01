/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas 
y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes 
solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos.
 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	// declaramos las variables
	var dato=0;
	var edad=0;
	var sexo;		
	var estadocivil=0;
	var sueldo=0;
	var legajo=0;
 	var nacionalidad;
	
	// pido primer dato (edad)
	dato = parseInt(prompt ("Ingrese su edad"));
	
	//valido la edad
	if(dato>=18 && dato<=90)
	{
		// seteo el dato validado a la variable edad
		edad=dato;
		
		// muestro la edad validada en su input
		document.getElementById("Edad").value = edad;
		
		// pido nuevo dato (sexo)
		dato = prompt ("Ingrese su sexo, “M” para masculino y “F” para femenino").toUpperCase();
		
		//Sexo, “M” para masculino y “F” para femenino	
		if(dato=="M" || dato=="F")
		{
			if(dato=="M")
			{				
				// seteo el dato validado a la variable sexo
				sexo="Masculino";
			}
			else
			{				
				// seteo el dato validado a la variable sexo
				sexo="Femenino";
			}
			
			// muestro la edad validada en su input
			document.getElementById("Sexo").value = sexo;
			
			// pido nuevo dato (estado civil)
			dato = parseInt(prompt ("Ingrese su estado civil 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));

			//Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos				
			if(dato>0 && dato<5)
			{
				// seteo el dato validado a la variable estadocivil dependiendo lo ingresado
				switch(dato)
				{
					case 1:	estadocivil="Soltero/a";
							break;
					case 2: estadocivil="Casado/a";
							break;
					case 3: estadocivil="Divorciado/a";
							break;
					case 4: estadocivil="Viudo/a";
							break;
				}
				// muestro la edad validada en su input
				document.getElementById("EstadoCivil").value = estadocivil;
				
				// pido nuevo dato (sueldo)
				dato = parseInt(prompt ("Ingrese su sueldo"));
				
				//Sueldo bruto, no menor a 8000.
				if(dato >= 8000)
				{
					// seteo el dato validado a la variable sueldo
					sueldo=dato;
					
					// muestro la edad validada en su input
					document.getElementById("Sueldo").value = sueldo;
					
					// pido nuevo dato (legajo)
					dato = parseInt(prompt ("Ingrese su legajo de 4 digitos"));
					
					//Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
					if(dato>1000 || dato<=9999)
					{
						// seteo el dato validado a la variable legajo
						legajo=dato;
						
						// muestro la edad validada en su input
						document.getElementById("Legajo").value = legajo;
						
						// pido nuevo dato (nacionalidad)
						dato = prompt ("Ingrese su nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados").toUpperCase();
						
						// Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
						if(dato=="A")
						{
							// seteo el dato validado a la variable nacionalidad
							nacionalidad="Argentino";
						}
						else if(dato=="E")
						{
							// seteo el dato validado a la variable nacionalidad
							nacionalidad="Extranjero";
						}
						else
						{
							// seteo el dato validado a la variable nacionalidad
							nacionalidad="Nacionalizado";
						}
						
						// muestro la edad validada en su input
						document.getElementById("Nacionalidad").value = nacionalidad;

					}

				}

			}

		}
		
	}

}//fin de la ejecucucion
