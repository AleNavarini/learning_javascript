$(document).ready(function () {
    //Load
    //$(".my-div").load("https://reqres.in/"); // load your url

    //Get and Post
    $.get("https://reqres.in/api/users",{page: 3}, function (response) {
          console.log(response);  
        });
    $.get("https://reqres.in/api/users",{page: 3}, function (response) {
            response.data.forEach((element, index) => {
               console.log(element); 
            });  
          });
    
          let user = {
        "name": "Alejandro",
        "web": "google.com"
    };
    $.post("https://reqres.in/api/users", user,
        function (response) {
            console.log(response);
        });
        });

    //Ajax
    let user = {
        "name": "Alejandro",
        "web": "google.com"
    };
    $.ajax({
        
        type: "POST",
        url: "https://reqres.in/api/users",
        data: user,
        dataType: "json",
        success: function (response) {
            alert("User added succesfully");
        }
    });
