// this selects all the divs (cards) and places them in an array that will be shuffled each game
let card = document.querySelectorAll(".card");
const cards = [...card];

// empty array for two opened cards
let openedCards = [];

let timer = document.querySelector(".timer");

// selecting all cards in the game
const deck = document.querySelector(".deck");

let button = document.querySelector("button");


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
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    deck.classList.remove("disabled");
    // resets timer
    sec = 0;
    min = 0;
    timer.innerHTML = "0 min, 0 sec";
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
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    setTimeout(function () {
        openedCards[0].classList.add("removed");
        openedCards[1].classList.add("removed");
        openedCards = [];
    }, 1500);

}

function unmatched() {
    openedCards[0].classList.add("unmatched", "disabled");
    openedCards[1].classList.add("unmatched", "disabled");
    setTimeout(function () {
        openedCards[0].classList.remove("show", "open", "no-event", "unmatched", "disabled");
        openedCards[1].classList.remove("show", "open", "no-event", "unmatched", "disabled");
        openedCards = [];
    }, 1500);
}


// game timer -- counting up
let min = 0,
    sec = 0;
let interval;

function startTimer() {
    interval = setInterval(function () {
        timer.innerHTML = `${min} mins, ${sec} secs`;
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }
    }, 1000);
}
