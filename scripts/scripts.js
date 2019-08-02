// this selects all the divs (cards) and places them in an array that will be shuffled each game
let card = document.querySelectorAll(".card");
const cards = [...card];

// empty array for two opened cards
let openedCards = [];

let timer = document.querySelector(".timer");

let matchedCards = []; //empty array for cards that are matched

// selecting all cards in the game
const deck = document.querySelector(".deck");

let button = document.querySelector("button");
let modal = document.querySelector(".modal");
document.querySelector(".close").addEventListener("click", handleClose);


// adding click events for the cards
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", displayCard);
    cards[i].addEventListener("click", cardOpen);
}

// starts game when button is clicked
button.addEventListener("click", startGame);

// disables game board until game begins
deck.classList.add("disabled");

// to start the game
function startGame() {
    openedCards = [];
    let shuffledDeck = [];
    let shuffledCards = shuffle(cards);
    for (let i = 0; i < shuffledCards.length; i++) {
        shuffledDeck.forEach.call(shuffledCards, function (item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "matched", "disabled", "removed");
    }
    deck.classList.remove("disabled");
    // resets timer
    sec = 0;
    min = 0;
    timer.innerHTML = "0 min, 0 sec";
    clearInterval(interval);
    startTimer();
    button.innerHTML = "RESET";
}

// to shuffle the cards
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);

        currentIndex--;
        temporaryValue = array[randomIndex];
        array[randomIndex] = array[currentIndex];
        array[currentIndex] = temporaryValue;
    }
    return array;
}

function displayCard() {
    this.classList.toggle("show");
    this.classList.toggle("open");
    this.classList.toggle("disabled");
}

function cardOpen() {
    openedCards.push(this);
    console.log(openedCards);
    let length = openedCards.length;
    if (length === 2) {
        if (openedCards[0].attributes[1].value === openedCards[1].attributes[1].value) {
            setTimeout(function() {
                matched();
            }, 1000);
        } else {
            unmatched();
        }
    }
}

// when a card is matched
function matched() {
    openedCards[0].classList.add("matched", "disabled");
    openedCards[1].classList.add("matched", "disabled");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    disabled();
    setTimeout(function () {
        matchedCards.push(openedCards[0], openedCards[1]);
        openedCards[0].classList.add("removed");
        openedCards[1].classList.add("removed");
        enable();
        openedCards = [];
    }, 1500);
    endGame();
}

function unmatched() {
    openedCards[0].classList.add("unmatched", "disabled");
    openedCards[1].classList.add("unmatched", "disabled");
    disabled();
    setTimeout(function () {
        openedCards[0].classList.remove("show", "open", "no-event", "unmatched", "disabled");
        openedCards[1].classList.remove("show", "open", "no-event", "unmatched", "disabled");
        enable();
        openedCards = [];
    }, 1500);
}


// game timer -- counting up
let min = 0,
    sec = 0;
let interval;

function startTimer() {
    interval = setInterval(function () {
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
        card.classList.add('disabled');
    });
}

function enable() {
    Array.prototype.filter.call(cards, function(card) {
        card.classList.remove('disabled');
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
