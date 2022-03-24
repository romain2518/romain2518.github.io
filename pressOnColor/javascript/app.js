const buttonsElms = document.querySelectorAll('article>button');
const buttonShortcuts = ['KeyQ', 'KeyW', 'KeyE', 'KeyA', 'KeyD', 'KeyZ', 'KeyX', 'KeyC', 'Numpad7', 'Numpad8', 'Numpad9', 'Numpad4', 'Numpad6', 'Numpad1', 'Numpad2', 'Numpad3'];
const firstOutputElm = document.querySelector('output:first-child');
const secondOutputElm = document.querySelector('output:last-child');

let randomBtn, gameInterval, isPaused;
let scoreCounter = 0;

//Parameters
const stayDuration = 2000;
const gapDuration = 1000;
const cycleDuration = stayDuration + gapDuration;




function checkButton(event) {
	if (event.target === randomBtn) {
		scoreCounter++;
		randomBtn.classList.remove('toClick');
		randomBtn = null;
		secondOutputElm.innerText = scoreCounter;
	} else {
		stopGame();
	}
}



function flashCase() {
	if (!isPaused) {
		randomBtn = buttonsElms[Math.floor(Math.random()*buttonsElms.length)];
		
		randomBtn.classList.add('toClick');
		setTimeout(function () {
			if (randomBtn !== null) {
				randomBtn.classList.remove('toClick');
				stopGame();
			}
		}, stayDuration);
	}
}


//#region command functions
function startGame() {
	isPaused = false;
	if (!gameInterval) {	
		gameInterval = setInterval(flashCase, cycleDuration);
	}

	console.log('Game started');
}

function pauseGame() {
	isPaused = true;

	console.log('Game paused');
}

function stopGame() {
	clearInterval(gameInterval);
	gameInterval = null;

	firstOutputElm.innerText = scoreCounter;
	secondOutputElm.innerText = 0;
	scoreCounter = 0;

	console.log('Game finished');
}
//#endregion command functions


buttonsElms.forEach(button => {
	button.addEventListener('click', checkButton);
});

//Keybinds
document.addEventListener('keydown', function (keyEvent) {
	if (keyEvent.repeat) return;
	if (buttonShortcuts.includes(keyEvent.code)) {
		buttonsElms[buttonShortcuts.indexOf(keyEvent.code)].classList.add('active');

		buttonsElms[buttonShortcuts.indexOf(keyEvent.code)].click();

		setTimeout(function () {
			buttonsElms[buttonShortcuts.indexOf(keyEvent.code)].classList.remove('active');
		}, 100);
	}
});


//Command event listeners
document.querySelector('nav>button:first-child').addEventListener('click', startGame);
document.querySelector('nav>button:nth-child(2)').addEventListener('click', pauseGame);
document.querySelector('nav>button:last-child').addEventListener('click', stopGame);
