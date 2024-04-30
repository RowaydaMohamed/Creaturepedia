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
// function flipCard(card) {
//     card.classList.toggle('flipped');
//   }
  
// JavaScript logic to change background image
const backgrounds = ['../Images/orcabackground3.jpeg', '../Images/sea_background.png'];
let currentBackgroundIndex = 0;

// Function to change background image
function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
}

// Add event listener to the button
document.getElementById('various-backgrounds').addEventListener('click', changeBackground);
function mOver(obj) {
  obj.innerHTML = "Polar bears are actually black,It only looks white because it reflects visible light, This allows them to blend into their surroundings and catch unsuspecting seals."
  }
  
  function mOut(obj) {
  obj.innerHTML = "Mouse Over Me to know me more."
  }


  //  = "Click on the photos for more info.";

  // Function to display text with typing effect
  function displayTextWithTypingEffect() {
    const typingElement = document.getElementById("vtyping-effect");
    let index = 0;
  
    // Function to add one character at a time with delay
    function addCharacter() {
      typingElement.textContent += text[index];
      index++;
  
      // Check if all characters have been added
      // if const text(index < text.length) {
      //   // Set timeout for the next character
      //   setTimeout(addCharacter, 100); // Adjust the delay (in milliseconds) as needed
      // }
    }
  
    // Start typing effect
    addCharacter();
  }
  
  // Call the function to start the typing effect
  displayTextWithTypingEffect();
  document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.mslide');
    var index = 0;
  
    // Show the first slide
    slides[index].style.display = 'block';
  
    // Change slide every 3 seconds
    setInterval(function() {
      // Hide the current slide
      slides[index].style.display = 'none';
  
      // Move to the next slide or start over if reached the end
      index = (index + 1) % slides.length;
  
      // Show the next slide
      slides[index].style.display = 'block';
    }, 3000);
  });

  function my2ndFunction() {
    alert("Hi There! Dive into the vibrant world of avian species through mesmerizing courtship displays, graceful gliding flights, and epic migratory journeys.  ");
  }
  function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // email format validation
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    // Validate email
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        return false;
    } else {
        document.getElementById("emailError").innerText = "";
    }
    // Validate password
    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long";
        return false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }
    // Form is valid
    return true;
}


// salma parrot2.js
document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll('.mslide');
  var index = 0;

  // Show the first slide
  slides[index].style.display = 'block';

  // Change slide every 3 seconds
  setInterval(function() {
    // Hide the current slide
    slides[index].style.display = 'none';

    // Move to the next slide or start over if reached the end
    index = (index + 1) % slides.length;

    // Show the next slide
    slides[index].style.display = 'block';
  }, 3000);
});

// Get the image element
var image = document.getElementById('parrot2');

// Get the audio element
var audioPARROT = document.getElementById('parrotaudio');

// Add click event listener to the image
image.addEventListener('click', function() {
  // Play the audio
  audioPARROT.play();
});


function toggleCaption() {
  var caption1 = document.getElementsByClassName('mcaption1')[0];
  var caption2 = document.getElementById('mcaption2');
  
  caption1.classList.toggle('hidden');
  caption2.classList.toggle('hidden');
}

document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll('.mslide');
  var index = 0;

  // Show the first slide
  slides[index].style.display = 'block';

  // Change slide every 3 seconds
  setInterval(function() {
    // Hide the current slide
    slides[index].style.display = 'none';

    // Move to the next slide or start over if reached the end
    index = (index + 1) % slides.length;

    // Show the next slide
    slides[index].style.display = 'block';
  }, 3000);
});


