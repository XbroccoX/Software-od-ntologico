"use strict"
/*
1. Pida 6 numeros por pantalla y los meta en un array.
2. Tiene que mostrar el array entero/ todos sus elementos en el cuerpo de la pagina y en la consola.
3. Ordenar el array y mostrarlo.
4. invertir su orden y mostrarlo.
5. Mostrar cuantos elementos tiene el array.
6. Busqueda de un valor intoducido por el usuario, que nos diga si lo encuentra y su indice. 
*/

function mostrarArray(elementos, textoCustom ="  "){
    document.write("<h1> Contenido del Array"+textoCustom+"</h1>");
    
    elementos.forEach((elementos,index)=>{
        document.write("<ul>");
        document.write("<li>"+elementos+"</li>");
        document.write("</ul>");
        console.log(elementos+"\n");
    });
}
// Pida 6 numeros en pantalla y metalos en un Array

var numeros=[];
for(var  i=0; i <= 5; i++ ){
    numeros.push(parseInt(prompt("Inserte el numero "+i+": ",0)));
}

// mostrar Array en cuerpo  y consola
mostrarArray(numeros);
console.log(numeros);

// Ordenar y mostrar
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros,"ordenados");

// invertir su nombre y mostrarlos
numeros.reverse();
mostrarArray(numeros,"invertidos");

// Mostrar cuantos numeros tiene el array 
document.write("<h3> los numeros que tiene el array son: "+numeros.length +"</h3>");
document.write("Los numeros que tiene el array son: "+ numeros.length);

// Busqueda
var Busqueda = parseInt(prompt("Escribe un valor que deseas encontrar en el array",0));
var encontrado= numeros.findIndex(numero => numero==Busqueda);
if(encontrado == -1){
    document.write("<hr/><h1>NO SE ENCONTRÓ</h1>");
    document.write("<hr/><h1> posición de la búsqueda"+encontrado+1+"</h1>");
}else{
    document.write("<hr/><h1>SE ENCONTRÓ</h1>");
    document.write("<hr/><h1> posición de la búsqueda"+encontrado+1+"</h1>");
}