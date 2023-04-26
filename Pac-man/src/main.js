import { Game } from './game.js'
import { Player } from './player.js'

let game = new Game()

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "Down": // IE/Edge specific value
        case "ArrowDown":
            game.downPressed = true;
            game.upPressed = false;

            break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
            game.upPressed = true;
            game.downPressed = false;

            // game.rightPressed = false;
            // game.leftPressed = false;

            break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
            game.leftPressed = true;
            game.rightPressed = false;

            // game.upPressed = false;
            // game.downPressed = false;

            break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
            game.rightPressed = true;
            game.leftPressed = false;

            // game.upPressed = false;
            // game.downPressed = false;

            break;

        default:
            return; // Quit when this doesn't handle the key event.
    }
})





// Página carregada
modalWin.style.visibility = 'hidden'
modalLose.style.visibility = 'hidden'
scoreStyle.style.visibility = 'hidden'

StartGame.addEventListener('click', () => {
    game.start()
    setInterval(game.update, 1000 / 60)
    setInterval(game.updateSprites, 1000 / 6)
    modalEl.style.display = 'none'
    scoreStyle.style.visibility = 'visible'
    game.canvas.style.border = '4px solid #51087E'
    game.canvas.style.boxShadow = '0px 0px 50px #51087E'
})

restartBtn.addEventListener('click', () => {
    window.location.reload(true)
})

againBtn.addEventListener('click', () => {
    window.location.reload(true)
})