const game = {
    init: function () {
        game.loadLevel(1);
        
        document.addEventListener('keyup', game.keydownHandler);
    },
    cases: {
        x: 'wall',
        o: 'empty',
        F: 'fox',
        H: 'house',
    },
    loadLevel: function (level) {
        const mazeElm = document.querySelector('section');

        document.querySelector('h2 span').innerText = levels[level].title;
        game.map = levels[level].map

        game.map.forEach(line => {
            const lineElm = document.createElement('div');

            line.split('').forEach(caseChara => {
                const caseElm = document.createElement('div');
                caseElm.classList.add(game.types[caseChara]);

                lineElm.appendChild(caseElm);
            });

            mazeElm.appendChild(lineElm);
        });
    },
    keydownHandler: function (event) {
        if (event.repeat) return;
        switch (event.code) {
            case 'ArrowUp' || 'KeyW':
                game.move.up();
                break;
            case 'ArrowRight' || 'KeyD':
                game.move.right();
                break;
            case 'ArrowDown' || 'KeyS':
                game.move.down();
                break;
            case 'ArrowLeft' || 'KeyA':
                game.move.left();
                break;
        }
        game.checkCase();
    },
    checkCase: function () {
        if (document.querySelector(`section div:nth-child(${game.coordinates.y+1}) div:nth-child(${game.coordinates.x+1})`).classList.contains('goal')) {
            window.alert('Victoire !!!');

            //Manuel reset
            document.querySelector('.terrain_de_jeu').innerHTML = '';
            document.removeEventListener('keydown', game.keydownHandler);
            game.coordinates.x = 2;
            game.coordinates.y = 7;

            game.init();
        }
    },
    move: {
        up: function () {
            if (game.coordinates.y <= 0) return; //Checks for the limits
            if (model[game.coordinates.y-1][game.coordinates.x] === 'x') return; //Checks for the walls

            game.coordinates.toggleDisplay();
            game.coordinates.y--;
            game.coordinates.toggleDisplay();
        },
        right: function () {
            if (game.coordinates.x >= model[0].length-1) return;
            if (model[game.coordinates.y][game.coordinates.x+1] === 'x') return;

            game.coordinates.toggleDisplay();
            game.coordinates.x++;
            game.coordinates.toggleDisplay();
        },
        down: function () {
            if (game.coordinates.y >= model.length-1) return;
            if (model[game.coordinates.y+1][game.coordinates.x] === 'x') return;

            game.coordinates.toggleDisplay();
            game.coordinates.y++;
            game.coordinates.toggleDisplay();
        },
        left: function () {
            if (game.coordinates.x <= 0) return;
            if (model[game.coordinates.y][game.coordinates.x-1] === 'x') return;

            game.coordinates.toggleDisplay();
            game.coordinates.x--;
            game.coordinates.toggleDisplay();
        },
    },
    coordinates: {
        x: null,
        y: null,
        toggleDisplay: function () {
            document.querySelector(`.square:nth-child(${game.coordinates.y*game.map[0].length + game.coordinates.x+1})`).classList.toggle('fox');
        },
    },
    map: null,
};