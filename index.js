var newarr = [1, 2, 3];
newarr.map(n => console.log(n + 1));

class Polygon {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    get area () {
        return this.calcArea();
    }
    calcArea () {
        return this.height * this.width;
    }
}

const shape = new Polygon(23, 44);

console.log(shape.area);
