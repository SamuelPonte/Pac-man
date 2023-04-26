import { Component } from "./component.js"
import { Pellet } from "./component.js";



export class Player extends Pellet {
    constructor(x, y, raio, speed, color) {
        super(x, y, raio, speed, color)

        this.currentFrame = 0

        this.sprites = [
            "../Image/pac0.png",
            "../Image/pac1.png",
            "../Image/pac2.png",
        ]

        this.images = []
        let image0 = new Image()
        image0.src = this.sprites[0]
        this.images.push(image0)

        let image1 = new Image()
        image1.src = this.sprites[1]
        this.images.push(image1)

        let image2 = new Image()
        image2.src = this.sprites[2]
        this.images.push(image2)

        this.rotation = 0 
    }

    render1(ctx) {
        if (this.img) {
            ctx.save() 
            ctx.translate(this.x + this.raio, this.y + this.raio) 
            ctx.rotate(this.rotation * Math.PI / 180) 
            ctx.drawImage(this.img, -this.raio, -this.raio, this.raio * 2, this.raio * 2) 
            ctx.restore() 
        }
    }

    move(game) {

        if (game.leftPressed && game.endplay == false) {
            if (this.x > 0 && (this.y == 40 || this.y == 270 || this.y == 500)) {
                this.directionX = -1;
                this.directionY = 0;
                this.x -= this.speed;
                this.rotation = 180; 
            }

        }
        if (game.upPressed && game.endplay == false) {
            if (this.y > 40 && (this.x == 0 || this.x == 330 || this.x == 660)) {
                this.directionX = 0;
                this.directionY = -1;
                this.y -= this.speed;
                this.rotation = 270; 
            }
        }
        if (game.rightPressed && game.endplay == false) {
            if (this.x < 660 && (this.y == 40 || this.y == 270 || this.y == 500)) {
                this.directionX = 1;
                this.directionY = 0;
                this.x += this.speed;
                this.rotation = 0; 
            }
        }
        if (game.downPressed && game.endplay == false) {
            if (this.y < game.canvas.height - 40 && (this.x == 0 || this.x == 330 || this.x == 660)) {
                this.directionX = 0;
                this.directionY = 1;
                this.y += this.speed;
                this.rotation = 90; 
            }
        }


    }

}



