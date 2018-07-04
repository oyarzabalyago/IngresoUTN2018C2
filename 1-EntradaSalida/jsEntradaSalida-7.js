/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    var total;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    total = parseInt(num1) + parseInt(num2);

    alert('La suma es: '+ total);
}

function restar()
{
    var num1;
    var num2;
    var total;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    total = parseInt(num1) - parseInt(num2);

    alert('La resta es: '+ total);
}

function multiplicar()
{ 
    var num1;
    var num2;
    var total;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    total = parseInt(num1) * parseInt(num2);

    alert('El producto es: '+ total);
}

function dividir()
{
    var num1;
    var num2;
    var total;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    total = parseInt(num1) / parseInt(num2);

    alert('la division es: '+ total);
}

