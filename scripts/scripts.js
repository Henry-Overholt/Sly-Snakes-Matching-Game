function flip(event) {
  let element = event.currentTarget;
  if (element.classList.contains("card")) {
    if (element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    } else {
      element.style.transform = "rotateY(180deg)";
    }
  }
}

let card = document.querySelectorAll(".card");
const cards = [...card];
// console.log(cards);

// all cards in the game
const deck = document.querySelector(".deck");

// array for the opened cards
let openCards = [];

// to shuffle the cards
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex--;
    temporaryValue = array[randomIndex];
    array[randomIndex] = array[currentIndex];
    array[currentIndex] = temporaryValue;
  }
  return array;
}

shuffle(cards);
console.log(cards);
// eeeet works!

// need to start the game on window load ***
document.querySelector("#start_btn").addEventListener("click", startGame); //click event on the start button with function of start game
function startGame() {
  startTimer();
  /** we need to:
   * - shuffle the cards (so call shuffle function)
   * - reset the timer
   * - reset the cards (any open cards need to be reclosed)
   */
  // reset timer
}

// game timer -- counting up
let timer = document.querySelector(".timer");
let min = 0,
  sec = 0;
let interval;

function startTimer() {
  interval = setInterval(function() {
    timer.innerHTML = `${min} mins, ${sec} secs`;
    sec++;
    if (sec === 60) {
      min++;
      sec = 0;
    }
  }, 1000);
}
document.querySelector("#reset_btn").addEventListener("click", resetGame); //click event on reset button
function resetGame() {
  console.log("reset button was pushed");
}

// startTimer();
// now this works toooooo.
