$(document).ready(function () {
    /*
    let event_box = $(".event-box");
    event_box.mouseover(function () { 
        $(this).css("background", "red");
    });
    event_box.mouseout(function () { 
        $(this).css("background", "white");
    });
    */
    // hover
    $(".event-box").hover(function () {
            $(this).css("background", "red");   
            
        }, function () {
            $(this).css("background", "green");
        }
    );
    //click
    $(".event-box").click(function (e) { 
        e.preventDefault();
        $(".event-box").show();    
    });
    // Double click
    $(".event-box").dblclick(function (e) { 
        e.preventDefault();
        $(".event-box").hide();
        
    });/*
    //focus
    $(".event-box").focus(function (e) { 
        e.preventDefault();
        
    });
    //blur
    $(".event-box").blur(function (e) { 
        e.preventDefault();
        
    });
    //mouse down
    $(selector).mousedown(function () { 
        
    });
    //mouse up
    $(selector).mouseup(function () { 
        
        
    });*/

    $(document).mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        console.log(e.clientX); // shows clients mouse x coordinate
        console.log(e.clientY); // shows clients mouse y coordinate
        let follow = $("#follow_the_leader");
        follow.css("left" , e.clientX);
        follow.css("top", e.clientY);

    });
    

});