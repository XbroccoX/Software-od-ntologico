$(document).ready(function () {
    reloadLinks();
    $("#add_button").click(function(){
        $("#list").prepend('<li><a href="'+$("#add_link").val()+'"></a></li>')//before:añadir fuera de la lista/after:añadir al interior de la lista/append:añadir de ultimo en la lista
        $("#add_link").val('')
        reloadLinks();
    });

});
function reloadLinks(){
    $('a').each( function (index) { 
        var that= $(this);
        var enlace=that.attr("href");
        that.attr("target","_blank");
        that.text(enlace);
    });
}