function solve() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    };

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    };
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    };
    //abstract
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if(this.constructor.name === Computer.name){
                throw new Error('cant initialize')
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this._battery = null;
            this.battery = battery;
        }
        get battery() {
            return this._battery;
        }
        /**
         * @param {(arg0: any) => any} value
         */
        set battery(value) {
            if(_validate(value, Battery)){
                this._battery = value;
                return;
            }
        }

    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this._keyboard = null;
            this.keyboard = keyboard
            this._monitor = null;
            this.monitor = monitor;
        }
        get keyboard() {
            return this._keyboard;
        }
        /**
         * @param {any} value
         */
        set keyboard(value) {
            if(_validate(value, Keyboard)){
                this._keyboard = value;
                return;
            }
        }
        get monitor() {
            return this._monitor;
        }
        set monitor(value) {
            if(_validate(value, Monitor)){
                this._monitor = value;
                return;
            }
        }
    }
    function _validate(instance, parent) {
        if ((instance instanceof parent) == false) {
            throw new TypeError('doesn\'t inherit correctly')
        }
        return instance;
    }
    return {
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop
    }
}
let classes = solve();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let battery = new Battery('Benq', 5);

const lap = new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver","battery");
console.log(lap)

// expect(()=>new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver","pesho")).to.throw(TypeError);
// expect(()=>new Desktop("JAR Computers",3.3,8,1,1,monitor)).to.throw(TypeError);
// expect(()=>new Desktop("JAR Computers",3.3,8,1,keyboard,"monitor")).to.throw(TypeError);