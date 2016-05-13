'use strict';

var pixelGrid = document.getElementById('pixelGrid');
var newPixel = document.createElement('div');

// var addPixels = document.querySelectorAll('.pixel');

var addPixels = function {

}
var i = 0;
var pixelOn = function() {
  for (i = 0; i < pixels.legnth; i++) {
    console.log('Clicked a pixel');
    pixels[i].style.backgroundColor = 'grey';
  }
}

document.addEventListener('click', pixelOn);
