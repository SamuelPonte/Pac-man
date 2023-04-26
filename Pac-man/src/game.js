import { Component } from './component.js'
import { Pellet } from './component.js'
import { Player } from './player.js'

export class Game {
    constructor() {
        this.canvas = document.getElementById("jogo")
        this.ctx = this.canvas.getContext('2d')


        this.scoreEl = document.getElementById("#scoreEl")
        this.StartGame = document.getElementById('#StartGame')
        this.modalEl = document.getElementById('#modalEl')
        this.EndWin = document.getElementById('#EndWin')
        this.modalWin = document.getElementById('#modalWin')
        this.EndLose = document.getElementById('#EndLose')
        this.modalLose = document.getElementById('#modalLose')
        this.scoreStyle = document.getElementById('#scoreStyle')
        this.restartBtn = document.getElementById('#restartBtn')
        this.againBtn = document.getElementById('#againBtn')

        this.wakaSound = new Audio("sounds/waka.wav")
        this.WinSound = new Audio("sounds/gameWin.wav")
        this.OverSound = new Audio("sounds/gameOver.wav")

        this.angle = 0;

        this.pontos = []
        this.enemys = []
        this.rect = []

        this.player = new Player(0, 40, 20, 5, "rgb(255,255,0)")

        this.leftPressed = false;
        this.upPressed = false;
        this.rightPressed = false;
        this.downPressed = false;

        this.score = 0;
        this.bolinhas = 0;
        this.endplay = false;
        this.Overplayed = false;
    }

    start = () => {
        // parte de cima
        let pontos1 = new Pellet(70, 60, 5, 0, "white")
        let pontos2 = new Pellet(140, 60, 5, 0, "white")
        let pontos3 = new Pellet(210, 60, 5, 0, "white")
        let pontos4 = new Pellet(280, 60, 5, 0, "white")
        let pontos5 = new Pellet(350, 60, 5, 0, "white")
        let pontos6 = new Pellet(420, 60, 5, 0, "white")
        let pontos7 = new Pellet(490, 60, 5, 0, "white")
        let pontos8 = new Pellet(560, 60, 5, 0, "white")
        let pontos9 = new Pellet(630, 60, 5, 0, "white")
        let pontos10 = new Pellet(680, 60, 5, 0, "white")
        // lado direito
        let pontos11 = new Pellet(680, 100, 5, 0, "white")
        let pontos12 = new Pellet(680, 150, 5, 0, "white")
        let pontos13 = new Pellet(680, 200, 5, 0, "white")
        let pontos14 = new Pellet(680, 250, 5, 0, "white")
        let pontos15 = new Pellet(680, 290, 5, 0, "white")
        let pontos16 = new Pellet(680, 330, 5, 0, "white")
        let pontos17 = new Pellet(680, 380, 5, 0, "white")
        let pontos18 = new Pellet(680, 430, 5, 0, "white")
        let pontos19 = new Pellet(680, 480, 5, 0, "white")
        // parte de baixo
        let pontos20 = new Pellet(70, 520, 5, 0, "white")
        let pontos21 = new Pellet(140, 520, 5, 0, "white")
        let pontos22 = new Pellet(210, 520, 5, 0, "white")
        let pontos23 = new Pellet(280, 520, 5, 0, "white")
        let pontos24 = new Pellet(350, 520, 5, 0, "white")
        let pontos25 = new Pellet(420, 520, 5, 0, "white")
        let pontos26 = new Pellet(490, 520, 5, 0, "white")
        let pontos27 = new Pellet(560, 520, 5, 0, "white")
        let pontos28 = new Pellet(630, 520, 5, 0, "white")
        // lado esquerdo
        let pontos29 = new Pellet(20, 100, 5, 0, "white")
        let pontos30 = new Pellet(20, 150, 5, 0, "white")
        let pontos31 = new Pellet(20, 200, 5, 0, "white")
        let pontos32 = new Pellet(20, 250, 5, 0, "white")
        let pontos33 = new Pellet(20, 290, 5, 0, "white")
        let pontos34 = new Pellet(20, 330, 5, 0, "white")
        let pontos35 = new Pellet(20, 380, 5, 0, "white")
        let pontos36 = new Pellet(20, 430, 5, 0, "white")
        let pontos37 = new Pellet(20, 480, 5, 0, "white")
        let pontos38 = new Pellet(20, 520, 5, 0, "white")
        //centro vertical
        let pontos39 = new Pellet(350, 100, 5, 0, "white")
        let pontos40 = new Pellet(350, 150, 5, 0, "white")
        let pontos41 = new Pellet(350, 200, 5, 0, "white")
        let pontos42 = new Pellet(350, 250, 5, 0, "white")
        let pontos43 = new Pellet(350, 290, 5, 0, "white")
        let pontos44 = new Pellet(350, 330, 5, 0, "white")
        let pontos45 = new Pellet(350, 380, 5, 0, "white")
        let pontos46 = new Pellet(350, 430, 5, 0, "white")
        let pontos47 = new Pellet(350, 480, 5, 0, "white")
        //centro horizental
        let pontos48 = new Pellet(70, 290, 5, 0, "white")
        let pontos49 = new Pellet(140, 290, 5, 0, "white")
        let pontos50 = new Pellet(210, 290, 5, 0, "white")
        let pontos51 = new Pellet(280, 290, 5, 0, "white")
        let pontos52 = new Pellet(350, 290, 5, 0, "white")
        let pontos53 = new Pellet(420, 290, 5, 0, "white")
        let pontos54 = new Pellet(490, 290, 5, 0, "white")
        let pontos55 = new Pellet(560, 290, 5, 0, "white")
        let pontos56 = new Pellet(630, 290, 5, 0, "white")

        this.pontos.push(pontos1)
        this.pontos.push(pontos2)
        this.pontos.push(pontos3)
        this.pontos.push(pontos4)
        this.pontos.push(pontos5)
        this.pontos.push(pontos6)
        this.pontos.push(pontos7)
        this.pontos.push(pontos8)
        this.pontos.push(pontos9)
        this.pontos.push(pontos10)
        this.pontos.push(pontos11)
        this.pontos.push(pontos12)
        this.pontos.push(pontos13)
        this.pontos.push(pontos14)
        this.pontos.push(pontos15)
        this.pontos.push(pontos16)
        this.pontos.push(pontos17)
        this.pontos.push(pontos18)
        this.pontos.push(pontos19)
        this.pontos.push(pontos20)
        this.pontos.push(pontos21)
        this.pontos.push(pontos22)
        this.pontos.push(pontos23)
        this.pontos.push(pontos24)
        this.pontos.push(pontos25)
        this.pontos.push(pontos26)
        this.pontos.push(pontos27)
        this.pontos.push(pontos28)
        this.pontos.push(pontos29)
        this.pontos.push(pontos30)
        this.pontos.push(pontos31)
        this.pontos.push(pontos32)
        this.pontos.push(pontos33)
        this.pontos.push(pontos34)
        this.pontos.push(pontos35)
        this.pontos.push(pontos36)
        this.pontos.push(pontos37)
        this.pontos.push(pontos38)
        this.pontos.push(pontos39)
        this.pontos.push(pontos40)
        this.pontos.push(pontos41)
        this.pontos.push(pontos42)
        this.pontos.push(pontos43)
        this.pontos.push(pontos44)
        this.pontos.push(pontos45)
        this.pontos.push(pontos46)
        this.pontos.push(pontos47)
        this.pontos.push(pontos48)
        this.pontos.push(pontos49)
        this.pontos.push(pontos50)
        this.pontos.push(pontos51)
        this.pontos.push(pontos52)
        this.pontos.push(pontos53)
        this.pontos.push(pontos54)
        this.pontos.push(pontos55)
        this.pontos.push(pontos56)

        const enemyImg = new Image();
        enemyImg.src = "../Image/ghost.png"

        let enemy = new Pellet(660, 500, 20, 5, undefined, enemyImg)
        this.enemys.push(enemy);

        let rect1 = new Component(40, 80, 290, 190, 0, "#51087E")
        let rect2 = new Component(370, 80, 290, 190, 0, "#51087E")
        let rect3 = new Component(40, 310, 290, 190, 0, "#51087E")
        let rect4 = new Component(370, 310, 290, 190, 0, "#51087E")

        this.rect.push(rect1)
        this.rect.push(rect2)
        this.rect.push(rect3)
        this.rect.push(rect4)

    }

