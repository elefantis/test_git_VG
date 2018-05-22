function Player(x, y) {
    // Características del jugador
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.speed = 4;
    this.direction = [ STAY, STAY ];
    this.firing = false;
    this.coldDownTime = 10;
    this.coldDown = 0; 

    // Comportamientos del jugador
    this.processInput = function() {
        if(keyStates[KEY_A] == true || keyStates[KEY_ARROW_LEFT] == true) {
            this.direction[LEFT_RIGHT] = LEFT;
        }
        if(keyStates[KEY_D] == true || keyStates[KEY_ARROW_RIGHT] == true) {
            this.direction[LEFT_RIGHT] = RIGHT;
        }
        if(keyStates[KEY_W] == true || keyStates[KEY_ARROW_UP] == true) {
            this.direction[UP_DOWN] = UP;
        }
        if(keyStates[KEY_S] == true || keyStates[KEY_ARROW_DOWN] == true) {
            this.direction[UP_DOWN] = DOWN;
        }
        if( keyStates[ KEY_SPACE ] == true ) {
            this.firing = true;
        }
    }

    this.update = function() {
        this.x = this.x + this.speed * this.direction[LEFT_RIGHT];
        this.y = this.y + this.speed * this.direction[UP_DOWN];
        this.direction = [ STAY, STAY ];
        // Dispara si está presionada la tecla de disparo y estamos 
        // con el tiempo de enfriamiento ok
        if( this.firing  && this.coldDown == 0 ) {
            level.spawnBullet( this.x + this.height / 2, this.y );
            this.coldDown = this.coldDownTime;
        }
        if( this.coldDown > 0 ) {
            this.coldDown--;
        }
        this.firing = false;

    }

    this.render = function() {
        context.fillRect( this.x, this.y, this.width, this.height );
        // context.beginPath();
        // context.moveTo( this.x + this.width / 2, this.y );
        // context.lineTo( this.x +  this.width, this.y + this.height );
        // context.lineTo( this.x, this.y + this.height );
        // context.lineTo( this.x + this.width / 2, this.y );
        // context.stroke( );
    }
}