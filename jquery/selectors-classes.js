// $ == jQuery

$(document).ready(function()
{
    let sp = document.createElement('span');
    sp.innerHTML = "JQuery Loaded, ready to roll <br>";
    let my_div = document.querySelector("#div_id_test");
    my_div.prepend(sp);
    
    
    // Selectors
    // Faster than querySelector line

    $("*").css("margin", "0")
            .css('font-family', 'arial');
    let id_div_test = $("#div_id_test");
    id_div_test.css('background', 'red');//('property', 'value')

    let class_div_test = $(".div_class_test").css('background', 'green')
                                            .css('padding', '2em')
                                            .css('color', 'white');

    class_div_test.eq(1); // gets 1 element from the class elements

   // class_div_test.click(() => class_div_test.css("border", "5px solid black"))
$(".div_class_test").click(function (e) { 
    $(this).css("border", "5px solid yellow");
    console.log(this); 
    //addClass("my-class")
    // hasClass()               For adding and removing CSS classes
    // removeClass()
    // css("cursor", "pointer") for clickable objects
});
$("#id");
$(".class");
$('tag');
$("[title = 'some-value']"); // Selector for attribute value
$("#id, .myclass"); //multiple selectors, separated by ,

$(".myclass").find(".another-class");
$(".myclass .another-class");

$(".myclass .another-class").parent().find(); // parent goes to the previous class from various selectors
 
});
