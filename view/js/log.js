
function reloj() {
var fecha=new Date('January 13, 2020 04:00:00');
    var hoy=new Date(); var h=hoy.getHours(); var m=hoy.getMinutes(); var s=hoy.getSeconds();
var z= hoy.getDate() ; var day= fecha.getDay()-z; var a =fecha.getHours()-h; var b = fecha.getMinutes()-m; var c =fecha.getSeconds()-s;

    b = actualizarHora(b);    c = actualizarHora(c);

    document.getElementById('displayReloj').innerHTML =day+" "+a+":"+b+":"+c;

    var t = setTimeout(function(){reloj()},500);

}

 

function actualizarHora(i) {

    if (i<10) {i = "0" + i};  // Añadir el cero en números menores de 10

    return i;

}
