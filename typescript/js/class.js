'use strict'

let bike = {
    color: "Red",
    model: "BMX",
    switchColor: function(newColor){
        bike.color = newColor;
    }
};

console.log(bike);

bike.switchColor("Green");

console.log(bike);
