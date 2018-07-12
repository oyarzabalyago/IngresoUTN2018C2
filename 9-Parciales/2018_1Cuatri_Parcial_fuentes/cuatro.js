function mostrar()
{
// declaro las variables a usar    
var dato1;
var dato2;
var resultado;

// capturo los valores ingresados
   dato1 = parseInt(prompt ("Ingrese un Numero por favor"));
   dato2 = parseInt(prompt ("Ingrese otro por favor"));

//comparo los numeros ingresados
   if(dato1==dato2)
   {
       alert(dato1+''+dato2);
   }
   else if(dato1>dato2)
   {
       resultado = dato1 - dato2;
       alert('El resultado es: '+ parseInt(resultado));
   }
   else
   {
        resultado = dato1 + dato2;
        if(parseInt(resultado)>10)
        {
            alert("La suma es "+ resultado +" y supero el 10");
        }
        else
        {
            alert("La suma es "+ resultado);
        }
   }   
}
