"use strict"
/* un programa que nos diga si un numero si es par o impar
    1. Ventana prompt
    2. si no es valido que nos pida de nuevo el numero
*/
var numero= parseInt(prompt("Introduce un numero",0));
while(numero<0 || isNaN(numero)){
    numero= parseInt(prompt("Introduce un numero",0));
}

if(numero%2==0){
    console.log("el numero "+numero+" es par");
}else if(numero%2!=0){
    console.log("el numero "+numero+" es impar");
}