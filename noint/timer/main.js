const initialValues = [
	{label: "Bromine", value: "br"},
	{label: "Oxygen", value: "o"},
	{label: "Hydrogen", value: "h"},
	{label: "Silver", value: "ag"},
	{label: "Copper", value: "cu"},
	{label: "Iron", value: "fe"},
	{label: "Gold", value: "au"},
	{label: "Helium", value: "he"},
	{label: "Platinum", value: "pt"},
	{label: "Nitrogen", value: "n"},
	{label: "Carbon", value: "c"},
	{label: "Phosphorus", value: "p"},
	{label: "Fluorine", value: "f"},
	{label: "Calcium", value: "ca"},
	{label: "Potassium", value: "k"},
	{label: "Magnesium", value: "mg"},
	{label: "Zinc", value: "zn"},
	{label: "Aluminium", value: "al"},
	{label: "Barium", value: "ba"},
	{label: "Chlorine", value: "cl"},
	{label: "Sodium", value: "na"},
];

const startBtn   = document.querySelector('#startBtn');
const restartBtn = document.querySelector('#restartBtn');

const phase1 = document.querySelector('#phase1');
const phase2 = document.querySelector('#phase2');
const phase3 = document.querySelector('#phase3');

const answer   = document.querySelector('#answer');
const question = document.querySelector('#question');
const timer    = document.querySelector('#timer');
const result   = document.querySelector('#result');
const picture  = document.querySelector('#picture');

let currentElement;
let answers;
let elements;
let INTERVAL;
let TIMEOUT;

const ENTER_CODE    = 13;
const START_TIME    = 30000;
const TIME_INTERVAL = 100;

startBtn.onclick = function() {
	phase1.classList.add('hidden');
	phase2.classList.remove('hidden');
	initGame();
};

restartBtn.onclick = function() {
	phase3.classList.add('hidden');
	phase1.classList.remove('hidden');
	result.textContent = '';
};

answer.addEventListener('keydown', submit);

function initGame() {
	timer.textContent = 30;
	answers = {	right: 0, wrong: 0};
	console.log(answers);
	elements = [...initialValues];
	updateQuestion();
	INTERVAL = setInterval(updateTimer, TIME_INTERVAL);
	TIMEOUT = setTimeout(stopGame, START_TIME);
}

function updateTimer() {
	timer.textContent = (+timer.textContent - TIME_INTERVAL / 1000).toFixed(1);
}

function submit(event) {
	if (event.keyCode !== ENTER_CODE) {
		return;
	}
	const {value} = answer;
	answer.value = '';

	if (value.toLowerCase() === currentElement.value) {
		answers.right++;
	} else {
		answers.wrong++;
	}

	if (!elements.length) {
		stopGame();
	} else {
		updateQuestion();
	}
}

function updateQuestion() {
	currentElement = pickElement(elements);
	question.textContent = currentElement.label;
}

function pickElement(arr) {
	const index = Math.random() * arr.length | 0;
	return arr.splice(index, 1)[0];
}

function stopGame() {
	answer.value = '';

	phase2.classList.add('hidden');
	phase3.classList.remove('hidden');

	clearInterval(INTERVAL);
	clearTimeout(TIMEOUT);

	rank();
}

function rank() {
	let resultText = `You got ${answers.right} right answers.` + '<br />' +
									 `You got ${answers.wrong} wrong answers.` + '<br />';
	if (answers.right > answers.wrong) {
			resultText += `You have ${answers.right - answers.wrong}% discount in our drug store`;
			picture.src = "./images/2.jpg";
	} else {
			resultText += `To get a discount in our drug store you can RESTART the game`;
			picture.src = "./images/3.png";
	}
	result.innerHTML = resultText;
}
