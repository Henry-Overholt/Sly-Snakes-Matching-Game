// this selects all the divs (class: card) and places them in an array that will be shuffled each game
let card = document.querySelectorAll(".card");
const cards = [...card];

let openedCards = []; // empty array for two opened cards

let matchedCards = []; //empty array for cards that are matched

let timer = document.querySelector(".timer");

// selecting all cards in the game
const deck = document.querySelector(".deck");

let button = document.querySelector("button");
let modal = document.querySelector(".modal");
document.querySelector(".close").addEventListener("click", handleClose);

// adding click events for the cards, using a for loop
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", displayCard);
  cards[i].addEventListener("click", cardOpen);
}

deck.classList.add("disabled");

button.addEventListener("click", startGame);

// this starts the game by emptying the array containing any open cards. There is an empty array created for the shuffled deck.
function startGame() {
  openedCards = [];
  matchedCards = [];
  let shuffledDeck = [];
  // the cards are shuffled and placed in a variable called shuffled cards.
  let shuffledCards = shuffle(cards);
  // the below for loop iterates through the new shuffledDeck array and appends the game board so that each card is in a new place every game.
  for (let i = 0; i < shuffledCards.length; i++) {
    shuffledDeck.forEach.call(shuffledCards, function(item) {
      deck.appendChild(item);
    });
    // removes any added classes from all cards for a fresh game
    cards[i].classList.remove("show", "open", "matched", "disabled", "removed");
  }
  // removes the disabled overlay from the game board on start
  deck.classList.remove("disabled");
  // resets timer
  sec = 0;
  min = 0;
  timer.innerHTML = "0 min, 0 sec";
  clearInterval(interval); // must clear the old interval kept
  startTimer();
  button.innerHTML = "RESET"; // changes the start button to a reset button on start
}

// to shuffle the cards
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // for the shuffle to work, the [0] must be bypassed, so a while loop with the condition of the index not being 0 will iterate through the array of cards
  while (currentIndex !== 0) {
    // a random number between 0 and the current index of the loop will generate a random index selection.
    randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex--;
    // the temp value (which was initially equal to the currentIndex) is reassgined to the value of the random index.
    temporaryValue = array[randomIndex];
    // this line literally swaps the value to the current index
    array[randomIndex] = array[currentIndex];
    // then the current index is reassigned to the temp value holder.
    array[currentIndex] = temporaryValue;
  }
  return array;
  // returns the shuffled array. black magic, man.
}

// adds classes to cards
function displayCard() {
  this.classList.toggle("show");
  this.classList.toggle("open");
  this.classList.toggle("disabled");
}

function cardOpen() {
  // pushes the opened cards into their own array
  openedCards.push(this);
  let length = openedCards.length;
  // once the opened cards
  if (length === 2) {
    disabled();
    if (
      openedCards[0].attributes[1].value === openedCards[1].attributes[1].value
    ) {
      matched();
    } else {
      unmatched();
    }
  }
}

// when a card is matched
function matched() {
  openedCards[0].classList.add("matched", "disabled");
  openedCards[1].classList.add("matched", "disabled");
  disabled();
  setTimeout(function() {
    matchedCards.push(openedCards[0], openedCards[1]);
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    openedCards[0].classList.add("removed");
    openedCards[1].classList.add("removed");
    openedCards = [];
    enable();
  }, 1500);
  endGame();
}

function unmatched() {
  openedCards[0].classList.add("unmatched", "disabled");
  openedCards[1].classList.add("unmatched", "disabled");
  disabled();
  setTimeout(function() {
    openedCards[0].classList.remove(
      "show",
      "open",
      "no-event",
      "unmatched",
      "disabled"
    );
    openedCards[1].classList.remove(
      "show",
      "open",
      "no-event",
      "unmatched",
      "disabled"
    );
    enable();
    openedCards = [];
  }, 1500);
}

// game timer -- counting up
let min = 0,
  sec = 0;
let interval;

function startTimer() {
  interval = setInterval(function() {
    timer.innerHTML = `${min} min, ${sec} sec`;
    sec++;
    if (sec === 60) {
      min++;
      sec = 0;
    }
  }, 1000);
}

function disabled() {
  Array.prototype.filter.call(cards, function(card) {
    card.classList.add("disabled");
  });
}

function enable() {
  Array.prototype.filter.call(cards, function(card) {
    card.classList.remove("disabled");
  });
}

function endGame() {
  if (matchedCards.length === 14) {
    clearInterval(interval);
    button.innerHTML = `PLAY AGAIN!`;
    modal.style.display = "block";
    deck.classList.add("disabled");
    document.querySelector(".close").addEventListner;
    document.querySelector(".results").innerHTML = `<p>CONGRATS!</p>
      <p>You finished the game in</p
      ><p> ${min} minutes and ${sec} seconds!</p>`;
  }
}

function handleClose() {
  modal.style.display = "none";
}
