function mostrar()
{
/*
Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.
*/


var letra;
var numero;
var contPares = 0;
var contImpares = 0;
var contadorCeros = 0;
var acumPos = 0;
var acumNeg = 0;
var letraMax;
var letraMin;
var numeroMax;
var numeroMin;
var respuesta;
var flag = 0;
var contPositivos = 0;
var promedioPositivos;


do
{
    numero = parseInt(prompt("Ingrese un numero entre -100 y 100: "));

    while( numero < -100 || numero >100 || isNaN(numero))
    {   
        numero = parseInt(prompt("Error. Reingrese un numero entre -100 y 100: ")); 
    }

    letra = prompt("Ingrese una letra: ");

    if(numero % 2 == 0)
    {
        contPares++;
    }
    else
    {
        contImpares++;
    }

    if( numero > 0)
    {
        acumPos = acumPos + numero;
        contPositivos++;
    }
    else if(numero < 0)
    {
        acumNeg = acumNeg + numero;
    }
    else
    {
        contadorCeros++;
    }





}while 












}
