function DnD(canvas, interactor) {
    this.xinit = 0;
    this.yinit = 0;
    this.xfinal = 0;
    this.yfinal = 0;
    this.interactor = interactor;

    this.isPressed = false;

    this.mousePressed = function (evt) {
        if (!this.isPressed) {

            this.isPressed = true;
            this.xinit = getMousePosition(canvas, evt).x;
            this.yinit = getMousePosition(canvas, evt).y;
            this.interactor.onInteractionStart(this);

        } else {

            this.xfinal = getMousePosition(canvas, evt).x;
            this.yfinal = getMousePosition(canvas, evt).y;
            this.isPressed = false;
            this.interactor.onInteractionEnd(this);
        }
    }.bind(this);


    this.mouseMovement = function (evt) {
        if (this.isPressed) {
            const mousePos = getMousePosition(canvas, evt);
            this.xfinal = mousePos.x;
            this.yfinal = mousePos.y;
            this.interactor.onInteractionUpdate(this);
        }
    }.bind(this);

    canvas.addEventListener("mousedown", this.mousePressed);
    canvas.addEventListener("mousemove", this.mouseMovement);

}

function getMousePosition(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}




