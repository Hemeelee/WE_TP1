const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

ctx.fillStyle = '#F0F0F0';
ctx.fillRect(0, 0, canvas.width, canvas.height);


const drawing = new Drawing(new Map());
const pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

