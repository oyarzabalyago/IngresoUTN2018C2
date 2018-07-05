function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById('edad').value;

if (parseInt(edad)>=18)
  {
    alert('Usted es mayor de edad!');

}//FIN DE LA FUNCIÓN
else
{
    alert('usted es menor de edad');    
}

}//FIN DE LA FUNCIÓN