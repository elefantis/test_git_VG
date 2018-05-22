function Enemy(x, y) {
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
    this.live = true;
    this.hp = 3;
    this.direction[ LEFT_RIGHT ] = RIGHT;
    let colors = [ "red", "purple", "lightgreen"];

    // Comportamientos del jugador
    this.processInput = function() {
        if( this.live ) {
            if( this.x + this.width >= WIDTH ) {
                this.direction[ LEFT_RIGHT ] = LEFT;
            }
            if( this.x <= 0 ) {
                this.direction[ LEFT_RIGHT ] = RIGHT;
            }
        }
    }

    this.update = function() {
        if ( this.live ) {
            this.x = this.x + this.speed * this.direction[LEFT_RIGHT];
            this.y = this.y + this.speed * this.direction[UP_DOWN];
        }
        if( this.hp <= 0 ) {
            this.live = false;
        }
    }

    this.render = function() {
        if( this.live ) {
            context.fillStyle = colors[ this.hp - 1 ];
            context.fillRect( this.x, this.y, this.width, this.height );
            context.fillStyle = "white";
        }
    }

    this.receiveDamage = function(  ) {
        this.hp--;
        if( this.hp <= 0 ) {
            this.live = false;
        }
    }

}