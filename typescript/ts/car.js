'use strict';
var Car = /** @class */ (function () {
    // Constructor
    function Car(color, model, brand, price) {
        this.color = color;
        this.model = model;
        this.brand = brand;
        this.price = price;
    }
    //Gets and sets
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.setColor = function (new_color) {
        this.color = new_color;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setModel = function (new_model) {
        this.model = new_model;
    };
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    Car.prototype.setBrand = function (new_brand) {
        this.brand = new_brand;
    };
    Car.prototype.getPrice = function () {
        return this.price;
    };
    Car.prototype.setPrice = function (new_price) {
        this.price = new_price;
    };
    return Car;
}());
var my_car = new Car("Blue", "Sentra", "Nissan", 10000);
