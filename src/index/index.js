import 'pixi.js';

import Particle from './Particle';

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

const particle2= new Particle({
  width: -300,
  height: 20,
  k: 1,
  w: 100,
  sum: 500,
  color: 0xEDE780
});

particle2.particles.rotation = Math.PI * 0.15;
particle2.particles.x = CLIENT_WIDTH * 0.5;
particle2.particles.y = CLIENT_HEIGHT * 0.22;
app.stage.addChild(particle2.particles);

const particle3= new Particle({
  width: 200,
  height: 50,
  k: 1,
  w: 100,
  sum: 500,
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
