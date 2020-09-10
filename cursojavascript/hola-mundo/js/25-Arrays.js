"use strict"
//Arrays, arreglos

var nombre= "santiago";
var nombres= ["santiago", "Aristizabal"];

var lenguajes= new Array ("PHP", "GO", "Js",52, true);

/*
var elemento= parseInt(prompt("Que elemento del array quieres ??",0));

if(elemento >=nombres.length){
    alert("Introduce el numero correcto: "+ nombres.length)
}else{
alert(nombres[elemento]); }
*/
document.write("<h1>Lenguajes de programacion de 2018</h1>")
document.write("<ul>");
/*
for(var i=0; i<=lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}

lenguajes.forEach((elemento,indice, array)=>{
    document.write("<li>"+indice+" - "+elemento+"</li>");
    console.log(array)
});
*/
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

//Busquedas

var precios= [10,20,50,80,12];
var busqueda= lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});

var busqueda= lenguajes.find(lenguaje=>lenguaje=="PHP");

var busqueda= lenguajes.findIndex(lenguaje => lenguaje=="PHP");

var busqueda= precios.some(precio => precio>=20);
console.log(busqueda);