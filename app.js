'use strict';

var pixelGrid = document.getElementById('pixelGrid');
var newPixel;
var canvas = document.getElementsByClassName('pixelGrid')[0];
var getColor = document.getElementsByTagName('aside')[0];
var currentColor = 'color1';
var getTool = document.getElementsByTagName('aside')[1];
var currentTool = 'pixelTool';
var colorIndicator = document.getElementsByTagName('footer')[0];
var isMouseDown = false;
var mouseX = 0;
var mouseY = 0;

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
    colorIndicator.className = currentColor;
  }
  if (event.target.className.indexOf('color2') > -1) {
    currentColor = 'color2';
    colorIndicator.className = currentColor;
  }
  if (event.target.className.indexOf('color3') > -1) {
    currentColor = 'color3';
    colorIndicator.className = currentColor;
  }
  if (event.target.className.indexOf('color4') > -1) {
    currentColor = 'color4';
    colorIndicator.className = currentColor;
  }
  if (event.target.className.indexOf('color5') > -1) {
    currentColor = 'color5';
    colorIndicator.className = currentColor;
  }
}

// COLOR ASSIGNMENT FUNCTION
var colorOn = function(event) {
  if (event.target.className.indexOf('topLeft') > -1) {
    event.target.className = 'pixel topLeft'
    event.target.className += ' ' + currentColor;
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
    canvas.addEventListener('click', colorOn);
    canvas.removeEventListener("mousedown", startTrackMouse);
    window.removeEventListener("mouseup", stopTrackMouse);
    canvas.removeEventListener("mousemove", trackMouse);
    console.log(currentTool);
  }
  if (event.target.className.indexOf('penTool') > -1) {
    currentTool = 'penTool' + ' tool';
    canvas.addEventListener("mousedown", startTrackMouse);
    window.addEventListener("mouseup", stopTrackMouse);
    canvas.addEventListener("mousemove", trackMouse);
    canvas.removeEventListener('click', colorOn);
    console.log(currentTool);
  }
  if (event.target.className.indexOf('knobTool') > -1) {
    currentTool = 'knobTool' + ' tool';
    console.log(currentTool);
  }
  if (event.target.className.indexOf('eraserTool') > -1) {
    currentTool = 'eraserTool' + ' tool';
    console.log(currentTool);
  }
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



document.addEventListener('DOMContentLoaded', addPixels);
canvas.addEventListener('click', colorOn);
getColor.addEventListener('click', chooseColor);
getTool.addEventListener('click', chooseTool);
