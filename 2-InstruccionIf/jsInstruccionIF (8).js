function mostrar()
{
//declaro la variable    
var edad;
var estado;
var selected;

//capturo el valor del input y select
edad = document.getElementById('edad').value;
estado = document.getElementById("estadoCivil").value;

//veo si es mayor a 18
    if (parseInt(edad)>18)
        {
            if(estado=='Soltero')
            {
                alert('Es soltero y no es menor');
            }
        }


}//FIN DE LA FUNCIÓN