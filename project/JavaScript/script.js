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
//   document.addEventListener('DOMContentLoaded', function() {
//     const submitButtons = document.querySelectorAll('.submit-btn');
//     const feedbackElements = document.querySelectorAll('.feedback');

//     // Add click event listeners to all submit buttons
//     submitButtons.forEach((button, index) => {
//         button.addEventListener('click', () => {
//             const options = document.querySelectorAll(`.quiz-container:nth-child(${index + 1}) .option`);
//             const selectedOption = Array.from(options).find(option => option.classList.contains('selected'));
//             const isCorrect = selectedOption.getAttribute('data-answer') === 'true';
//             const feedbackElement = feedbackElements[index];

//             if (isCorrect) {
//                 feedbackElement.textContent = 'Correct!';
//             } else {
//                 feedbackElement.textContent = 'Wrong! Try again.';
//             }
//         });
//     });

//     // Add click event listeners to all options
//     const options = document.querySelectorAll('.option');
//     options.forEach(option => {
//         option.addEventListener('click', () => {
//             options.forEach(opt => opt.classList.remove('selected'));
//             option.classList.add('selected');
//         });
//     });
// });
// const shoppingList = ["Milk", "Bread", "Eggs", "Apples", "Bananas"];

// const listElement = document.getElementById("shopping-list");

// // Loop through the array and create list items
// shoppingList.forEach((item) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = item;
//   listElement.appendChild(listItem);
// });
function my2ndFunction() {
  alert("Hi There! Dive into the vibrant world of avian species through mesmerizing courtship displays, graceful gliding flights, and epic migratory journeys.  ");
}