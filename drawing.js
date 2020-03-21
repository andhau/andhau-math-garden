const BACKGROUND_COLOR = "#000000";
const LINE_COLOR = "#FFFFFF";
const LINE_WIDTH = 10;

let isDrawing = false;

var canvas;
var context;

function prepareCanvas() {
  // console.log('Preparing canvas');

  canvas = document.getElementById('my-canvas');
  context = canvas.getContext("2d");

  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  // Mouse events
  document.addEventListener('mousedown', function(event) {
    isDrawing = true;
    currentX = event.clientX - canvas.offsetLeft;
    currentY = event.clientY - canvas.offsetTop;
  });

  document.addEventListener('mousemove', function(event) {
    if (isDrawing === true) {
      draw(
        context,
        currentX,
        currentY,
        event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop
      );
    }
    currentX = event.clientX - canvas.offsetLeft;
    currentY = event.clientY - canvas.offsetTop;
  });

  document.addEventListener('mouseup', function(event) {
    isDrawing = false;
  });

  canvas.addEventListener('mouseleave', function(event) {
    isDrawing = false;
  });

  // Touch Events
canvas.addEventListener('touchstart', function(event) {
    isDrawing = true;
    currentX = event.touches[0].clientX - canvas.offsetLeft;
    currentY = event.touches[0].clientY - canvas.offsetTop;
  });

  document.addEventListener('touchmove', function(event) {
    if (isDrawing === true) {
      draw(
        context,
        currentX,
        currentY,
        event.touches[0].clientX - canvas.offsetLeft,
        event.touches[0].clientY - canvas.offsetTop
      );
    }
    currentX = event.touches[0].clientX - canvas.offsetLeft;
    currentY = event.touches[0].clientY - canvas.offsetTop;
  });

  canvas.addEventListener('touchend', function(event) {
    isDrawing = false;
  });

  canvas.addEventListener('touchcancel', function(event) {
    isDrawing = false;
  });
}

function draw(context, x1, y1, x2, y2) {
  context.strokeStyle = LINE_COLOR;
  context.lineWidth = LINE_WIDTH;
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.closePath();
  context.stroke();
}

function clearCanvas() {
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  }

