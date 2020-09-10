"use strict"

// BOM - Browser Object Model

function getBom(){
    console.log(screen.height)
    console.log(screen.width)
    console.log(window.location)
    //console.log(window.Height);
    //console.log(window.Width);
}
// funcion que redirige a una url
function redirect(url){
    window.location.href = url;
}
// abre ventaja con una nueva url
function abrirVentana(url){
    window.open(url,"","width=400, height=300 ");

}
getBom();
