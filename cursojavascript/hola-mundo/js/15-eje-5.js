"use strict"
/* mostrar todos lo numeros divisores de un numero introducce en prompt*/

var numero=parseInt(prompt("introduce el numero para encontrar sus divisores",1));
while(numero<0 || isNaN(numero)){
    numero=parseInt(prompt("introduce el numero para encontrar sus divisores: ",1))
}

for(var i=1; i<=numero; i++){
    if(numero%i==0){
        console.log("Divisor: "+i);
        document.write("divisor: "+i+"<br/>");
    }
}