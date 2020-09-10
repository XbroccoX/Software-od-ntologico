"use strict"
//CONDICIONALES
//Instrucciones que permiten comparar algo 

var edad= 18;
var nombre= "David Suarez";

if(edad >= 18){
    console.log(nombre);
}else if(edad >4){
    console.log("es menor de edad:"+ nombre);
}

/*if(edad1 > edad2){
    console.log("edad 1 es mayor que edad2");
}else{
    console.log("la edad1 es inferior");
}*/
/* OPERADORES LOGICOS
    AND: &&
    OR:||
    NEGACION: !  
*/
var year= 2018;
if(year != 2016 ){
    console.log("el año no es 2016");
}

if(year>= 2000 && year<2020 ){
    console.log("estamos en la era actual");
}
