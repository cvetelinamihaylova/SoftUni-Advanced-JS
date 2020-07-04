; (function game() {
    const gameStartEl = document.getElementById('game-start');
    const gameScoreValueEl = document.getElementById('score-value');
    const gameAreaEl = document.getElementById('game-area');
    const gameOverEl = document.getElementById('game-over');
    const wizardEl = document.getElementById('wizard');
    const config = {
        speed: 2,
        wizardMovingMultiplier: 4,
        fireBallMovingMultiplier: 5,
        fireInterval: 1000,
        cloudSpanInterval: 3000,
        bugSpanInterval: 1000,
        bugKillScore: 2000
    }

    const utils = {
        pxToNum(value) {
            return +value.replace('px', '');
        },
        numToPx(value) {
            return `${value}px`;
        },
        randomNumberBetween(min, max) {
            return Math.floor(Math.random() * max) + min;
        },
        hasCollision(el1, el2) {
            const el1Rect = el1.getBoundingClientRect();
            const el2Rect = el2.getBoundingClientRect();
            return !(
                el1Rect.top > el2Rect.bottom ||
                el1Rect.bottom < el2Rect.top ||
                el1Rect.right < el2Rect.left ||
                el1Rect.left > el2Rect.right
            );
        }
    }
    const wizardCoordinates = {
        wizard: wizardEl,
        set x(newX) {
            if (newX < 0) {
                newX = 0;
            } else if (newX + wizardEl.offsetWidth >= gameAreaEl.offsetWidth) {
                newX = gameAreaEl.offsetWidth - wizardEl.offsetWidth;
            }
            this.wizard.style.left = utils.numToPx(newX);
        },
        get x() {
            return utils.pxToNum(this.wizard.style.left);
        },
        set y(newY) {
            if (newY < 0) {
                newY = 0;
            } else if (newY + wizardEl.offsetHeight >= gameAreaEl.offsetHeight) {
                newY = gameAreaEl.offsetHeight - wizardEl.offsetHeight;
            }
            this.wizard.style.top = utils.numToPx(newY);
        },
        get y() {
            return utils.pxToNum(this.wizard.style.top);
        }
    }
    function createGamePlay() {
        return {
            loopId: null,
            nextRenderQueue: [],
            lastFireBallTimeStamp: 0,
            lastCloudTimeStamp: 0,
            lastBugTimeStamp: 0,
        }
    }
    let gamePlay;
    const pressedKeys = new Set();

    function init() {
        gamePlay = createGamePlay();
        gameScoreValueEl.innerText = 0;
        wizardEl.style.left = '200px';
        wizardEl.style.top = '200px';
        wizardEl.classList.remove('hide');
        gameOverEl.classList.add('hide');
        gameLoop(0);
    };
    const scene = {
        get fireBalls() {
            return Array.from(document.querySelectorAll('.fire-ball'));
        },
        get clouds() {
            return Array.from(document.querySelectorAll('.cloud'));
        },
        get bugs() {
            return Array.from(document.querySelectorAll('.bug'));
        },
    }
    function addElementFactory(className) {
        return function (x, y) {
            const element = document.createElement('div');
            element.classList.add(className);
            element.style.left = utils.numToPx(x);
            element.style.top = utils.numToPx(y);
            gameAreaEl.appendChild(element);
        }
    };

    const addFireBalls = addElementFactory('fire-ball');
    const addClouds = addElementFactory('cloud');
    const addBugs = addElementFactory('bug');

    const pressedKeyActionMap = {
        ArrowUp() {
            wizardCoordinates.y -= config.speed * config.wizardMovingMultiplier;
        },
        ArrowDown() {
            wizardCoordinates.y += config.speed * config.wizardMovingMultiplier;
        },
        ArrowLeft() {
            wizardCoordinates.x -= config.speed * config.wizardMovingMultiplier;

        },
        ArrowRight() {
            wizardCoordinates.x += config.speed * config.wizardMovingMultiplier;

        },
        Space(timestamp) {
            if (wizardEl.classList.contains('wizard-fire') ||
                timestamp - gamePlay.lastFireBallTimeStamp < config.fireInterval
            ) { return; }
            addFireBalls(wizardCoordinates.x + 50, wizardCoordinates.y + 20);
            gamePlay.lastFireBallTimeStamp = timestamp;
            wizardEl.classList.add('wizard-fire');
            gamePlay.nextRenderQueue = gamePlay.nextRenderQueue.concat(function clearWizardFire() {
                if (pressedKeys.has('Space')) { return false; }
                wizardEl.classList.remove('wizard-fire');
                return true;
            });
        }
    }

    function gameOver() {
        window.cancelAnimationFrame(gamePlay.loopId);
        gameOverEl.classList.remove('hide');
        gameStartEl.classList.remove('hide');
        scene.clouds.forEach(el=>{
            el.remove();
        });
        scene.bugs.forEach(el=>{
            el.remove();
        })
    };
    function processFireBalls() {
        scene.fireBalls.forEach(fbe => {
            let newX = (config.speed * config.fireBallMovingMultiplier) + utils.pxToNum(fbe.style.left);
            if (newX + fbe.offsetWidth > gameAreaEl.offsetWidth) {
                fbe.remove();
                return;
            }
            fbe.style.left = utils.numToPx(newX);
        })
    }

    function processNextRenderQueue() {
        gamePlay.nextRenderQueue = gamePlay.nextRenderQueue.reduce((acc, currFn) => {
            if (currFn()) { return acc };
            return acc.concat(currFn);
        }, []);
    };
    function processPressedKeys(timestamp) {
        pressedKeys.forEach(pressedKey => {
            const handler = pressedKeyActionMap[pressedKey];
            if (!handler) { return; }
            handler(timestamp);
        });
    };

    function processGameElementFactory(
        addFn,
        elementWidth,
        timestampName,
        sceneName,
        configName,
        additionalItemProcessor
    ) {
        return function (timestamp) {
            if (timestamp - gamePlay[timestampName] > config[configName]) {
                const x = gameAreaEl.offsetWidth - elementWidth;
                const y = utils.randomNumberBetween(0, gameAreaEl.offsetHeight - elementWidth);
                addFn(x, y);
                gamePlay[timestampName] = timestamp;
            }
            scene[sceneName].forEach(el => {
                const newX = utils.pxToNum(el.style.left) - config.speed;
                if (additionalItemProcessor && additionalItemProcessor(el)) { return; };
                if (newX + elementWidth < 0) { el.remove(); }
                el.style.left = utils.numToPx(newX)
            })
        }
    };
    function bugProcessor(el) {
        const fireball = scene.fireBalls.find(fb => utils.hasCollision(fb, el));
        if (fireball) {
            el.remove();
            fireball.remove();
            const currScore = +gameScoreValueEl.innerText
            gameScoreValueEl.innerText = currScore + config.bugKillScore;
            return true;
        }
        if (utils.hasCollision(el, wizardEl)) { gameOver(); return true; }
        return false;
    }
    const processClouds = processGameElementFactory(addClouds, 200, 'lastCloudTimeStamp', 'clouds', 'cloudSpanInterval')
    const processBugs = processGameElementFactory(addBugs, 60, 'lastBugTimeStamp', 'bugs', 'bugSpanInterval', bugProcessor);
    function applyGravity() {
        const isInAir = wizardCoordinates.y !== gameAreaEl.offsetHeight;
        if (isInAir) { wizardCoordinates.y += config.speed; }
    };

    function gameLoop(timestamp) {
        gamePlay.loopId = window.requestAnimationFrame(gameLoop);
        processPressedKeys(timestamp);
        processNextRenderQueue();
        processFireBalls();
        processClouds(timestamp);
        processBugs(timestamp);
        applyGravity();
        //gameScoreValueEl.innerText++
    };

    gameStartEl.addEventListener('click', function gameStartHandler() {
        gameStartEl.classList.add('hide');
        init();
    });
    document.addEventListener('keyup', function keyupHandler(e) { pressedKeys.delete(e.code); });
    document.addEventListener('keydown', function keydownHandler(e) { pressedKeys.add(e.code); });
})();