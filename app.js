'use strict';

// VARIABLE DECLARATIONS
var pixelGrid = document.getElementById('pixelGrid');
var newPixel;
var pixelCanvas = document.getElementsByClassName('pixelGrid')[0];
var getColor = document.getElementsByTagName('aside')[0];
var currentColor = 'color1';
var previousColor = 'color1';
var colorIndicator = document.getElementsByTagName('footer')[0];
var getTool = document.getElementsByTagName('aside')[1];
var currentTool = 'pixelTool';
var saveButton = document.getElementsByClassName('saveButton')[0];
var isMouseDown = false;
var mouseX = 0;
var mouseY = 0;
var body = document.querySelector('body');
var pixelTool = document.getElementById('pixelTool');
var pixelInfo = document.getElementById('pixelToolBox');
var penTool = document.getElementById('penTool');
var penInfo = document.getElementById('penToolBox');
var knobTool = document.getElementById('knobTool');
var knobInfo = document.getElementById('knobToolBox');
var eraserTool = document.getElementById('eraserTool');
var eraserInfo = document.getElementById('eraserToolBox');
var saveTool = document.getElementById('saveTool');
var saveInfo = document.getElementById('saveToolBox');


// PIXEL CREATION FUNCTION
var addPixels = function(event) {
  for (var i = 0; i < 1797; i++) {
    if (i === 0) {
      newPixel = document.createElement('area');
      pixelGrid.appendChild(newPixel);
      newPixel.className = 'pixel topLeft';
    }
    if (i === 48) {
      newPixel = document.createElement('area');
      pixelGrid.appendChild(newPixel);
      newPixel.className = 'pixel topRight';
    }
    if (i === 1748) {
      newPixel = document.createElement('area');
      pixelGrid.appendChild(newPixel);
      newPixel.className = 'pixel bottomLeft';
    }
    if (i === 1796) {
      newPixel = document.createElement('area');
      pixelGrid.appendChild(newPixel);
      newPixel.className = 'pixel bottomRight';
    }
    else {
      newPixel = document.createElement('area');
      pixelGrid.appendChild(newPixel);
      newPixel.className = 'pixel';
    }
  }
}

// COLOR PICKER FUNCTION
var chooseColor = function(event) {
  if (event.target.className.indexOf('color1') > -1) {
    currentColor = 'color1';
    previousColor = 'color1';
    colorIndicator.className = currentColor;
  }
  if (event.target.className.indexOf('color2') > -1) {
    currentColor = 'color2';
    previousColor = 'color2';
    colorIndicator.className = currentColor;
  }
  if (event.target.className.indexOf('color3') > -1) {
    currentColor = 'color3';
    previousColor = 'color3';
    colorIndicator.className = currentColor;
  }
  if (event.target.className.indexOf('color4') > -1) {
    currentColor = 'color4';
    previousColor = 'color4';
    colorIndicator.className = currentColor;
  }
  if (event.target.className.indexOf('color5') > -1) {
    currentColor = 'color5';
    previousColor = 'color5';
    colorIndicator.className = currentColor;
  }
  if (event.target.className.indexOf('eraserTool') > -1) {
    currentColor = 'eraserColor';
  }
}

// COLOR ASSIGNMENT FUNCTION
var colorOn = function(event) {
  if (event.target.className.indexOf('topLeft') > -1) {
    event.target.className = 'pixel topLeft'
    event.target.className += ' ' + currentColor;
    currentColor = colorIndicator.className;
  }
  else if (event.target.className.indexOf('topRight') > -1) {
    event.target.className = 'pixel topRight'
    event.target.className += ' ' + currentColor;
  }
  else if (event.target.className.indexOf('bottomLeft') > -1) {
    event.target.className = 'pixel bottomLeft'
    event.target.className += ' ' + currentColor;
  }
  else if (event.target.className.indexOf('bottomRight') > -1) {
    event.target.className = 'pixel bottomRight'
    event.target.className += ' ' + currentColor;
  }
  else if (event.target.className.indexOf('pixelGrid') > -1) {
    event.target.className = 'pixelGrid';
  }
  else {
    event.target.className = 'pixel'
    event.target.className += ' ' + currentColor;
  }
}

