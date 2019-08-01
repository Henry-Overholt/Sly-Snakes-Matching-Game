
let card = document.querySelectorAll(".card");
const cards = [...card];
console.log(cards);

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
        }
    }, 1000);
}

// startTimer();
// now this works toooooo.