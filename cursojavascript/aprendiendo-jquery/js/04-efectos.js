$(document).ready(function () {
    var caja= $("#caja");
    $("#mostrar").hide()
    $("#mostrar").click(function () { 
        $("#mostrar").hide();
        $("#ocultar").show();
        $("#caja").show('fast');//'fast' o 'normal': tipo de degrado o efecto que se le hace a la hora de ser ocultado
    });
    $("#ocultar").click(function () { 
        $("#ocultar").hide();
        $("#mostrar").show();
        $("#caja").slideUp('slow', function(){
            console.log('cartel ocultado')
        })
        
    });

    $("#todoenuno").click(function (e) { 
        $("#caja").toggle('fast');
    });

    $("#animar").click(function () { 
        caja.animate({
                        marginLeft: '500px',
                        fontSize: '40px',
                        height: '110px'
                    }, 'slow')
            .animate({
                    borderRadius:'900px',
                    marginTop: '80px'
                    },'slow')
            .animate({
                borderRadius: '0px',
                marginLeft:'0px'
            },'slow')
            .animate({
                borderRadius: '100px',
                marginLeft:'0px'
            },'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow')
    });
});