import 'pixi.js';

import Particle from './Particle';
import Band from './Band';

import '../libs/reset.scss';
import './index.scss';

import bgImg from './images/bg.png';

// initial whole stage
const canvas = document.querySelector('.canvas');
const app = new PIXI.Application(800, 600, { backgroundColor : 0x000000, antialias: true });
app.view.style.position = "absolute";
app.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(canvas.offsetWidth, canvas.offsetHeight);
canvas.appendChild(app.view);

const CLIENT_WIDTH = app.renderer.width;
const CLIENT_HEIGHT = app.renderer.height;
const COLORS = [ 0x061e81, 0x1E1B9B, 0x1B519B, 0x237BC4, 0x58b7ee, 0xc9dae3, 0xf2f3d6, 0xedf271, 0xEDE780, 0xE5B329, 0xF7D82C, 0xf2962a, 0xf24f2a, 0xf43205, 0xDB061B, 0xA51D32, 0x8E1925 ];

const bg = PIXI.Sprite.fromImage(bgImg);
bg.anchor.set(0.5);
bg.x = app.renderer.width / 2;
bg.y = app.renderer.height / 2;
bg.width = CLIENT_WIDTH;
bg.height = CLIENT_WIDTH * 1080 / 1400;

app.stage.addChild(bg);

// const band1 = new Band({
//   startX: -30,
//   endX: -200,
//   k1: 10,
//   k2: 10,
//   color: 0xEDE780
// });
//
// band1.band.rotation = Math.PI * 0.03;
// band1.band.x = CLIENT_WIDTH * 0.38;
// band1.band.y = CLIENT_HEIGHT * 0.45;
// app.stage.addChild(band1.band);

// window.b = band1;

const particle1 = new Particle({
  width: -200,
  height: 20,
  k: 0.5,
  w: 30,
  sum: 500,
  color: 0xEDE780
});

// particle1.particles.rotation = Math.PI * 0.03;
particle1.particles.x = CLIENT_WIDTH * 0.35;
particle1.particles.y = CLIENT_HEIGHT * 0.47;
app.stage.addChild(particle1.particles);

// const band2 = new Band({
//   startX: -30,
//   endX: -300,
//   k1: 10,
//   k2: 13,
//   color: 0xEDE780
// });
//
// band2.band.rotation = Math.PI * 0.15;
// band2.band.x = CLIENT_WIDTH * 0.52;
// band2.band.y = CLIENT_HEIGHT * 0.22;
// app.stage.addChild(band2.band);

const particle2= new Particle({
  width: -300,
  height: 20,
  k: 1,
  w: 100,
  sum: 1000,
  color: 0xEDE780
});

particle2.particles.rotation = Math.PI * 0.15;
particle2.particles.x = CLIENT_WIDTH * 0.5;
particle2.particles.y = CLIENT_HEIGHT * 0.22;
app.stage.addChild(particle2.particles);

// const band3 = new Band({
//   startX: -70,
//   endX: 250,
//   k1: 10,
//   k2: 13,
//   color: 0xEDE780
// });
//
// band3.band.rotation = Math.PI * -0.5;
// band3.band.x = CLIENT_WIDTH * 0.56;
// band3.band.y = CLIENT_HEIGHT * 0.33;
// app.stage.addChild(band3.band);

const particle3= new Particle({
  width: 200,
  height: 50,
  k: 1,
  w: 100,
  sum: 800,
  color: 0xEDE780
});

particle3.particles.rotation = Math.PI * -0.65;
particle3.particles.x = CLIENT_WIDTH * 0.63;
particle3.particles.y = CLIENT_HEIGHT * 0.25;
app.stage.addChild(particle3.particles);

app.ticker.add(function() {
  particle1.animate();
  particle2.animate();
  particle3.animate();
});

const arrow = document.querySelector('.db-arrow');
const nums = document.querySelectorAll('.db-num');

function setArrow(temp) {
  const deg = (temp - 16) * 15 - 120;
  arrow.style.transform = `rotate(${deg}deg)`;
  nums.forEach((node, i) => {
    if (i === temp - 16) {
      node.classList.add('highlight');
    } else if (node.classList.contains('highlight')) {
      node.classList.remove('highlight');
    }
  });
}

setInterval(() => {
  // Util.request('S2=&S3=&S4=').then(res => {
  //
  // });
  const temp = Math.ceil(16 * Math.random());
  const sum =  500 + Math.ceil(500 * Math.random());
  setArrow(temp + 16);
  particle1.setColor(COLORS[temp], 1);
  particle1.setSum(sum, 5);
  particle2.setColor(COLORS[temp], 1);
  particle2.setSum(sum * 2, 5);
  particle3.setColor(COLORS[temp], 1);
  particle3.setSum(sum * 1.6, 5);
  // band1.setColor(COLORS[temp]);
  // band2.setColor(COLORS[temp]);
  // band3.setColor(COLORS[temp]);
}, 10000);