    update = () => {

        this.player.move(this)

        // verificar colisões
        this.pontos.forEach((ponto, index) => {
            if (ponto.collidesWith(this.player)) {
                this.wakaSound.play();
                //remove os pontos
                this.pontos.splice(index, 1)
                this.score += 100;
                this.bolinhas += 1;
                scoreEl.innerHTML = this.score;
            }
            if (this.bolinhas == 56) {
                this.WinSound.play();
                this.endplay = true;
                modalWin.style.visibility = 'visible'

            }
        })

        this.enemys.forEach((enemy) => {

            //Up
            if (enemy.y > 40 && (enemy.x == 0 || enemy.x == 330 || enemy.x == 660) && this.endplay == false) {
                if (this.player.y  < enemy.y) {
                    enemy.y -= enemy.speed
                }
            }

            //Left
            if (enemy.x > 0 && (enemy.y == 40 || enemy.y == 270 || enemy.y == 500) && this.endplay == false) {
                if (this.player.x  < enemy.x) {
                    enemy.x -= enemy.speed
                }
            }

            //Right
            if (enemy.x < 660 && (enemy.y == 40 || enemy.y == 270 || enemy.y == 500) && this.endplay == false) {
                if (this.player.x  > enemy.x) {
                    enemy.x += enemy.speed
                }
            }

            //Down
            if (enemy.y < this.canvas.height - 40 && (enemy.x == 0 || enemy.x == 330 || enemy.x == 660) && this.endplay == false) {
                if (this.player.y  > enemy.y) {
                    enemy.y += enemy.speed
                }
            }

            //Died
            if (enemy.collidesWith(this.player)) {
                if (!this.Overplayed) {
                    this.OverSound.play();
                    this.Overplayed = true;
                }
                this.endplay = true;
                modalLose.style.visibility = 'visible'

            }
        })


        this.draw()
    }

    draw = () => {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        //fundo preto
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(0, 0, 700, 540)
        //Pontos e vida
        this.ctx.fillStyle = "#51087E"
        this.ctx.fillRect(0, 0, 700, 40)

        this.rect.forEach(rect => {
            rect.render(this.ctx)
        })

        this.pontos.forEach(pontos => {
            pontos.render1(this.ctx)
        })

        this.player.render1(this.ctx)

        this.enemys.forEach(enemys => {
            enemys.render1(this.ctx)
        })

    }

    updateSprites = () => {
        this.player.currentFrame++
        this.player.currentFrame = this.player.currentFrame % 3

        this.player.img = this.player.images[this.player.currentFrame]
    }

}