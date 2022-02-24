//parent class
class Shape {
    constructor(name,sides) {
        this.name= name;
        this.sides= sides;
    }
    getshape() {
        return ("name: "+this.name+", "+"sides: "+this.sides);
    }
}
//child class
class Circle extends Shape {
    constructor(radius) {
        super('circle',1); //calling superclass constructor
        this.radius= radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius= value;
    }
    area() {
        return (3.14*this.radius*this.radius);
    }
}

let newShape= new Circle(22);
console.log("Shape info--> "+newShape.getshape());
console.log("Area of circle with radius "+newShape.radius+" is: "+newShape.area());

