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
	var datos;
	var edad=0;
	var sexo;		
	var estadocivil=0;
	var sueldo=0;
	var legajo=0;
 	var nacionalidad;
	
	// capturamos los datos
	edad 		= parseInt(document.getElementById("Edad").value);
	sexo 		= document.getElementById("Sexo").value;
	estadocivil = parseInt(document.getElementById("EstadoCivil").value);
	sueldo		= parseInt(document.getElementById("Sueldo").value);
	legajo 		= parseInt(document.getElementById("Legajo").value);
	nacionalidad= document.getElementById("Nacionalidad").value;
	
	
	
	dato = parseInt(prompt ("Ingrese su edad"));
	
	//valido la edad
	if(dato=>18 && dato<=90)
	{
		edad=dato;
		dato = prompt ("Ingrese su sexo M o F");
		
		if(dato=="M" || dato=="F")
		{
			sexo=dato;
			dato = parseInt(prompt ("Ingrese su estado civil del 1 al 4"));
		
			if(dato>0 && dato<5)
			{
				estadocivil=dato;
				dato = parseInt(prompt ("Ingrese su sueldo"));
				
				if(dato >= 8000)
				{
					sueldo=dato;
					dato = parseInt(prompt ("Ingrese su legajo"));
					
					if(dato>1000 || dato<=9999)
					{
						legajo=dato;
						dato = parseInt(prompt ("Ingrese su nacionalidad A, E, o N"));
						
						if(dato=="A" || dato=="E" || dato=="N")
						{
							nacionalidad=dato;
						
							parseInt(document.getElementById("Edad").value)			= edad 		
							document.getElementById("Sexo").value                   = sexo 		
							parseInt(document.getElementById("EstadoCivil").value)  = estadocivil 
						    parseInt(document.getElementById("Sueldo").value)       = sueldo		
						    parseInt(document.getElementById("Legajo").value)       = legajo 		
							document.getElementById("Nacionalidad").value           = nacionalidad
							
						}						
					}
					
				}				
				
			}			
			
		}
		
	}
	
}
