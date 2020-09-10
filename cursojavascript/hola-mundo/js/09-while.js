"use strict"
//bucle while

var year= 2018;

while(year < 2051){
    console.log("estamos en el año: "+ year);

    if(year=2000){
        break;
    }
    year ++;
}

//DO WHILE

var years = 30;

do{
    alert("mientras que years sea mayor que 25 se ejecuta");
    years--;
}while(years > 25 )