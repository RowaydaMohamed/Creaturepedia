let currentIndex = 0;
const images = document.querySelectorAll('.image-box img');

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

// Show the first image when the page loads
images[currentIndex].classList.add('active');

// Find the button element
const button = document.querySelector('button');

// Add a click event listener to the button
button.addEventListener('click', showNextImage);