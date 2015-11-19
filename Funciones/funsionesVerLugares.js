var cont

function volver()
{
    setTimeout(function()
    {
        window.location.assign("../Cuerpo/Principal.html");
    },200);
}

function cargando()
{
    contador = localStorage.getItem('contador');
    cont = contador - 1
    
    for(var i = 0; cont >= i; cont = cont-1)
    {
        nombre = localStorage.getItem('nombre['+cont+']');
        precio = localStorage.getItem('precio['+cont+']');
        calificacion = localStorage.getItem('calificacion['+cont+']');
        categoria = localStorage.getItem('categoria['+cont+']');
        lat = localStorage.getItem('lat['+cont+']');
        long = localStorage.getItem('long['+cont+']');
        
        document.getElementById('formulario').innerHTML+="<div id='lugar'>"+
                                                                                                        "<div id='encabezado'>"+nombre+"<button id='cerrar' onclick='cerrar()'>X</button></div>"+
                                                                                                        "<div id='cuerpo'><br>Total gastado: "+precio+"<br><br>Calificación: "+calificacion+"<br><br>Categoria: "+categoria+"<br><br>Latitud: "+lat+"<br><br>Longitud: "+long+" </div>"+
                                                                                                    "</div>";
    }
    
    
    /*nombre = localStorage.getItem('nombre');
    precio = localStorage.getItem('precio');
    calificacion  = localStorage.getItem('calificacion');
    categoria = localStorage.getItem('categoria');
    lat = localStorage.getItem('lat');
    long = localStorage.getItem('long');
    
    
    for (var i = 0;contador >= i;contador = contador - 1)
    {
        document.getElementById('formulario').innerHTML+="<div id='lugar'>"+
                                                                                                        "<div id='encabezado'>"+nombre[contador]+"</div>"+
                                                                                                        "<div id='cuerpo'>Cuerpo</div>"+
                                                                                                    "</div>";
    }     */                                                                                
}