"use strict"

// Transformacion de textos 

var numero= 444;
var texto1= "Bienvenido al curso de Victor lopez curso";
var texto2= "Es muy bueno el curso";

var dato= numero.toString();
    dato= texto1.toUpperCase();// mayusculas
    dato=texto1.toLowerCase; //minusculas 

console.log(dato);

//Calcular longitud

var nombre = "Victor Robles";
var nombre = ["hola","me llamo"];
console.log(nombre.length);

//concatenar 

var textTotal= texto1+texto2
console.log(textTotal);

var busqueda = texto1.indexOf("curso");
var busqueda = texto1.match(/curso/gi); // genera un array de varias consultas de la variable
var busqueda = texto1.substr(14,5);// a partir del caracter 14 sacar las porximo 5 caracteres
var busqueda= texto1.charAt(44); //saca la letra numero 44
var busqueda= texto1.startsWith("Bienvenido");// muestra True y false si se encuentra la palabra al principio
var busqueda= texto1.endsWith("Victor");//muestra True y false si se encuentra la palabra al final
var busqueda= texto1.includes("JavaScirpt");// si letra existe o no existe

console.log(busqueda);

// reemplazar, cortar entre otros

var busqueda= texto1.replace("curso","la clase");
var busqueda= texto1.slice(14,22);
var busqueda= texto1.split(" ");// separar en un array don de aparezcca esopacio
var busqueda= texto1.trim();// quitar espacios que hay por delante y por detras

console.log(busqueda);



