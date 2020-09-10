"use strict"

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas= [ "La verdad duele", "La vida es bella", "Gran torino"];

peliculas.sort();
peliculas.reverse();

console.log(peliculas);

var cine= [categorias, peliculas];
/*
console.log(cine[0][1]);
console.log(cine[1][2])
*

 
do{
    var elemento= prompt(" Intruduce tu pelicula",undefined);
    peliculas.push(elemento);
}while(elemento != "ACABAR");
*/

var indice= peliculas.indexOf("Gran torino");
console.log(indice);

if (indice> -1){
    peliculas.splice(indice,1);
}

var guardar= peliculas.join();

var cadena = "texto1, texto2, texto3";
var cadena_Array= cadena.split(", ");

console.log(cadena_Array);
console.log(guardar);

//console.log(peliculas)
