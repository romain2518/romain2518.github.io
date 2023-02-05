const mainElm = document.querySelector('main');
const h1SpanElm = document.querySelector('header h1 span');


//Creating custom level form
let formElm = document.createElement('form');
let textareaElm = document.createElement('textarea');
textareaElm.placeholder = 'Texte du niveau personnalisé...';

let submitBtnElm = document.createElement('input');
submitBtnElm.type = 'submit';
submitBtnElm.value = 'Jouer le niveau personnalisé';

formElm.append(textareaElm, submitBtnElm);

//Preconstruction of game level elements
const backToLevelChoiceElm = document.createElement('a');
backToLevelChoiceElm.href = '#';
backToLevelChoiceElm.innerText = 'Retour au choix du niveau';

const templateElm = document.createElement('p');
const userProgressElm = document.createElement('p');
const winMsgElm = document.createElement('p');
winMsgElm.innerText = 'Bravo, vous avez terminé le inveau !!';


let levelId, progress;

const init = function () {
	h1SpanElm.innerText = 'Choix du niveau';
	
	//Clearing window
	mainElm.innerHTML = '';
	
	//Creating levels list
	let ulElm = document.createElement('ul');
	mainElm.appendChild(ulElm);
	for (let index = 0; index < levels.length; index++) {
		let liElm = document.createElement('li');
		let linkElm = document.createElement('a');
		linkElm.href = '#';
		linkElm.id = index;
		linkElm.innerText = levels[index].title;

		ulElm.appendChild(liElm);
		liElm.appendChild(linkElm);

		linkElm.addEventListener('click', loadLevel);
	}

	//Adding custom level form
	mainElm.appendChild(formElm);

	formElm.addEventListener('submit', function (event) {
		event.preventDefault();

		addCustomlLevel();
		loadLevel(null, levels.length -1);
	})

	console.log('init');
}


function checkNextLetter(keyEvent) {
	if (keyEvent.key === levels[levelId].text[progress]) {
		if (levels[levelId].text[progress-1] === ' ') { //Space characters must be added with another character
			userProgressElm.innerText += ' ' + keyEvent.key;
		} else {
			userProgressElm.innerText += keyEvent.key;
		}
		
		progress++;
		
		while (levels[levelId].text[progress] === '\n') {
			userProgressElm.innerHTML += '<br>';
			progress+= 4;
		}

		if (progress === levels[levelId].text.length) {
			//Display win message
			mainElm.appendChild(winMsgElm);

			console.log('Win');
		}
	}
}

function loadLevel(event, presetLevelId = null) {
	if (presetLevelId === null) {
		levelId = event.srcElement.id;
	} else {
		levelId = presetLevelId;
	}
	progress = 0;
	
	//Clear levels choice window
	mainElm.innerHTML = '';
	
	//Create level window
	h1SpanElm.innerText = levels[levelId].title;

	mainElm.appendChild(backToLevelChoiceElm);
	backToLevelChoiceElm.addEventListener('click', init);

	templateElm.innerText = levels[levelId].text;
	mainElm.appendChild(templateElm);
	
	userProgressElm.innerText = ''; //Reset content of last level played
	userProgressElm.style.top = '-' + templateElm.offsetHeight + 'px';
	mainElm.appendChild(userProgressElm);

	document.addEventListener('keydown', checkNextLetter)

	console.log('Level loaded');
}

function addCustomlLevel() {
	let newLevel = {
		title: 'Niveau personnalisé',
		text: textareaElm.value.replaceAll('\n', '\n \t\t').trim()
	}
	levels.push(newLevel);
}


init();