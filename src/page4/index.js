import './index.scss';

const CLIENT_WIDTH = window.innerWidth;
const CLIENT_HEIGHT = window.innerHeight;

const temp = document.querySelector('.page4 .temp-value');
const keyList = document.querySelectorAll('.page4 .key-item');
const date = document.querySelector('.page4 .date');
const canvas = document.querySelector('.page4 .canvas');
const ctx = canvas.getContext('2d');
let width;
let height
let timer = null;

const MONTH = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DES'];

if (CLIENT_WIDTH / CLIENT_HEIGHT > 0.5625) {
  width = canvas.width = CLIENT_HEIGHT / 0.5625;
  height = canvas.height = CLIENT_HEIGHT;
} else {
  width = canvas.width = CLIENT_WIDTH;
  height = canvas.height = CLIENT_WIDTH * 0.5625;
}

const bg = new Image();
bg.onload = () => {
  ctx.drawImage(bg, 0, 0, 1920, 1080, 0, 0, width, height);
}
bg.src = './images/img/p4_bg.jpg';

function updateDate() {
  const today = new Date;
  const h = today.getHours();
  let m = today.getMinutes();
  if (m < 10) {
    m = `0{m}`;
  }
  return `${MONTH[today.getMonth()]}. ${today.getDate()} ${h > 12 ? h - 12 : h}:${m} ${h > 12 ? 'PM' : 'AM'}`;
}

let lastData = null;

export function updatePage4(s7, s8, s9, s10) {
  const curData = Array.prototype.slice.call(arguments).toString();
  if (curData === lastData) {
    return;
  } else {
    lastData = curData;
  }

  if (!timer) {
    date.innerHTML = updateDate();
    timer = setInterval(() => {
      date.innerHTML = updateDate();
    }, 60000);
  }

  temp.innerHTML = `${s10}℃`;
  keyList.forEach((node, i) => {
    if (i === s7) {
      node.classList.add('on');
    } else {
      node.classList.remove('on');
    }
  })
}
