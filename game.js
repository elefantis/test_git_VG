 // Creamos un lienzo
 var canvas = document.createElement( "canvas" );
 var keyStates = [];
 // Insertamos el lienzo dentro de la página
 document.getElementById( "game" ).appendChild( canvas );
 // Colorear el lienzo
 canvas.style.backgroundColor = "black";
 canvas.width = WIDTH;
 canvas.height = HEIGHT;
 // Generar el lápiz
 var context = canvas.getContext("2d");
 context.strokeStyle = "white";
 context.fillStyle = "white";
 // Activar entradas de teclado
 document.addEventListener( "keydown", function( key ) {
    keyStates[ key.keyCode ] = true;
    // console.log( key.key, key.keyCode )
 });
 document.addEventListener( "keyup", function( key ) {
    keyStates[ key.keyCode ] = false;
 });
var level = new Level( );

 // Iniciar el ciclo dle juego
setInterval( gameLoop, MILISECONDS_PER_FRAME );



function gameLoop() {
    processInput();
    update();
    render();
}

function processInput() {
   level.processInput( );
}

function update() {
   level.update( );
}

function render( ) {
    context.clearRect( 0, 0, WIDTH, HEIGHT );
    level.render( );
}
