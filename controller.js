const editingMode = {rect: 0, line: 1};

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 0;
	this.currColour = "#000000";
	this.currentShape = 0;

	new DnD(canvas, this);

	this.onInteractionStart = function(dnd) {
		this.currEditingMode = document.getElementById("butRect").checked ? editingMode.rect : editingMode.line;
		this.currLineWidth = document.getElementById("spinnerWidth").value;
		this.currColour = document.getElementById("colour").value;

		if (this.currEditingMode === editingMode.rect) {
			this.currentShape = new Rectangle(dnd.xinit, dnd.yinit, 0, 0, this.currLineWidth, this.currColour);
		} else if (this.currEditingMode === editingMode.line) {
			this.currentShape = new Line(dnd.xinit, dnd.yinit, dnd.xinit, dnd.yinit, this.currLineWidth, this.currColour);
		}
	}.bind(this);

	this.onInteractionUpdate = function(dnd) {
		if (this.currEditingMode === editingMode.rect) {
			this.currentShape.width = dnd.xfinal - dnd.xinit;
			this.currentShape.height = dnd.yfinal - dnd.yinit;
		} else if (this.currEditingMode === editingMode.line) {
			this.currentShape.x2 = dnd.xfinal;
			this.currentShape.y2 = dnd.yfinal;
		}

		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function() {
		const uuid = uuidv4();
		drawing.shapes.set(uuid, this.currentShape);

		drawing.paint(ctx, canvas);

		updateShapeList(uuid, this.currentShape);
		console.log("Forme ajoutée et affichée dans la liste : " + uuid);
	}.bind(this);




	function uuidv4() {
		return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
			(+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
		);
	}

	/**
	 * Update the list of shapes
	 * @param uuid
	 * @param shape
	 */
	function updateShapeList(uuid, shape) {
		const shapeType = shape instanceof Line ? 'Line' : 'Rectangle';
		const listItemHTML = `
        <li id="liRemove${uuid}">
            <input type="text" id="name${uuid}" value="${shapeType}" />
            <button id="remove${uuid}">Remove</button>
        </li>
    	`;
		document.getElementById("shapeList").insertAdjacentHTML("beforeend", listItemHTML);

		document.getElementById(`remove${uuid}`).onclick = () => remove(uuid);
	}


	/**
	 * Delete a shape from the drawing and the list
	 * @param uuid
	 */
	function remove(uuid) {

		drawing.shapes.delete(uuid);

		drawing.paint(ctx, canvas);

		const listItem = document.getElementById(`liRemove${uuid}`);
		if (listItem) {
			listItem.remove();
		}
	}

}
