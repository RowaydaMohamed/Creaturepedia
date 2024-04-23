function myFunction() {
    alert("Congratultions for being a human!\nWelcome to Creaturepedia – Where Curiosity Meets Discovery!");
  }
// Get the audio and image elements by their IDs
const audio = document.getElementById('audio');
const audioButton = document.getElementById('audioButton');

// Add click event listener to the image
audioButton.addEventListener('click', function() {
  // Check if audio is paused or not
  if (audio.paused) {
    // If audio is paused, play it
    audio.play();
  } else {
    // If audio is playing, pause it
    audio.pause();
  }
});
function flipCard(card) {
    card.classList.toggle('flipped');
  }
  
  