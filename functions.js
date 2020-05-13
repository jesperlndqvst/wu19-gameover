'use strict';

const startGame = () => {
  gameOver = false;
  curveCount = 0;
  curves = [];
  playersRemaining = playersCount;
  loop();
  createCanvas(width, height);
  frameRate(50);
  createCurve();
};

const createCurve = () => {
  for (let i = 0; i < playersCount; i++) {
    curves[i] = new Curve(
      players[i].color,
      players[i].startingX,
      players[i].startingY,
      players[i].leftKey,
      players[i].rightKey
    );
  }
};