// Buttons
const btnAddDice = document.querySelector('.btn--add-dice');
const btnRemoveDice = document.querySelector('.btn--remove-dice');
const btnReset = document.querySelector('.btn--reset');
const btnRollDice = document.querySelector('.btn--roll-dice');

// Display
const display = document.querySelector('.app__display');

// Get random number from 1 to 6
const getRandomNumber = () => Math.floor(Math.random() * 6) + 1;

// Add Dice
const addDice = () => {
	const dice = document.createElement('div');
	dice.classList.add('dice');
	const number = getRandomNumber();
	const imgSrc = `./img/${number}.svg`;
	dice.innerHTML = `<img src="${imgSrc}" alt="Dice ${number}" />`;
	display.appendChild(dice);
};

// Remove Dice
const removeDice = () => {
	const dice = document.querySelector('.dice');
	if (dice) {
		display.removeChild(dice);
	}
};

// Reset
const reset = () => {
	display.innerHTML = '';
};

// Roll Dice
const rollDice = () => {
	const diceElements = document.querySelectorAll('.dice');
	diceElements.forEach((dice) => {
		const number = getRandomNumber();
		const imgSrc = `./img/${number}.svg`;
		dice.innerHTML = `<img src="${imgSrc}" alt="Dice ${number}" />`;
	});
};

// Event Listeners
btnAddDice.addEventListener('click', addDice);
btnRemoveDice.addEventListener('click', removeDice);
btnReset.addEventListener('click', reset);
btnRollDice.addEventListener('click', rollDice);
