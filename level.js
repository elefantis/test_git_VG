function Level( ) {
    let gameObjects = [ ];
    gameObjects.push( new Player( 400, 550 ) );
    gameObjects.push( new Enemy ( Math.floor( Math.random() * WIDTH ), 100 ) );
    gameObjects.push( new Enemy ( Math.floor( Math.random() * WIDTH ), 100 ) );
    gameObjects.push( new Enemy ( Math.floor( Math.random() * WIDTH ), 100 ) );
    gameObjects.push( new Enemy ( Math.floor( Math.random() * WIDTH ), 100 ) );
    gameObjects.push( new Enemy ( Math.floor( Math.random() * WIDTH ), 100 ) );
    gameObjects.push( new Enemy ( Math.floor( Math.random() * WIDTH ), 100 ) );
    
    for ( let i = 0; i < 10; i++ ) {
        gameObjects.push( new Bullet(  ) );
    }

    // Comportamientos del jugador
    this.processInput = function( ) {
       gameObjects.forEach( ( gameObject ) => {
            gameObject.processInput( );
       } )
    }

    this.update = function( ) {
        gameObjects.forEach( ( gameObject ) => {
            gameObject.update( );
       } )
       this.verifyDamage( );
    }

    this.render = function( ) {
        gameObjects.forEach( ( gameObject ) => {
            gameObject.render( );
       } )
    }

    this.spawnBullet = function( x, y ) {
        // Buscar una bala disponible
        let bullet = gameObjects.filter( ( gameObject ) => {
            if ( gameObject.active == false ) { 
                return gameObject;
            }
        } ) [ 0 ];
        // Si encontro una bala, llamar a su funcion aparecer
        if( bullet ) {
            bullet.spawn( x, y );
        }
    }

    this.verifyDamage = function( ) {
        // Solo nos interesan los enemegos vivos y las balas activas
        let activeBullet = gameObjects.filter( ( gameObject ) => {
            if ( gameObject.active ) { 
                return gameObject;
            }
        } );
        let liveEnemies = gameObjects.filter( ( gameObject ) => {
            if ( gameObject.live ) { 
                return gameObject;
            }
        } );
        // Verificar si una bala activa ha collisionado a un enemigo activo
        activeBullet.forEach( ( bullet ) => {
            liveEnemies.forEach( ( enemy ) => {
              
                if (collision( bullet.x, bullet.y, bullet.width, bullet.height, 
                                enemy.x, enemy.y, enemy.width, enemy.height ) ) {
                    bullet.collision( );
                    enemy.receiveDamage( );
                }
            });
         } );
    }
}

function collision(ax, ay, aw, ah, bx, by, bw, bh) {
    return ax < bx + bw && ay < by + bh && bx < ax + aw && by < ay + ah;
};