$(document).ready(function () {
    //MouseHover MouseOut
    var caja= $('#caja')
    /*
    var caja= $('#caja').mouseover(function () { 
        $(this).css("background","red");
    });
    $('#caja').mouseout(function () { 
        $(this).css("background","green")
    });
    */
    //HOVER
    function cambiaRojo() { 
        $(this).css("background","red");
    }
    function cambiaVerde() { 
        $(this).css("background","green");
    }
    caja.hover(cambiaRojo, cambiaVerde);
    
    //Click , Doble Click
    caja.click(function () { 
        $(this).css("background","blue")
               .css("color","white") 
    });
    caja.dblclick(function(){
        $(this).css("background","pink")
               .css("color","yellow") 
    });
    //Focus y blur
    var nombre  = $("#nombre")
    var datos= $("#datos")
    nombre.focus(function () { 
        $(this).css("border","2px solid green")
    });

    nombre.blur(function () { 
        $(this).css("border","2px solid #cccc")
        //$(this).val();//sacar información de la variable
        datos.text( $(this).val()).show();//muestra los datos del la clase style que esta oculta
    });
    //mouse down y Mouse up
    datos.mousedown(function () {
        $(this).css("border-color","gray")// presiono me coloca el cuadro en gris 
    });
    datos.mouseup(function () {
        $(this).css("border-color","black")// y cuando lo suelto me lo coloca en negro 
    });
    //MouseMove
    $(document).mousemove(function (e) { 
        console.log("En X "+e.clientX)
        console.log("en Y "+e.clientY)
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        $("#sigueme").css("left",e.clientX)
                     .css("top",e.clientY)   
    });
});