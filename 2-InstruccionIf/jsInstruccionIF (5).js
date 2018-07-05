function mostrar()
{
//declaro la variable    
var edad;

//capturo el valor del input
edad = document.getElementById('edad').value;

//veo si es menor a 13
    if (parseInt(edad)<13)
        {
            alert('usted no es un adolescente');
        }

// veo si es mayor a 17
    if (parseInt(edad)>17)
        {
            alert('usted no es un adolescente');    
        }

}//FIN DE LA FUNCIÓN