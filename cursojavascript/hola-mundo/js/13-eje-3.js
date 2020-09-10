"use strict"
/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/ 

var numero1 = parseInt(prompt("introducir le numero uno: ",0 ));
var numero2 = parseInt(prompt("introducir le numero dos: ",0 ));
while(numero1<0  || isNaN(numero1,numero2)){
    numero1 = parseInt(prompt("introducir le numero uno: ",0 ));
    numero2 = parseInt(prompt("introducir le numero dos: ",0 ));
}
document.write("<h1> De "+numero1+"a"+numero2+"estan estos numeros</h1>");
for(var i=numero1; i <=numero2; i++ ){
    document.write(i+"<br/>");
}

