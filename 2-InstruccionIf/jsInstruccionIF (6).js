function mostrar()
{
//declaro la variable    
var edad;

//capturo el valor del input
edad = document.getElementById('edad').value;

//veo si es menor a 13
    if (parseInt(edad)<13)
        {
            alert('usted es un niño');
        }

// veo si es mayor a 18
    if (parseInt(edad)>=18)
        {
            alert('usted es mayor de edad');    
        } 

// veo si esta entre 13 y 17
    if (parseInt(edad)>=13)
    {
        if (parseInt(edad)<=17)
            {
                alert('usted es un adolescente');    
            }


    }

}//FIN DE LA FUNCIÓN