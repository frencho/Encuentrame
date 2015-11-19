function cargando()
{
    var contador = 0
    contador = localStorage.setItem('contador',contador);
    
    usuarioAlmacenado = localStorage.getItem('nombre');
    
    correoAlmacenado = localStorage.getItem('email');
    contrasenaAlmacenada = localStorage.getItem('contrasena');
    
    
    document.getElementById("usuarioDiv").innerHTML=usuarioAlmacenado;
}
function iniSesion()
{
    correo = document.getElementById('Iemail').value;
    contrasena = document.getElementById('Icontrasena').value;
    
    if (correo==correoAlmacenado)
    {
        if(contrasena==contrasenaAlmacenada)
        {
            alert('exito');
            window.location.assign('../Cuerpo/Principal.html');
        }
        else
        {
            alert('Lo siento tu contraseña no coincide D:')
        }
    }
    else
    {
        alert('Lo siento tu correo no concuerda con el almacenado');
    }
}