// TOOL PICKER FUNCTION
var chooseTool = function(event) {
  if (event.target.className.indexOf('pixelTool') > -1) {
    currentTool = 'pixelTool' + ' tool';
    currentColor = previousColor;
    pixelCanvas.addEventListener('click', colorOn);
    pixelCanvas.removeEventListener("mousedown", startTrackMouse);
    window.removeEventListener("mouseup", stopTrackMouse);
    pixelCanvas.removeEventListener("mousemove", trackMouse);
    console.log(currentTool);
  }
  if (event.target.className.indexOf('penTool') > -1) {
    currentTool = 'penTool' + ' tool';
    currentColor = previousColor;
    pixelCanvas.addEventListener("mousedown", startTrackMouse);
    window.addEventListener("mouseup", stopTrackMouse);
    pixelCanvas.addEventListener("mousemove", trackMouse);
    pixelCanvas.removeEventListener('click', colorOn);
    console.log(currentTool);
  }
  if (event.target.className.indexOf('knobTool') > -1) {
    currentTool = 'knobTool' + ' tool';
    console.log(currentTool);
  }
  if (event.target.className.indexOf('eraserTool') > -1) {
    currentTool = 'eraserTool' + ' tool';
    pixelCanvas.addEventListener("mousedown", startTrackMouse);
    window.addEventListener("mouseup", stopTrackMouse);
    pixelCanvas.addEventListener("mousemove", trackMouse);
    pixelCanvas.removeEventListener('click', colorOn);
    console.log(currentTool);
  }
}

// SAVE FUNCTION
var saveCanvas = function() {
  console.log('Saved');
}

// MOUSE MOVEMENT FUNCTIONS
var startTrackMouse = function (event) {
    isMouseDown = true;

    mouseX = event.offsetX;
    mouseY = event.offsetY;
    colorOn(event);
}

var trackMouse = function (event) {
    if (isMouseDown) {
    mouseX = event.offsetX;
    mouseY = event.offsetY;
    colorOn(event);
  }
}

var stopTrackMouse = function() {
  isMouseDown = false;
}

var pixelBoxShow = function() {
    pixelInfo.style.visibility = 'visible';
}

var pixelBoxHide = function() {
  pixelInfo.style.visibility = 'hidden';
}

var penBoxShow = function() {
    penInfo.style.visibility = 'visible';
}

var penBoxHide = function() {
    penInfo.style.visibility = 'hidden';
}

var knobBoxShow = function() {
    knobInfo.style.visibility = 'visible';
}

var knobBoxHide = function() {
    knobInfo.style.visibility = 'hidden';
}

var eraserBoxShow = function() {
    eraserInfo.style.visibility = 'visible';
}

var eraserBoxHide = function() {
    eraserInfo.style.visibility = 'hidden';
}

var saveBoxShow = function() {
    saveInfo.style.visibility = 'visible';
}

var saveBoxHide = function() {
    saveInfo.style.visibility = 'hidden';
}

document.addEventListener('DOMContentLoaded', addPixels);
pixelCanvas.addEventListener('click', colorOn);
getColor.addEventListener('click', chooseColor);
getTool.addEventListener('click', chooseColor);
getTool.addEventListener('click', chooseTool);
pixelTool.addEventListener('mouseenter', pixelBoxShow);
pixelTool.addEventListener('mouseleave', pixelBoxHide);
penTool.addEventListener('mouseenter', penBoxShow);
penTool.addEventListener('mouseleave', penBoxHide);
knobTool.addEventListener('mouseenter', knobBoxShow);
knobTool.addEventListener('mouseleave', knobBoxHide);
eraserTool.addEventListener('mouseenter', eraserBoxShow);
eraserTool.addEventListener('mouseleave', eraserBoxHide);
saveTool.addEventListener('mouseenter', saveBoxShow);
saveTool.addEventListener('mouseleave', saveBoxHide);
saveButton.addEventListener('click', saveCanvas);
