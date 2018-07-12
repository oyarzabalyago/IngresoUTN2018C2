function mostrar()
{
// declaro las variables a usar    
var dato1;
var dato2;

// capturo los valores ingresados
   dato1 = parseInt(prompt ("Ingrese el largo del rectangulo"));
   dato2 = parseInt(prompt ("Ingrese el ancho del rectangulo"));

//comparo los numeros ingresados
       alert("El perimetro es: "+ ((dato1 + dato2)*2));

}
