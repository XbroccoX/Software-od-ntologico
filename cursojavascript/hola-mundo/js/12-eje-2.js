"use strict"
/* EL programa debe utilizar un  bucle mostrar la media y la suma de dos resultados
introducidos por el usurio, hasta que los intoducir un numeor negativo, ahí mostrar el resultado
*/

var suma =0;
var contador=0;

do{
    var numero=parseInt(prompt("introduce numero ahasta que sea negativo"));
    if(isNaN(numero)){
        numero=0;
    }else if(numero>0){
        suma+= numero;
        contador++;
        


    }
}while(numero>=0)

alert("la suma de todos los numeros es: "+suma);
var media= suma/contador;
alert("la media de todos los numeros es:"+media);