"use strict"
// tabla de multiplicar de un numero introducido por pantalla
var numero= parseInt(prompt("ingrese numero de tabla de multiplicar",1));

//tabla de multiplicar con el numero dado
document.write("<h1> TABLA DE MULTIPLICAR </h1>");
for(var i=0; i<=100 ; i++){
    document.write(numero+"*"+i+"="+numero*i+"<br/>");
}
// tabla de multiplicar por numero
for(var i=0; i<=10 ; i++){
    document.write( "<h1> TABLA DE MULTIPLICAR del "+i+"</h1>")
    for (var j=0; j<=10; j++){
        document.write(i+"*"+j+"="+i*j+"<br/>");
    }
}
