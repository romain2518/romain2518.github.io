/** Game module tree :
 *
 * Game :
 * |- init()
 * |- cases {}
 * |- loadLevel(level)
 * |- keydownHandler(event)
 * |- checkCase()
 * |- move
 *      |- up()
 *      |- right()
 *      |- down()
 *      |- left()
 * |- coordinates
 *      |- x
 *      |- y
 *      |- toggleDisplay()
 * |- map
 * |- touchstartHandler(event)
 * |- touchendHandler(event)
 * |- swipeVars
 *      |- startX       |- startY
 *      |- distX        |- distY
 *      |- startTime    |- elapsedTime
 *      |- minDist              //! Params     
 *      |- maxPerpDistAllowed   //! Params
 *      |- allowedTime          //! Params
 */

const game = {
    init: function () {
        game.loadLevel(0);
        
        //Load level selctor
        const selectorElm = document.querySelector('#levelSelector');
        let i = 0;
        levels.forEach(level => {
            const optionElm = document.createElement('option');
            optionElm.innerText = level.title;
            optionElm.value = i;

            selectorElm.appendChild(optionElm);
            i++;
        });

        selectorElm.addEventListener('change', function (event) {
            game.loadLevel(event.target.value);
        })

        //Keydown event
        document.addEventListener('keydown', game.keydownHandler);

        //Swipe events
        document.body.addEventListener('touchstart', game.touchstartHandler);
        document.body.addEventListener('touchend', game.touchendHandler);
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

        console.log('Level loaded');
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
    },
    checkCase: function () {
        if (document.querySelector(`section div:nth-child(${game.coordinates.y+1}) div:nth-child(${game.coordinates.x+1})`).classList.contains('house')) {
            window.alert('Victoire !!!');
            console.log('Win');
        }
    },
    move: {
        up: function () {
            if (game.coordinates.y <= 0) return; //Checks for the limits
            if (game.map[game.coordinates.y-1][game.coordinates.x] === 'x') return; //Checks for the walls

            game.coordinates.toggleDisplay();
            game.coordinates.y--;
            game.coordinates.toggleDisplay();
            game.checkCase();
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
    touchstartHandler: function (event) {
        game.swipeVars.startX = event.changedTouches[0].pageX;
        game.swipeVars.startY = event.changedTouches[0].pageY;

        game.swipeVars.startTime = new Date().getTime(); //Record time when finger first makes contact with surface
    },
    touchendHandler: function (event) {
        game.swipeVars.distX = event.changedTouches[0].pageX - game.swipeVars.startX;
        game.swipeVars.distY = event.changedTouches[0].pageY - game.swipeVars.startY;

        game.swipeVars.elapsedTime = new Date().getTime() - game.swipeVars.startTime;

        if (game.swipeVars.elapsedTime <= game.swipeVars.allowedTime) {
            if (Math.abs(game.swipeVars.distX) >= game.swipeVars.minDist && Math.abs(game.swipeVars.distY) <= game.swipeVars.maxPerpDistAllowed) { //Horizontal swipe
                if (game.swipeVars.distX < 0) { //Left swipe detected
                    game.move.left();
                } else { //Right swipe detected
                    game.move.right();
                }
            } else if (Math.abs(game.swipeVars.distY) >= game.swipeVars.minDist && Math.abs(game.swipeVars.distX) <= game.swipeVars.maxPerpDistAllowed) { //Vertical swipe
                if (game.swipeVars.distY < 0) { //Up swipe detected
                    game.move.up();
                } else { //Down swipe detected
                    game.move.down();
                }
            }
        }
    },
    swipeVars: {
        startX: null,
        startY: null,
        distX: null,
        distY: null,
        startTime: null,
        elapsedTime: null,
        //! Parameters for touches to be considered as swipes
        minDist: 150, //Required min distance traveled to be considered swipe
        maxPerpDistAllowed: 100, //Maximum distance allowed at the same time in perpendicular direction
        allowedTime: 300, //Maximum time allowed to travel the distance
    },
};