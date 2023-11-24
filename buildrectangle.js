class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return 2 * (this.length + this.width);
    }
    drawRectangle() {
        let canvas = document.getElementById("rectangleCanvas");
        let context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#87CEEB";
        context.fillRect(10, 10, this.length, this.width);
    }
}
let myRectangle = new Rectangle(100, 50);
myRectangle.drawRectangle();
myRectangle.length = 150;
myRectangle.width = 80;
myRectangle.drawRectangle();
console.log("Diện tích:", myRectangle.getArea());
console.log("Chu vi:", myRectangle.getPerimeter());