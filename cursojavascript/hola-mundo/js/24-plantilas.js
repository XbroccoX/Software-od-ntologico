"use strict"

//Plantillas de texto

var nombre= prompt("Mete tu nombre");
var apellidos= prompt("METE TYUS APELLIDOS")

//var texto= "mi nombre es: "+ nombre+"<br/> mi apellido es: "+apellidos;
var texto= `
    <h1> hola que tal </h1>
    <h3> Mi nombre es: ${nombre} </h3>
    <h3> Mi Apellido es: ${apellidos} </h3>
`;
document.write(texto);
