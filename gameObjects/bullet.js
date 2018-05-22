function Bullet( ) {
    // Características del jugador
    this.x = 0;
    this.y = 0;
    this.width = 6;
    this.height = 12;
    this.speed = 10;
    this.direction = [ STAY, STAY ];
    this.active = false;

    // Comportamientos del jugador
    this.processInput = function() {
        if( this.active ) {
            this.direction[UP_DOWN] = UP;
        }
    }

    this.update = function() {
        if( this.active ) {
            this.x = this.x + this.speed * this.direction[LEFT_RIGHT];
            this.y = this.y + this.speed * this.direction[UP_DOWN];
            this.direction = [ STAY, STAY ];
            // Si la bala sale de la pantalla, desactivar
            if( this.y + this.height < 0  ) {
                this.active = false;
            }
        }
    }

    this.render = function() {
        if( this.active ) {
            context.fillRect( this.x, this.y, this.width, this.height );
        }                
    }

    // Esta Bala va a aparecer
    this.spawn = function( x, y ) {
        this.x = x;
        this.y = y;
        this.active = true;
    }

    this.collision = function ( ) {
        this.active = false;
    }
}