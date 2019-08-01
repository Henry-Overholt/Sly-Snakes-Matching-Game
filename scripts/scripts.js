
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