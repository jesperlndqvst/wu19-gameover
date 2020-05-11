'use strict';

class Curve {
  constructor(color, startingX, startingY, leftKey, rightKey) {
    this.x = startingX;
    this.y = startingY;
    this.increment = 3.25;
    this.angle = (Math.floor((Math.random() * 8) + 1)) * Math.PI / 4;
    this.color = color;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
  }

  update() {
    circle(this.x, this.y, 5);
    let c = color(this.color);
    fill(c);
    noStroke();
    this.x = this.x + this.increment * Math.sin(this.angle);
    this.y = this.y + this.increment * Math.cos(this.angle);
  }

  steering() {
    if (keyIsDown(this.leftKey) && keyIsDown(this.rightKey)) {
      this.angle = this.angle + 0;
    } else if (keyIsDown(this.leftKey)) {
      this.angle = this.angle + ((2 * Math.PI) / 90);
    } else if (keyIsDown(this.rightKey)) {
      this.angle = this.angle + ((-2 * Math.PI) / 90);
    } else {
      this.angle = this.angle + 0;
    }
  }

  collision() {
    const currentPositionColor = get(this.x, this.y);

    if (
      currentPositionColor[0] != 0 ||
      currentPositionColor[1] != 0 ||
      currentPositionColor[2] != 0
    ) {
      console.log('GAME ENDED');
    }
  }
}
