"use strict"
/* Programa que nos pida dos numeros en los que diga cual es mayor, menor e iguales*/

var numero1= parseInt(prompt("introduce en primer numero: ",0));
var numero2= parseInt(prompt("introduce el segundo numero: ",0));

while(numero1<=0 || numero2<=0 || isNaN(numero1,numero2)){
    numero1= parseInt(prompt("introduce en primer numero: ",0));
    numero2= parseInt(prompt("introduce el segundo numero: ",0));
}

if(numero1==numero2){
    alert("los numero son iguales");
}else if(numero1 > numero2){
    alert("El numero mayor es: "+ numero1);
    alert("El numero menor es: "+ numero2);
}else{
    alert("El numero mayor es: "+ numero2);
    alert("El numero menor es: "+ numero1);
}
    

