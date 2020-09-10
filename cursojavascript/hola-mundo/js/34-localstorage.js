"use strict"

//LOCAL STORAGE

//comprobar disponibilidad de localstorage
if(typeof(Storage)!=='undefined'){
    console.log("esta disponible")
}else{
    console.log("no esta disponible"
    )
}

//Guardar datos en el localstorage
localStorage.setItem("titulo","Santiago esta aprendiendo");
//Recuperar elemento y meterlo en pagina web
console.log(localStorage.getItem("titulo"))
document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");

//Guardar objeto en localStorage
var usuario={
    nombre:"santiago",
    Apellido:"aristizabal",
    edad:23
}
//JSON String
localStorage.setItem("usuario", JSON.stringify(usuario))
//Recuperar objeto
var recuperar_objeto=JSON.parse(localStorage.getItem("usuario"))
console.log(recuperar_objeto)
document.querySelector("#datos").append("  -  "+recuperar_objeto.nombre+ "   -   "+ recuperar_objeto.Apellido)
//borrar un Key en el localStorage
localStorage.removeItem("usuario")