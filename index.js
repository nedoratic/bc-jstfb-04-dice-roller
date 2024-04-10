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
	dice.innerHTML = rollDice();
	display.appendChild(dice);
};
