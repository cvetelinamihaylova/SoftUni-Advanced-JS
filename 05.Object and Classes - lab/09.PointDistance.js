class Point{
    constructor(x, y){
        this.x = x;
        this.y = y
    }

    static distance(ob1, ob2){
        return (Math.sqrt(Math.pow((ob2.x - ob1.x), 2) + Math.pow((ob2.y - ob1.y), 2)))
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));