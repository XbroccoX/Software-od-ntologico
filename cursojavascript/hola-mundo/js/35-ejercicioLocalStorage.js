"use strict"
//Traer formulario
var formulario= document.querySelector("#formpeliculas")

formulario.addEventListener('submit', function(){
    console.log("entra")
    var titulo= document.querySelector("#addpelicula").value;
    if (titulo.length>=1) {
        localStorage.setItem(titulo,titulo)
    }
});
var ul= document.querySelector("#peliculas-list")
for( var i in localStorage){
    if (typeof localStorage[i] == 'string') {
        var li= document.createElement("li");
        li.append(localStorage[i])
        ul.append(li)
    }
}
// Borra un objeto de la lista
var formularioB= document.querySelector("#Bformpeliculas")
formularioB.addEventListener('submit', function(){
    console.log("entra")
    var titulo= document.querySelector("#Bpelicula").value;
    if (titulo.length>=1) {
        localStorage.removeItem(titulo,titulo)
    }
});