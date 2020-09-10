"use strict"
//Una calculadora que pide dos numeros por pantalla
//si metremos mal numero que no lo vulva a pedir
//en el cuerpo de la pagina,  en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir esas dos sifras

var numero1=parseInt(prompt("ingrese el numero 1: ",0))
var numero2=parseInt(prompt("ingrese el numero 2: ",0))

while(numero1<0 || numero2<0 || isNaN(numero1,numero2)){
    numero1=parseInt(prompt("ingrese el numero 1: ",0))
    numero2=parseInt(prompt("ingrese el numero 2: ",0))
}

var suma= numero1+numero2;
var resta= numero1+numero2;
var multiplicar= numero1+numero2;
var dividir= numero1/numero2;
// imprime

var resultado= "La suma es: "+suma+"</br>"+
                "La resta es "+resta+"<br/>"+
                "La multiplicacion es "+multiplicar+"<br/>"+
                "la division es "+dividir+"<br/>"
document.write(resultado);
console.log(resultado);
alert(resultado);