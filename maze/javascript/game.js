const game = {
    init: function () {
        game.loadLevel(0);
        
        document.addEventListener('keydown', game.keydownHandler);
    },
    cases: {
        'x': 'wall',
        'o': 'empty',
        'F': 'fox',
        'H': 'house',
    },
    loadLevel: function (level) {
        const mazeElm = document.querySelector('section');

        //Clear window
        mazeElm.innerHTML = '';

        document.querySelector('h2 span').innerText = levels[level].title;
        game.map = levels[level].map

        const maxSizeX = `calc(90vw / ${game.map[0].length})`;
        const maxSizeY = `calc(90vh / ${game.map[0].length})`;
        
        //New stylesheet adapting sizes
        const styleElm = document.head.appendChild(document.createElement('style'));
        styleElm.innerHTML = `section div div {
            width: min(${maxSizeX}, ${maxSizeY});
            height: min(${maxSizeX}, ${maxSizeY});
        }   
        `;
        
        let y = 0;
        game.map.forEach(line => {
            const lineElm = document.createElement('div');

            let x = 0;

            line.split('').forEach(caseChara => {
                if (caseChara === 'F') {
                    game.coordinates.x = x;
                    game.coordinates.y = y;
                }

                const caseElm = document.createElement('div');
                caseElm.classList.add(game.cases[caseChara]);
                
                if (caseChara === 'F' || caseChara === 'H') {
                    caseElm.classList.add(game.cases.o);
                }

                lineElm.appendChild(caseElm);
                x++;
            });

            mazeElm.appendChild(lineElm);
            y++;
        });
    },
    keydownHandler: function (event) {
        if (event.repeat) return;
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                game.move.up();
                break;
            case 'ArrowRight':
            case 'KeyD':
                game.move.right();
                break;
            case 'ArrowDown':
            case 'KeyS':
                game.move.down();
                break;
            case 'ArrowLeft':
            case 'KeyA':
                game.move.left();
                break;
        }
        game.checkCase();
    },
    checkCase: function () {
        if (document.querySelector(`section div:nth-child(${game.coordinates.y+1}) div:nth-child(${game.coordinates.x+1})`).classList.contains('house')) {
            window.alert('Victoire !!!');
        }
    },
    move: {
        up: function () {
            if (game.coordinates.y <= 0) return; //Checks for the limits
            if (game.map[game.coordinates.y-1][game.coordinates.x] === 'x') return; //Checks for the walls

            game.coordinates.toggleDisplay();
            game.coordinates.y--;
            game.coordinates.toggleDisplay();
        },
        right: function () {
            if (game.coordinates.x >= game.map[0].length-1) return;
            if (game.map[game.coordinates.y][game.coordinates.x+1] === 'x') return;

            game.coordinates.toggleDisplay();
            game.coordinates.x++;
            game.coordinates.toggleDisplay();
        },
        down: function () {
            if (game.coordinates.y >= game.map.length-1) return;
            if (game.map[game.coordinates.y+1][game.coordinates.x] === 'x') return;

            game.coordinates.toggleDisplay();
            game.coordinates.y++;
            game.coordinates.toggleDisplay();
        },
        left: function () {
            if (game.coordinates.x <= 0) return;
            if (game.map[game.coordinates.y][game.coordinates.x-1] === 'x') return;

            game.coordinates.toggleDisplay();
            game.coordinates.x--;
            game.coordinates.toggleDisplay();
        },
    },
    coordinates: {
        x: null,
        y: null,
        toggleDisplay: function () {
            document.querySelector(`section div:nth-child(${game.coordinates.y+1}) div:nth-child(${game.coordinates.x+1})`).classList.toggle('fox');
        },
    },
    map: null,
};