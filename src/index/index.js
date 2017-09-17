import 'pixi.js';

import Particle from './Particle';
import dashboard from './dashboard';

import '../libs/reset.scss';
import './index.scss';



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

const COLORS = [ 0x061e81, 0x1E1B9B, 0x1B519B, 0x237BC4, 0x58b7ee, 0xc9dae3, 0xf2f3d6, 0xedf271, 0xEDE780, 0xE5B329, 0xF7D82C, 0xf2962a, 0xf24f2a, 0xf43205, 0xDB061B, 0xA51D32, 0x8E1925 ];

const particle1 = new Particle({
  startX: 200,
  endX: 0,
  startY1: 0,
  startY2: 20,
  endY1: 10,
  endY2: 50,
  sum: 200,
  color: 0xEDE780
});


particle1.particles.rotation = Math.PI * 0.03;
particle1.particles.x = 200;
particle1.particles.y = 300;
app.stage.addChild(particle1.particles);

const particle2= new Particle({
  startX: 300,
  endX: 0,
  startY1: 0,
  startY2: 10,
  endY1: 10,
  endY2: 200,
  sum: 200,
  color: 0xEDE780
});

particle2.particles.rotation = Math.PI * 0.1;
particle2.particles.x = 60;
particle2.particles.y = 100;
app.stage.addChild(particle2.particles);

const particle3= new Particle({
  startX: 200,
  endX: 0,
  startY1: 0,
  startY2: 50,
  endY1: 50,
  endY2: 150,
  sum: 200,
  color: 0xEDE780
});

window.p = particle2;
particle3.particles.rotation = Math.PI * 0.55;
particle3.particles.x = 600;
app.stage.addChild(particle3.particles);

app.ticker.add(function() {
  particle1.animate();
  particle2.animate();
  particle3.animate();
});

const arrow = document.querySelector('.db-arrow');

function setArrow(temp) {
  const deg = (temp - 16) * 15 - 120;
  arrow.style.transform = `rotate(${deg}deg)`;
}

setInterval(() => {
  const temp = Math.ceil(16 * Math.random());
  const sum =  100 + Math.ceil(500 * Math.random());
  setArrow(temp + 16);
  particle1.setColor(COLORS[temp], 20);
  particle1.setSum(sum, 20);
  particle2.setColor(COLORS[temp], 20);
  particle2.setSum(sum, 20);
  particle3.setColor(COLORS[temp], 20);
  particle3.setSum(sum, 20);
}, 10000);
