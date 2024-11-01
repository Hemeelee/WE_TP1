Rectangle.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.rect(this.Getters().x, this.Getters().y, this.Getters().width, this.Getters().height);
    ctx.lineWidth = this.Getters().thickness;
    ctx.strokeStyle = this.Getters().color;
    ctx.stroke();
}

Line.prototype.paint = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.Getters().x1, this.Getters().y1);
        ctx.lineTo(this.Getters().x2, this.Getters().y2);
        ctx.lineWidth = this.Getters().thickness;
        ctx.strokeStyle = this.Getters().color;
        ctx.stroke();
}

Shape.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.Getters().color;
    ctx.lineWidth = this.Getters().thickness;
}

Drawing.prototype.paint = function (ctx, canvas) {
    console.log(this.shapes);
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapes.forEach(function (shape) {
        shape.paint(ctx);
    });
}

