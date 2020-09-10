"use strict"
//FUNCIONES ANONIMAS
//Es una funcion que no tiene nombre

function sumame(numero1, numero2,sumaYmuestra, sumaPorDos){
    var sumar= numero1+numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
}

sumame(5,7,dato =>{
    console.log("La suma es: "+dato);
},
dato =>{
    console.log("la suma por dos es: "+ dato*2);
});