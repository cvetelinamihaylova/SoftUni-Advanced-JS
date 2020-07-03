function solve() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3
        }
        classToExtend.prototype.isFast = function () {
            return (this.processorSpeed > (this.ram / 4)) ? true : false;
        }
        classToExtend.prototype.isRoomy = function () {
            return (this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)) ? true : false;
        }
    }
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return (this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer)
                ? true
                : false;
        }
        classToExtend.prototype.isClassy = function () {
            return (this.battery.expectedLife >= 3
                && (this.color === "Black" || this.color === "Silver")
                && this.weight < 3)
                ? true
                : false;
        }
    }
    return {
        computerQualityMixin,
        styleMixin
    }
}

class Manufacturable {
    constructor(manufacturer) {
        if (new.target === Manufacturable) {
            throw new Error('Cannot instantiate an abstract class.');
        }
        this.manufacturer = manufacturer;
    }
}

class Monitor extends Manufacturable {
    constructor(manufacturer, width, height) {
        super(manufacturer);
        this.width = width;
        this.height = height;
    }
}

class Keyboard extends Manufacturable {
    constructor(manufacturer, responseTime) {
        super(manufacturer);
        this.responseTime = responseTime;
    }
}

class Battery extends Manufacturable {
    constructor(manufacturer, expectedLife) {
        super(manufacturer);
        this.expectedLife = expectedLife;
    }
}

class Computer extends Manufacturable {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        if (new.target === Computer) {
            throw new Error("Cannot instantiate abstract class.");
        }
        super(manufacturer);
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
    }
}

class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDisk, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDisk);
        this.weight = weight;
        this.color = color;
        this.battery = battery;
    }


    get battery() {
        return this._battery;
    }

    set battery(value) {
        if (!(value instanceof Battery)) {
            throw new TypeError("Passed argument was not a Battery.");
        }
        this._battery = value;
    }
}

class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDisk, keyboard, monitor) {
        super(manufacturer, processorSpeed, ram, hardDisk);
        this.keyboard = keyboard;
        this.monitor = monitor;
    }

    get keyboard() {
        return this._keyboard;
    }

    set keyboard(value) {
        if (!(value instanceof Keyboard)) {
            throw new TypeError("Passed argument was not a Keyboard");
        }
        this._keyboard = value;
    }

    get monitor() {
        return this._monitor;
    }

    set monitor(value) {
        if (!(value instanceof Monitor)) {
            throw new TypeError("Passed argument was not a Monitor.");
        }

        this._monitor = value;
    }
}

let mixins = solve();
let computerQualityMixin = mixins.computerQualityMixin;
let styleMixin = mixins.styleMixin;

computerQualityMixin(Desktop);
styleMixin(Desktop);
computerQualityMixin(Laptop);
styleMixin(Laptop);

let keyboard = new Keyboard('Logitech', 70);
let keyboard2 = new Keyboard('A-4', 70);
let monitor = new Monitor('Logitech', 28, 18);
let battery = new Battery('Energy', 3);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 2.99, "Silver", battery);
let desktop = new Desktop("Logitech", 3.3, 8, 1, keyboard, monitor);

console.log(desktop.getQuality)   //.to.exist;
console.log(laptop.getQuality)   //.to.exist;
console.log(desktop.getQuality())   //.to.be.closeTo(4.1,0.01,"Expected quaity did not match");
console.log(laptop.getQuality())   //.to.be.closeTo(2.3,0.01,"Expected quaity did not match");
