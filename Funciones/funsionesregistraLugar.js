var lat = [];
var long = [];
var nombre = [];
var precio = [];
var calificacion = [];
var categoria = [];

function guardar()
{
    contador = localStorage.getItem('contador');
    lat = localStorage.getItem('lat');
    long = localStorage.getItem('long');
    nombre = document.getElementById('LugarNombre').value;
    total = document.getElementById('LugarPrecio').value;
    cal = document.getElementById('LugarCalificacion').value;
    cat = document.getElementById('LugarCategoria').value;
    
    if (document.getElementById('LugarNombre').value != "")
    {
        if (document.getElementById('LugarPrecio').value != "")
        {
            if (document.getElementById('LugarCalificacion').value != "")
            {
                if (document.getElementById('LugarCategoria').value != "")
                {
                    
                    localStorage.setItem('lat['+contador+']',lat);
                    localStorage.setItem('long['+contador+']',long);
                    localStorage.setItem('nombre['+contador+']',nombre);
                    localStorage.setItem('precio['+contador+']',total);
                    localStorage.setItem('calificacion['+contador+']',cal);
                    localStorage.setItem('categoria['+contador+']',cat);

                    lat[contador] = localStorage.getItem('lat['+contador+']');
                    long[contador] = localStorage.getItem('long['+contador+']');
                    contador++;
                    localStorage.setItem('contador',contador);
                    
                    document.getElementById('LugarNombre').value = "";
                    document.getElementById('LugarPrecio').value = "";
                    document.getElementById('LugarCalificacion').value = "";
                    document.getElementById('LugarCategoria').value = "";
                    
                    setTimeout(function ()
                    {
                        window.location.assign('../Cuerpo/Principal.html');
                    },200);
                } else
                {
                    alert('Introduce una categoria');
                }
            } else
            {
                alert('Introduce un precio');
            }
        } else
        {
            alert('Introduce un precio');
        }
    } else
    {
        alert('Introduce un nombre');
    }
}

function atras()
{
    document.getElementById('LugarNombre').value = "";
    document.getElementById('LugarPrecio').value = "";
    document.getElementById('LugarCalificacion').value = "";
    document.getElementById('LugarCategoria').value = "";
    
    setTimeout(function()
    {
        window.location.assign("../Cuerpo/Principal.html");
    },200);
}