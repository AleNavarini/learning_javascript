'use strict'
// Interface

interface CarBase{
    getColor();
    setColor(new_color); // defines the functions that your class must have
}


//decorator

function stampi(logo: string){
    return function(target: Function){
        target.prototype.stampation = function():void{
            console.log("Car is stamped with" + logo);
        }
    }
}
@stampi('Lambo')
class Car implements CarBase{ // The name of the class must be the same as the file
    
    // properties
    private color: string;
    private model: string;
    private brand: string;
    private price: number;


    //Gets and sets
    public getColor():string{
        return this.color;
    }
    public setColor(new_color:string){
        this.color = new_color;
    }
    
    public getModel():string{
        return this.model;
    }
    public setModel(new_model:string){
        this.model = new_model;
    }
    
    public getBrand():string{
        return this.brand;
    }
    public setBrand(new_brand:string){
        this.brand = new_brand;
    }
    
    public getPrice():number{
        return this.price;
    }
    public setPrice(new_price:number){
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
