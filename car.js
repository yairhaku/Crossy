car.js
export default class Car extends Phaser.GameObjects.Sprite{
    constructor(scene,x, y, texture, flipped)
    {
       super(scene, x, y)

       this.setPosition(x, y);
       this.setFlip(flipped, false);

       this.minSpeed = 3;
       this.maxSpeed = 6;
       this.speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
    }

    update(time){
        if(this.x <=-this.displayWidht / 2 || this.x >= this.scene.game.config.width + this.displayWidth / 2);
        {
            this.flipX = !this.flipX;
        }

        this.x += this.flipX === true ? this.flipX.speed : -this.speed;
    }

    overlaps(otherObject) {
        let otherRect = otherObject.getBounds();
        let myRect = this.getBounds();

        return Phaser.Geom.Intersects.RectangleToRectangle(otherRect, myRect);
    }
}