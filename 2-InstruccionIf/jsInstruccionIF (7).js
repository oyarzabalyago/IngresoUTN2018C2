function mostrar()
{
//declaro la variable    
var edad;
var estado;
var selected;

//capturo el valor del input y select
edad = document.getElementById('edad').value;
estado = document.getElementById("estadoCivil").value;

//veo si es menor a 13
    if (parseInt(edad)<18)
        {
            if(estado=='Soltero')
            {
                alert('Es muy pequeño para NO ser soltero');
            }
        }


}//FIN DE LA FUNCIÓN