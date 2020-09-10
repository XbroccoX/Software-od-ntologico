"use strict"
//FUNCIONES
// Una función es una agrupacion reutilizable de un conjunto de instrucciones


function porConsola(numero1,numero2){
    console.log("Suma:"+ numero1+numero2);
    console.log("Resta:"+ (numero1-numero2));
    console.log("Multiplicacion:"+ numero1*numero2);
    console.log("Division:"+ numero1/numero2);
    console.log(mostrar);
    console.log("\n")
}
function porPantalla(numero1,numero2){
    document.write("Suma:"+ numero1+numero2+"<br/>");
    document.write("Resta:"+ (numero1-numero2)+"<br/>");
    document.write("Multiplicacion:"+ numero1*numero2+"<br/>");
    document.write("Division:"+ numero1/numero2+"<br/>");
    document.write(mostrar+"<br/>");
    document.write("<br/>")
}
function calculadora(numero1, numero2, mostrar= false) {

    if(mostrar == false){
        porConsola(numero1,numero2);
    }else{
        porPantalla(numero1,numero2);   
    }
}
//Invocar o llamar a la funcion

calculadora(1,2,true);
calculadora()
/*
for(var i=1; i<= 10; i++){
    calculadora(i,i+1);
    console.log(i);
}
*/
