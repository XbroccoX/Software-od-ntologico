"use strict"
/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/
var numero1=parseInt(prompt("ingrese el numero 1: ",0))
var numero2=parseInt(prompt("ingrese el numero 2: ",0))

while(numero1<0 || numero2<0 || isNaN(numero1,numero2)){
    numero1=parseInt(prompt("ingrese el numero 1: ",0))
    numero2=parseInt(prompt("ingrese el numero 2: ",0))
}
while(numero1<numero2){
    numero1++;
    if(numero1%2!=0){ 
        console.log("El numero"+numero1+"es impar");        
    }
}