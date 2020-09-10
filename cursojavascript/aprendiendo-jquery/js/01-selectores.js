$(document).ready(function(){
    //SELECTOR ID
    $("#rojo").css("background","red")
              .css("color","white");
    
    $("#amarillo").css("background","yellow")
                  .css("color", "white")                    
    console.log(rojo)

    // Selectores de clases
    var miclase= $('.zebra').css("padding","5px")
    
    $(".sinborde").click(function () {
        console.log("click dado")
        $(this).addClass('zebra')
    })

    //Selectores de etiquetas
    var parrafos = $('p').css("cursor", "pointer")

    parrafos.click(function() {
        var thise= $(this)
        if (!thise.hasClass('grande')) {
            thise.addClass('grande');
        }else{
            thise.removeClass('grande')
        }

    })
    //SELECTORES DE ATRIBUTOS
    $('[title="Google"]').css("background","green");
    $('[title="Facebook"]').css("background","blue");
    //otros
    //$('p, a').addClass('margen-superior');
    var busqueda= $("#elemento2").parent().parent().find('.resaltado')
    console.log(busqueda)
})
