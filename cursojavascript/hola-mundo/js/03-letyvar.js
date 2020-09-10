//'use strict'
// PRUEBAS CON LET Y VAR
alert("hola");
// PRUEBA CON VAR
var numero = 40;
console.log(numero); //valor 40
if(true){
    var numero=50;
    console.log(numero);// valor 50
}
console.log(numero); //valor 50

// PRUEBA CON LET
var texto = "Curso Js";
console.log(texto);

if(true){
    let texto = "Curso laravel 5";
    console.log(texto);// Curso laravel 5
}

console.log(texto); // valor Js