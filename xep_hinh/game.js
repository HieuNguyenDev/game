class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        document.body.appendChild(this.canvas);

        // create the board
        this.board = new board(this);

        // create the brick
        this.brick = new brick(this);

        // get keyboard
        this.listenKeyboard();

        // start the game
        this.startGame();

        // start the game loop
        this.loop();
    }

    listenKeyboard() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowUp' : this.brick.rotate(); break;
                case 'ArrowRight' : this.brick.moveRight(); break;
                case 'ArrowDown' : this.brick.moveDown(); break;
                case 'ArrowLeft' : this.brick.moveLeft(); break;
            }
        });
    }

    startGame() {
        setInterval( () => {
            this.brick.fall();
        }, 500);
    }

    createNewBrick() {
        this.brick = new brick(this); 
    }

    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 30);
    }

    update() {

    }

    clearScreen() {
        this.context.fillStyle = '#fff';
        this.context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }
 
     draw() {
        this.clearScreen();
        this.board.draw();
        this.brick.draw();
    }
}

var g = new game(); 