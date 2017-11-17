import './index.scss';

const CLIENT_WIDTH = window.innerWidth;
const CLIENT_HEIGHT = window.innerHeight;

const a1 = document.querySelector('.page4 .a1');
const a2 = document.querySelector('.page4 .a2');
const canvas = document.querySelector('.page4 .canvas');
const ctx = canvas.getContext('2d');

if (CLIENT_WIDTH / CLIENT_HEIGHT > 0.5625) {
  canvas.width = CLIENT_HEIGHT / 0.5625;
  canvas.height = CLIENT_HEIGHT;
} else {
  canvas.width = CLIENT_WIDTH;
  canvas.height = CLIENT_WIDTH * 0.5625;
}

const bg = new Image();
bg.onload = () => {
  ctx.drawImage(bg, 0, 0);
}
bg.src = './images/img/p4_bg.jpg';



console.log('-----',CLIENT_WIDTH, CLIENT_HEIGHT,  canvas.width, canvas.height)

let lastData = null;

export function updatePage4(s7, s8, s9, s10) {
  const curData = Array.prototype.slice.call(arguments).toString();
  if (curData === lastData) {
    return;
  } else {
    lastData = curData;
  }

  // a1.style.webkitTransform = `rotate(${-180 + s8 / 220 * 360}deg)`;
  // a2.style.webkitTransform = `rotate(${-180 + s9 / 8000 * 360}deg)`;
}
