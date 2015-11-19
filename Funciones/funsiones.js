function cargando()
{
    setTimeout(function()
    {
        document.getElementById('cargando').style.transition=".5s all";
        document.getElementById('cargando').style.marginLeft="-100%";
        
        document.getElementById('lblCargando').style.transition=".5s all";
        document.getElementById('lblCargando').style.marginLeft="-100%";
        
        setTimeout(function()
        {
            document.getElementById('registroElementos').style.transition=".5s all";
            document.getElementById('registroElementos').style.visibility="visible";
            document.getElementById('registroElementos').style.opacity="1";
        },200)
    },800);
}

function registro()
{
    nombre = document.getElementById('Rnombre').value;
    email = document.getElementById('Remail').value;
    contrasena = document.getElementById('Rcontrasena').value;
    Ccontrasena = document.getElementById("RCcontrasena").value;
    
    if(nombre != "")
    {
        if (email != "")
        {
            if (contrasena != "")
            {
                if (contrasena == Ccontrasena)
                {
                    localStorage.setItem('nombre',nombre);
                    localStorage.setItem('email',email);
                    localStorage.setItem('contrasena',contrasena);
                    
                    window.location.assign('Cuerpo/InicioSesion.html');
                }
                else
                {
                    alert('Escribe contraseñas identicas :(');
                }
            }
            else
            {
                alert('Escribe tu contrasena :|');
            }
        }
        else
        {
            alert('Escribe tu correo :)');
        }
    }
    else
    {
        alert('Primero escribe un nombre :D');
    }
}