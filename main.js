var letsCookButton = document.querySelector('.cook-button');
var cookPot = document.querySelector('.cook-pot');
var randomDish = document.querySelector('.random-dish')
var clearButton = document.querySelector('.clear-button')

//Random number generator:
function random(array) {
	return Math.floor(Math.random() * array.length);
}
// event listeners:

letsCookButton.addEventListener('click', generateRandomDish)

// Functions: 


var test = [1, 3, 4, 5]

function generateRandomDish() {
	switchPotAndText();
	randomDish.innerText = sides[random(sides)];
}

function switchPotAndText() {
	cookPot.classList.add('hidden');
	randomDish.classList.remove('hidden')
	clearButton.classList.remove('hidden')
}


