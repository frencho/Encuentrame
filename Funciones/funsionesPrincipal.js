function cargando()
{    
    navigator.geolocation.getCurrentPosition(localizacion);
    
    latitud = localStorage.getItem('lat');
    longuitud = localStorage.getItem('long');
        
    /*var latitud = 20.569305;
    var longuitud =-100.398657;*/
    
    boton1 = document.getElementById('btnArriba');
    alturaBoton1 = boton1.offsetHeight;
    boton1.style.width=alturaBoton1+"px";
    
    boton2 = document.getElementById('btnAbajo');
    alturaBoton2 = boton2.offsetHeight;
    boton2.style.widthi=alturaBoton2+"px;";
}

function localizacion(posicion)
{    
    lat = posicion.coords.latitude;
    long = posicion.coords.longitude;
    grados = posicion.coords.heading;
            
    localStorage.setItem('long', long);
    localStorage.setItem('lat', lat);
    
    document.getElementById('mapa').innerHTML="<img src='http://maps.google.com/maps/api/staticmap?center="+latitud+","+ longuitud+"&zoom=15&markers="+latitud+","+ longuitud+"&size=275x175'>";
}

function arribaBtn()
{
    setTimeout(function ()
    {
        window.location.assign('../Cuerpo/RegistrarLugar.html');
    },500);
}

function abajoBtn()
{
    setTimeout(function ()
    {
        window.location.assign('../Cuerpo/VerLugares.html');
    },500);
}