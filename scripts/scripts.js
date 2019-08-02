function flip(event){
	let element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};


// all cards in the game
const deck = document.querySelector(".deck")

// array for the opened cards
let openCards = [];

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

shuffle(cards);
console.log(cards);
// eeeet works!

// need to start the game on window load ***


function startGame() {
/** we need to:
 * - shuffle the cards (so call shuffle function)
 *  cards = shuffle(cards)
 * - reset the timer
 * - reset the cards (any open cards need to be reclosed)
 */

// reset timer



}



// game timer -- counting up
let timer = document.querySelector(".timer");
let min = 0, sec = 0;
let interval;

function startTimer() {
    interval = setInterval(function() {
        timer.innerHTML =  `${min} mins, ${sec} secs`;
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }
    }, 1000);
}

// startTimer();
// now this works toooooo.





// need function for opened cards
function cardOpen()
    openCards.push(this);
    let length = openCards.length;
    if (length === 2) {
        if (openCards[0].type === openCards[1].type) {
            matched();
        } else {
            unmatched();
        }
    }

// need function for matched cards
function matched() {
    openCards[0].classList.add("matched","disabled");
    openCards[1].classList.add("matched","disabled");
    openCards[0].classList.remove("show","open");
    openCards[1].classList.remove("show","open");
    openCards = [];
}

// need function for unmatched card
function unmatched()

// need function to disable clicking on cards
function disabled()
    // need to make user unable to click on the card again (whether matched or just clicked on in general)
