"use strict"

//Eventos del ratón

window.addEventListener('load', ()=>{

    function cambiarColor(){
        console.log("me has dado click")

        var bg= boton.style.background;
        boton.style.padding= "10px";
        boton.style.border= "1px solid #ccc"
        if(bg == "green"){
            boton.style.background = "red";
            
        }else{
            boton.style.background = "green";
        }
        return true;
            
    }
    var boton = document.querySelector("#boton");

    //Click
    boton.addEventListener('click', function(){
        cambiarColor();
        this.style.border="5px solid white";
    })
    //Mouse over
    boton.addEventListener('mouseover',function(){
        boton.style.background="#ccc";
    })
    //Mouse out

    boton.addEventListener('mouseout',function(){
        boton.style.background="white";
    })

    //Focus
    var input= document.querySelector("#campo_nombre");

    input.addEventListener('focus',function(){
        console.log("(focus)estas dentro del input");
    })
    //Blur
    input.addEventListener('blur',function(){
        console.log("(blur) estas fuera del input");
    })
    //Keydown 
    input.addEventListener('keydown',function(event){
        console.log("Pulsando esta tecla",String.fromCharCode(event.keyCode));
        
    })
    // keypress
    input.addEventListener('keypress',function(event){
        console.log("Tecla presionada ",String.fromCharCode(event.keyCode));
    })
    //Keyup
    input.addEventListener('keyup',function(event){
        console.log("Tecla soltada",String.fromCharCode(event.keyCode));
    })
})// fin de load