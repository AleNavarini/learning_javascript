'use strict'
// Interface

interface CarBase{
    getColor();
    setColor(new_color); // defines the functions that your class must have
}
class Car implements CarBase{ // The name of the class must be the same as the file
    
    // properties
    private color: string;
    private model: string;
    private brand: string;
    private price: number;


    //Gets and sets
    public getColor(){
        return this.color;
    }
    public setColor(new_color){
        this.color = new_color;
    }
    
    public getModel(){
        return this.model;
    }
    public setModel(new_model){
        this.model = new_model;
    }
    
    public getBrand(){
        return this.brand;
    }
    public setBrand(new_brand){
        this.brand = new_brand;
    }
    
    public getPrice(){
        return this.price;
    }
    public setPrice(new_price){
        this.price = new_price;
    }
    
    // Constructor
    constructor(color, model, brand, price){
        this.color = color;
        this.model = model;
        this.brand = brand;
        this.price = price;
    }
} 

class Truck extends Car{
     private height: number;
     
    public getheight(){
        return this.height;
    }
    public setheight(new_height){
        this.height = new_height;
    }
}


let my_car = new Car("Blue" , "Sentra", "Nissan" , 10000);
