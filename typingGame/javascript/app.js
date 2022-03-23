const mainElm = document.querySelector('main');
const h1SpanElm = document.querySelector('header h1 span');

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

	console.log('init');
}


function loadLevel(event) {
	levelId = event.srcElement.id;
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

function checkNextLetter(keyEvent) {
	if (keyEvent.key === levels[levelId].text[progress]) {
		if (levels[levelId].text[progress-1] === ' ') { //Space characters must be added with another character
			userProgressElm.innerText += ' ' + keyEvent.key;
		} else {
			userProgressElm.innerText += keyEvent.key;
		}
		
		progress++;
		
		if (levels[levelId].text[progress] === '\n') {
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


init();