import 'pixi.js';

import dashboard from './dashboard';

import '../libs/reset.scss';
import './index.scss';

import particleImg from './images/particle.png';

// initial whole stage
const canvas = document.querySelector('.canvas');
const app = new PIXI.Application(800, 600, { backgroundColor : 0xffffff, antialias: true });
app.view.style.position = "absolute";
app.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(canvas.offsetWidth, canvas.offsetHeight);
canvas.appendChild(app.view);

const CLIENT_WIDTH = app.renderer.width;
const CLIENT_HEIGHT = app.renderer.height;
const LEFT_WIDTH = Math.floor(CLIENT_WIDTH * 0.7);
const RIGHT_WIDTH = CLIENT_WIDTH - LEFT_WIDTH;

// // create left & right boxs
// const leftBox = new PIXI.Container();
// const rightBox = new PIXI.Container();
//
// app.stage.addChild(leftBox);
// app.stage.addChild(rightBox);
//
// // initial left
// leftBox.width = LEFT_WIDTH;
// leftBox.height = CLIENT_HEIGHT;
// leftBox.x = 0;
// leftBox.y = 0;
//
// // initial right
// rightBox.width = RIGHT_WIDTH;
// rightBox.height = CLIENT_HEIGHT;
// rightBox.x = LEFT_WIDTH;
// rightBox.y = 0;
//
// // draw the backgroundColor
// const graphics = new PIXI.Graphics();
//
// graphics.lineStyle(2, 0x2d3975, 1);
// graphics.beginFill(0x2d3975, 1);
// graphics.drawRect(0, 0, RIGHT_WIDTH, CLIENT_HEIGHT);
//
// rightBox.addChild(graphics);
//
// dashboard.sprite.x = (RIGHT_WIDTH - dashboard.width) / 2;
// dashboard.sprite.y = CLIENT_HEIGHT * 0.1;
//
// rightBox.addChild(dashboard.sprite);
//
// app.ticker.add(function() {
//
// });

const particles = new PIXI.Container();
const particleTexture = PIXI.Texture.fromImage(particleImg);
const particleList = [];
const startX = 600;
const endX = 300;
const startY1 = 200;
const endY1 = 350;
const startY2 = 250;
const endY2 = 600;

const dir = startX > endX ? -1 : 1;
const x1 = startX + (endX - startX) * 0.3;
const x2 = startX + (endX - startX) * 0.6;

for (let i = 0; i < 500; i++) {
  setTimeout((function(i) {
    return function() {
      const particle = new PIXI.Sprite(particleTexture);
      particle.anchor.set(0.5);
      particle.x = startX;
      particle.y = startY1 + (Math.random() * (startY2 - startY1));
      particle.alpha = 0;
      particle.scale.set(0.15);
      // custom attr
      particle.dis = dir * (0.5 + Math.random() * 0.5);

      const endY = (particle.y - startY1) * (endY2 - startY2) / (endY1 - startY1) + startY2;
      particle.k = (startX - endX) / (particle.y - endY);
      particles.addChild(particle);
      particleList.push(particle);
    }
  })(i), 50 * i);
}

app.stage.addChild(particles);

app.ticker.add(function() {
  particleList.forEach((node, i) => {
    if (dir === 1 && node.x < endX || dir === -1 && node.x >= endX) {
      const { dis, k } = node;

      node.x += dis;
      node.y += dis / k;
      if (dir === 1 && node.x < x1 || dir === -1 && node.x >= x1) {
        node.alpha = (node.x - startX) / (x1 - startX);
      } else if (dir === 1 && node.x > x2 || dir === -1 && node.x <= x2) {
        node.alpha = (endX - node.x ) / (endX - x2);
      } else {
        node.alpha = 1;
      }
    } else {
      node.x = startX;
      node.y = startY1 + (Math.random() * (startY2 - startY1));
      node.alpha = 0;
    }
  });

});

const arrow = document.querySelector('.db-arrow');

function setArrow(temp) {
  const deg = (temp - 16) * 15 - 120;
  arrow.style.transform = `rotate(${deg}deg)`;
}

setInterval(() => setArrow(Math.ceil(16 * Math.random()) + 16), 1000);
