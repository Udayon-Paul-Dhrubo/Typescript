"use strict";
class Shape {
    constructor(a) {
        this._area = a;
    }
    get area() {
        return this._area;
    }
}
class Circle extends Shape {
    constructor(a) {
        super(a);
    }
    get area() {
        return this._area * 2;
    }
}
const circle = new Circle(10);
console.log(circle.area);
