
class Drawing{
    constructor() {
        this.shapes = new Map();
    }
}

class Shape{
    constructor(color, thickness) {
        this.color = color;
        this.thickness = thickness;
    };

    Getters(){
        return {color: this.color, thickness: this.thickness};
    }

    Setter(color, thickness){
        this.color = color;
        this.thickness = thickness;
    }
}

class Rectangle extends Shape{
    constructor(x, y, width, height, thickness, color) {
        super(color, thickness);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };

    Getters(){
        return {x: this.x, y: this.y, width: this.width, height: this.height, color: this.color, thickness: this.thickness};
    }

    Setter(color, thickness) {
        super.Setter(color, thickness);
    }

}

class Line extends Shape{
    constructor(x1, y1, x2, y2, thickness, color) {
        super(color,thickness);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    };

    Getters(){
        return {x1: this.x1, y1: this.y1, x2: this.x2, y2: this.y2 , color: this.color, thickness: this.thickness};
    }

    Setter(color, thickness) {
        super.Setter(color, thickness);
    }
}
