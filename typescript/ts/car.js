'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decorator
function stampi(logo) {
    return function (target) {
        target.prototype.stampation = function () {
            console.log("Car is stamped with" + logo);
        };
    };
}
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
    Car = __decorate([
        stampi('Lambo')
    ], Car);
    return Car;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Truck.prototype.getheight = function () {
        return this.height;
    };
    Truck.prototype.setheight = function (new_height) {
        this.height = new_height;
    };
    return Truck;
}(Car));
var my_car = new Car("Blue", "Sentra", "Nissan", 10000);
