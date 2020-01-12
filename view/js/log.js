
function reloj() {
    var hoy=new Date(); var h=hoy.getHours(); var m=hoy.getMinutes(); var s=hoy.getSeconds();
var z= hoy.getDate() ; var day= 19-z; var a =23-h; var b = 59-m; var c =59-s;

    b = actualizarHora(b);    c = actualizarHora(c);

    document.getElementById('displayReloj').innerHTML =day+" "+a+":"+b+":"+c;

    var t = setTimeout(function(){reloj()},500);

}

 

function actualizarHora(i) {

    if (i<10) {i = "0" + i};  // Añadir el cero en números menores de 10

    return i;

}
