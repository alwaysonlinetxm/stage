import 'pixi.js';

import dashboard from './dashboard';

import '../libs/reset.scss';
import './index.scss';

import Bg1 from './images/bg1.png';

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

const arrow = document.querySelector('.db-arrow');

function setArrow(temp) {
  const deg = (temp - 16) * 15 - 120;
  arrow.style.transform = `rotate(${deg}deg)`;
}

setInterval(() => setArrow(Math.ceil(16 * Math.random()) + 16), 1000);
