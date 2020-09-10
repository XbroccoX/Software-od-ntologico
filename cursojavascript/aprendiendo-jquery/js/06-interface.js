$(document).ready(function () {
    //Mover elemento por la pagina
    $(".elemento").draggable();

    //Redimensionar
    $(".elemento").resizable();
    //Seleccionar elementos
    //$(".lista-seleccionable ").selectable();
    $(".lista-seleccionable ").sortable({
        update: function(event,ui){
            console.log("se ha cambiado la list")   
        }
    });
    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop:function(){
            console.log("haz soltado algo dentro del area")
        }
    });
    //EFECTOS
    $("#mostrar").click(function () { 
        $(".caja-efectos").toggle("blind")
    });
    //tooltip
    $(document).tooltip();
    //Dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });
    //Datepicker    
    $("#calendario").datepicker();
    
});