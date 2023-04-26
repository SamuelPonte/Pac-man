export class Component {
    constructor(x, y, w, h, speed, color) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.speed = speed
        this.color = color
    }



    render(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    // collides(obj) {
    //     if (
    //         this.x < obj.x + obj.w &&
    //         this.x + this.w > obj.x &&
    //         this.y < obj.y + obj.h &&
    //         this.h + this.y > obj.y
    //     ) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }

    collidesWith(otherBall) {
        // Get the distance between the two balls' centers
        const dx = this.x - otherBall.x;
        const dy = this.y - otherBall.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Check if the distance is less than the sum of the two balls' radii
        if (distance < this.w + this.h + otherBall.raio) {
            return true;
        } else {
            return false;
        }
    }
}

//bolas
export class Pellet {
    constructor(x, y, raio, speed, color, img) {
        this.x = x;
        this.y = y;
        this.raio = raio;
        this.speed = speed;
        if (img) {
            this.img = img;
        }
        if (color) {
            this.color = color;
        }
    }

    render1(ctx) {
        if (this.img) {
            ctx.drawImage(this.img, this.x, this.y,this.raio*2,this.raio*2)
        }

        else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    collidesWith(otherBall) {
        // Get the distance between the two balls' centers
        const dx = this.x - otherBall.x;
        const dy = this.y - otherBall.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Check if the distance is less than the sum of the two balls' radii
        if (distance < this.raio + otherBall.raio) {
            return true;
        } else {
            return false;
        }
    }


}
