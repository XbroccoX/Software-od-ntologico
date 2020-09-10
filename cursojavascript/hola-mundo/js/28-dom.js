"use strict"

// DOM- Document object model

function cambiaColor(color){
    caja.style.background= color;
}
// Conseguir elementos con un Id concreto 
//var caja= document.getElementById("micaja");

var caja = document.querySelector("#micaja");
caja.innerHTML = "se puede cambiar el texto";
caja.style.background= "red";
caja.style.padding= "20px";
caja.style.color= "white";
caja.className= "hola";


// Conseguir elemento por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');


var seccion= document.querySelector("#miseccion")
var hr= document.createElement("hr");
seccion.prepend(hr)

var valor
for(valor in todosLosDivs){
    if( typeof todosLosDivs[valor].textContent == 'string'){
    var parrafo= document.createElement("p");
    var texto= document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
    }
}
seccion.append(hr);

//Conseguir elemento por su clase

var divsRojos= document.getElementsByClassName("rojo");
var divsAmarillos= document.getElementsByClassName("amarillo");

var div;
//divs amarillos
for(div in divsAmarillos){
    if(divsAmarillos[div].className == "amarillo"){
        divsAmarillos[div].style.background= "yellow";
    }
    }
//divs rojos
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background= "red";
        divsRojos[div].style.color="white"   
    }
    }
// QuerySelector

var id =document.querySelector("#encabezado");
console.log(id);

var etiqueta =document.querySelector("div");
console.log(etiqueta);
