function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById('edad').value;

if (parseInt(edad)>=13 && parseInt(edad)<=17)
    {
       alert('usted es un adolescente');    
    }
}