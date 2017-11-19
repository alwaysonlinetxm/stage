import './index.scss';

const CLIENT_WIDTH = window.innerWidth;
const CLIENT_HEIGHT = window.innerHeight;

const temp = document.querySelector('.page4 .temp-value');
const keyList = document.querySelectorAll('.page4 .key-item');
const date = document.querySelector('.page4 .date');
const leftNum = document.querySelector('.page4 .left .num');
const rightNum = document.querySelector('.page4 .right .num');
const leftBox = document.querySelector('.page4 .left.radar-box');
const rightBox = document.querySelector('.page4 .right.radar-box');
const leftRadar = document.querySelector('.page4 .left .radar');
const rightRadar = document.querySelector('.page4 .right .radar');
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
  let h = today.getHours();
  let m = today.getMinutes();
  const pm = h > 12;
  h = pm ? h - 12 : h;
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  return `${MONTH[today.getMonth()]}. ${today.getDate()} ${h}:${m} ${pm ? 'PM' : 'AM'}`;
}

function updateNum(left, end) {
  const dom = left ? leftNum : rightNum;
  const dis = left ? 3 : 1;
  let start = left ? leftNum.innerHTML * 1 : rightNum * 1;
  const dir = end > start;
  const d = (dir ? 1 : -1) * dis;

  (function count() {
    const _start = start + d;
    if (dir && _start < end || !dir && _start > end) {
      dom.innerHTML = start = _start;
      window.requestAnimationFrame(count);
    } else {
      dom.innerHTML = end;
    }
  })();
}

function countRadarLeft(n) {
  // (240 - n) / 240 * 360
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

  updateNum(true, s8);
  updateNum(false, Math.floor(s9 / 1000));

  leftBox.style.overflow = s8 < 60 ? 'hidden' : 'visible';
  rightBox.style.overflow = s9 < 3000 ? 'hidden' : 'visible';

  let angle1 = s8 / 240 * 360;
  let angle2 = s9 / 8000 * 240;

  if (angle1 === 0) {
    angle1 = 1;
  }

  if (angle2 === 0) {
    angle2 = 1;
  }

  leftRadar.style.webkitTransform = `rotate(${angle1}deg)`;
  rightRadar.style.webkitTransform = `rotate(${angle2}deg)`;
}
