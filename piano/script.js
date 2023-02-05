keys = document.querySelectorAll('#piano>div');
keyBinds = ['KeyA', 'KeyW', 'KeyS', 'KeyE', 'KeyD', 'KeyF', 'KeyT', 'KeyG', 'KeyY', 'KeyH', 'KeyU', 'KeyJ'];

function playNote(key) {
	currentNote = document.querySelector('audio[sound='+key.getAttribute('note')+']');
	currentNote.currentTime = 0;
	currentNote.play();

	key.classList.add('active');
	currentNote.addEventListener('ended', function () {
		key.classList.remove('active');
	});

}

keys.forEach(function (key) {
	key.addEventListener('click', function () {
		playNote(key);
	});
});

//Keybinds
document.addEventListener('keydown', function (keyPressed) {
	if (keyPressed.repeat) return; //Prevents key hold sound bug
	if (!keyBinds.includes(keyPressed.code)) return;
	playNote(keys[keyBinds.indexOf(keyPressed.code)]);
});