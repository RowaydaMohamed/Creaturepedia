var image = document.getElementById('image1');
var image1Path = 'Oct3.jpg';
var image2Path = 'Oct2.png';
var originalSrc = image.src;


image.addEventListener('mouseover', function() {
  // Change the source of the image to image2.jpg on mouseover
  image.src = image2Path;
});

image.addEventListener('mouseout', function() {
  // Change the source back to the original source on mouseout
  image.src = originalSrc;
});



document.getElementById('playButton').addEventListener('click', function() {
  var audio = document.getElementById('audio');
  audio.play();
});
