/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var	nuevosueldo;

	sueldo = document.getElementById('sueldo').value;
	nuevosueldo = (parseInt(sueldo) * 0.10) + parseInt(sueldo);

	document.getElementById('resultado').value = nuevosueldo;
}
