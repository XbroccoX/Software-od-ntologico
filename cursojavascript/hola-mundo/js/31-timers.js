"use strict"

window.addEventListener('load',()=>{
    //Timers
    function intervalo(){
    var tiempo= setInterval(()=>{
        console.log("Set interval ejecutado");
        var encabezado= document.querySelector("h1")
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize="20px";
        }else{
            encabezado.style.fontSize="50px";
        }
        },1000);
        return tiempo;
    }   

    var tiempo= intervalo();
    var stop= document.querySelector("#stop");
    stop.addEventListener('click', ()=>{
        clearInterval(tiempo);
        alert("has parado el intervalo en el bucle");
    })
    var start= document.querySelector("#start");
    start.addEventListener('click',function(){
        alert("has iniciado el intervalo en bucle");
        intervalo();
    });
});