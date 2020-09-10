"use strict"
//Notacion de objetos de javasript
var pelicula={
    titulo: "Batman vs Superman",
    year: 2017,
    pais:"Estados unidos",
}

var array_peliculas=[
    {titulo:"La verdad duele", year:2016, pais:"Francia"},
    pelicula
]
var index;
var caja_peliculas=document.querySelector("#peliculas")
for(index in array_peliculas ){
    var p=document.createElement("p");
    p.append(array_peliculas[index].titulo+"-"+array_peliculas[index].year);
    caja_peliculas.append(p);
}
console.log(pelicula)
console.log(array_peliculas)
