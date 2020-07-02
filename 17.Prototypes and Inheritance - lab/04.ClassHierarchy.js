function result() {

    class Figure {
        units = {
            m: 0.01,
            mm: 10,
            cm: 1
        }

        defaultUnit;
        constructor(unit = 'cm') {
            this.defaultUnit = unit;
        };

        calcUnit(x) { return x * this.units[this.defaultUnit] }
        changeUnits(unit) { this.defaultUnit = unit; }
        get area() { return NaN }
        toString() { return `Figures units: ${this.defaultUnit} Area: ${this.area}` }

    };
    class Circle extends Figure {
        constructor(radius, ...rest) {
            super(...rest);
            this.radius = radius;
        };
        get r(){return this.calcUnit(this.radius)}
        get area() { return Math.PI * this.r * this.r }
        toString() { return super.toString() + ` - radius: ${this.r}` }
    };
    class Rectangle extends Figure {
        constructor(width, height, ...rest) {
            super(...rest);
            this.width = width;
            this.height = height;
        };

        get w(){return this.calcUnit(this.width) }
        get h(){return this.calcUnit(this.height)}
       get area() { return this.w * this.h;}
        toString() {
            return super.toString() + ` - width: ${this.w}, height: ${this.h}`
        }
    };


    return {
        Figure,
        Circle,
        Rectangle
    }
}
let classes = result();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area) //78.53981633974483, "1";
console.log(c.toString()) //"Figures units: cm Area: 78.53981633974483 - radius: 5", "2");
c.changeUnits('mm');
console.log(c.toString()) //"Figures units: mm Area: 78.53981633974483 - radius: 5", "2");

let r = new Rectangle(3, 4, 'mm');
console.log(r.area) //1200, "3");
console.log(r.toString()) //"Figures units: mm Area: 1200 - width: 30, height: 40", "4");
console.log(r.changeUnits('cm'));
console.log(r.area) //12, "5");
console.log(r.toString()) //"Figures units: cm Area: 12 - width: 3, height: 4", "5");

console.log(c.changeUnits('mm'))
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50