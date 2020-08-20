'use strict'
$(document).ready(function () {
    $(".element").draggable();

    //$(".element").resizable();

    //$(".selectable-list").selectable();
    // You can use either selectable or sortable
    $(".selectable-list").sortable({
        update: function(event, ui){
            console.log("there has been a change");
        }
    });
    // drop
    
    $('.drop-area').droppable({
        drop: function(){
           alert("Entered");
        }
    });

    $("#button-effects").click(function(e){
        $(".drop-area").toggle("slide"); // insert effect you want, explode, drop , etc

    })


    //tooltip
    $(document).tooltip(); // You must include a title in your html elements for this to work

    $("#button-effects").dialog();
    $("#calendar").datepicker();

    $("#tabs").tabs();

});