var cookPot = document.querySelector('.cook-pot');
var currentDish = document.querySelector('.current-dish')
var clearButton = document.querySelector('.clear-button')
var randomDish = document.querySelector('.random-dish')
var letsCookButton = document.querySelector('.cook-button');
var input = document.querySelectorAll(`input[name = 'course']`)

//Random number generator:
function random(array) {
	return Math.floor(Math.random() * array.length);
}
// event listeners:
clearButton.addEventListener('click', returnCookPot)

letsCookButton.addEventListener('click', function() {
	event.preventDefault()
	generateRandomDish()
})

// Functions: 

function generateRandomDish() {

	var course;
	for(var i = 0; i < input.length; i++) {
		if(input[i].checked) {
			switchPotAndText();
			course = eval(input[i].value);
			currentDish.innerHTML = course[random(course)];
		} 
	} uncheckButton()
}

function returnCookPot() {
	cookPot.classList.remove('hidden');
	randomDish.classList.add('hidden')
	clearButton.classList.add('hidden')
}

function switchPotAndText() {
	cookPot.classList.add('hidden');
	randomDish.classList.remove('hidden')
	clearButton.classList.remove('hidden')
}


