const game = {
	init: function () {
		//init game parameters
		game.parameters.stayDuration = 2000;
		game.parameters.gapDuration = 1000;
		game.parameters.cycleDuration = game.parameters.stayDuration + game.parameters.gapDuration;
		
		game.elms.stayDurationInput.value = game.parameters.stayDuration;
		game.elms.gapDurationInput.value = game.parameters.gapDuration;
		
		//Game param changer inputs Event listeners
		game.elms.stayDurationInput.addEventListener('change', function (event) {
			game.commands.stop();
			game.parameters.stayDuration = parseInt(event.currentTarget.value);
			game.parameters.cycleDuration = game.parameters.stayDuration + game.parameters.gapDuration;
		});

		game.elms.gapDurationInput.addEventListener('change', function (event) {
			game.commands.stop();
			game.parameters.gapDuration = parseInt(event.currentTarget.value);
			game.parameters.cycleDuration = game.parameters.stayDuration + game.parameters.gapDuration;
		});

		//Command event listeners
		document.querySelector('nav>button:first-child').addEventListener('click', game.commands.start);
		document.querySelector('nav>button:nth-child(2)').addEventListener('click', game.commands.pause);
		document.querySelector('nav>button:last-child').addEventListener('click', game.commands.stop);

		//Buttons event listeners
		game.elms.buttons.forEach(button => {
			button.addEventListener('click', game.checkButton);
		});

		//Buttons keybinds
		const buttonShortcuts = ['KeyQ', 'KeyW', 'KeyE', 'KeyA', 'KeyD', 'KeyZ', 'KeyX', 'KeyC', 'Numpad7', 'Numpad8', 'Numpad9', 'Numpad4', 'Numpad6', 'Numpad1', 'Numpad2', 'Numpad3'];

		document.addEventListener('keydown', function (keyEvent) {
			if (keyEvent.repeat) return;
			if (buttonShortcuts.includes(keyEvent.code)) {
				game.elms.buttons[buttonShortcuts.indexOf(keyEvent.code)].classList.add('active');
				
				game.elms.buttons[buttonShortcuts.indexOf(keyEvent.code)].click();

				setTimeout(function () {
					game.elms.buttons[buttonShortcuts.indexOf(keyEvent.code)].classList.remove('active');
				}, 100);
			}
		});
	},
	
	commands: {
		start: function () {
			game.status.isPaused = false;
			if (!game.gameInterval) {
				game.flashCase(); //Force the game to start at the same time as the game interval 
				game.gameInterval = setInterval(game.flashCase, game.parameters.cycleDuration);
			}

			console.log('Game started');
		},
		pause: function () {
			game.status.isPaused = true;
	
			console.log('Game paused');
		},
		stop: function () {
			clearInterval(game.gameInterval);
			game.gameInterval = null;

			game.elms.firstOutput.innerText = game.status.score;
			game.elms.secondOutput.innerText = 0;
			game.status.score = 0;
			game.elms.timerOutput.innerText = 0;
			game.status.timer = 0;

			console.log('Game finished');
		},
	},

	status: {
		isPaused: false,
		score: 0,
		timer: 0,
	},

	parameters: {
		stayDuration: undefined,
		gapDuration: undefined,
		cycleDuration: undefined,
	},

	elms: {
		randomButton: null,
		buttons: document.querySelectorAll('article>button'),
		firstOutput: document.querySelector('output:first-child'),
		secondOutput: document.querySelector('output:last-child'),
		timerOutput: document.querySelector('#timer output'),
		stayDurationInput: document.querySelector('#stayDuration'),
		gapDurationInput: document.querySelector('#gapDuration'),
	},

	flashCase: function () {
		if (!game.status.isPaused) {
			game.elms.randomButton = game.elms.buttons[Math.floor(Math.random()*game.elms.buttons.length)];
		
			game.elms.randomButton.classList.add('toClick');
			setTimeout(function () {
				if (game.elms.randomButton !== null) {
					game.elms.randomButton.classList.remove('toClick');
					game.commands.stop();
				}
			}, game.parameters.stayDuration);

			game.status.timer += game.parameters.cycleDuration/1000;
			game.elms.timerOutput.innerText = game.status.timer;
		}
	},

	checkButton: function (event) {
		if (event.target === game.elms.randomButton) {
			game.status.score++;
			game.elms.randomButton.classList.remove('toClick');
			game.elms.randomButton = null;
			game.elms.secondOutput.innerText = game.status.score;
		} else {
			game.commands.stop();
		}
	},

	gameInterval: null,
};