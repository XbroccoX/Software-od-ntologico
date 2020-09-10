"use strict"
//Parametros REST Y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_frutas ){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log(resto_frutas);
}

//listadoFrutas("Naranja", "Manzana", "Zandia","Pera", "Melon", "Coco");
var frut = ["Naranja", "Manzana"];
listadoFrutas(frut,"Zandia","Pera", "Melon", "Coco");
//SPREAD
var frut = ["Naranja", "Manzana"];
listadoFrutas(...frut,"Zandia","Pera", "Melon", "Coco");