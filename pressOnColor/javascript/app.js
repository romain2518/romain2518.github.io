const buttonsElms = document.querySelectorAll('article>button');
const buttonShortcuts = ['KeyQ', 'KeyW', 'KeyE', 'KeyA', 'KeyD', 'KeyZ', 'KeyX', 'KeyC', 'Numpad7', 'Numpad8', 'Numpad9', 'Numpad4', 'Numpad6', 'Numpad1', 'Numpad2', 'Numpad3'];

let randomBtn, gameInterval, isPaused;

//Parameters
const stayDuration = 500;
const gapDuration = 250;
const cycleDuration = stayDuration + gapDuration;


function flashCase() {
	if (!isPaused) {
		randomBtn = buttonsElms[Math.floor(Math.random()*buttonsElms.length)];
		
		randomBtn.classList.add('toClick');
		setTimeout(function () {
			randomBtn.classList.remove('toClick');
		}, stayDuration);
	}
}

function startGame() {
	isPaused = false;
	if (!gameInterval) {	
		gameInterval = setInterval(flashCase, cycleDuration);
	}
}

function pauseGame() {
	isPaused = true;
}

function stopGame() {
	clearInterval(gameInterval);
	gameInterval = null;
}








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

document.querySelector('nav>button:first-child').addEventListener('click', startGame);
document.querySelector('nav>button:nth-child(2)').addEventListener('click', pauseGame);
document.querySelector('nav>button:last-child').addEventListener('click', stopGame);
