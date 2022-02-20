var cookPot = document.querySelector('.cook-pot');
var loading = document.querySelector('.loading')
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
			if(input[i].value === 'entire-meal') {
				unckeckButton(input[i]);
				entireMeal()
				loadAnimation()
			} else {
				loadAnimation()
				unckeckButton(input[i]);
				course = eval(input[i].value);
				currentDish.innerHTML = course[random(course)];
			}
		} 
	} 
}

function loadAnimation() {
	cookPot.classList.add('animation')
	loading.classList.remove('hidden',)
	loading.classList.add('animation2')
	setTimeout(switchPotAndText, 4000)
}

function entireMeal() {
	currentDish.innerHTML = `${mains[random(mains)]} with a side of ${sides[random(sides)]} and ${desserts[random(desserts)]} for dessert!`
}

function returnCookPot() {
	cookPot.classList.remove('hidden');
	randomDish.classList.add('hidden')
	cookPot.classList.remove('animation')
	clearButton.classList.add('hidden')
}

function switchPotAndText() {
	loading.classList.add('hidden')
	cookPot.classList.add('hidden');
	randomDish.classList.remove('hidden')
	clearButton.classList.remove('hidden')
}

function unckeckButton(input) {
	input.checked = false;
}
