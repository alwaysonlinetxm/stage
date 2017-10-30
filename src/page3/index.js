import './index.scss';

import Util from '../libs/util';

const topList = document.querySelectorAll('.page3 .top-item');
const snow = topList[0];
const circle = topList[1];
const auto = topList[2];
const ion = topList[3];
const leftUp = document.querySelector('.page3 .left-temp .up-arrow');
const leftDown = document.querySelector('.page3 .left-temp .down-arrow');
const leftTemp = document.querySelector('.page3 .left-temp .temp');
const rightUp = document.querySelector('.page3 .right-temp .up-arrow');
const rightDown = document.querySelector('.page3 .right-temp .down-arrow');
const rightTemp = document.querySelector('.page3 .right-temp .temp');
const minus = document.querySelector('.page3 .minus');
const plus = document.querySelector('.page3 .plus');
const sum = document.querySelector('.page3 .sum');
const sumAuto = document.querySelector('.page3 .sum-auto');
const downList = document.querySelectorAll('.page3 .down-item');
const vent = downList[0];
const vf = downList[1];
const floor = downList[2];
const fs = downList[3];
const downAuto = document.querySelector('.page3 .down-auto');
const footer = document.querySelector('.page3 .footer');
const sync = document.querySelector('.page3 .sync');

function update1(mode) {
  downList.forEach(node => node.classList.remove('on'));
  downAuto.style.display = 'none';
  switch (mode) {
    case 2:
      floor.classList.add('on');
      break;
    case 3:
      vf.classList.add('on');
      break;
    case 4:
      vent.classList.add('on');
      break;
    case 7:
      fs.classList.add('on');
      break;
    case 1:
      downAuto.innerHTML = '自动';
      downAuto.style.display = 'block';
      break;
    case 9:
      downAuto.innerHTML = '除雾';
      downAuto.style.display = 'block';
      break;
  }
}

function update2(s11, s12) {
  switch (s12) {
    case 0:
      sum.style.display = 'none';
      sumAuto.style.display = 'none'
      break;
    case 1:
      sum.style.display = 'none';
      sumAuto.style.display = 'block'
      break;
    case 2:
      sum.style.display = 'block';
      sumAuto.style.display = 'none'
      sum.style.width = `${s11 / 6 * 100}%`;
      break;
  }
}

function update3or4(temp, status, node) {
  switch (status) {
    case 1:
      node.classList.add('normal');
      node.innerHTML = temp;
      break;
    case 2:
      node.classList.remove('normal');
      node.innerHTML = 'Lo';
      break;
    case 3:
      node.classList.remove('normal');
      node.innerHTML = 'Hi';
      break;
  }
}

function update5(s16) {
  switch (s16) {
    case 0:
      snow.classList.remove('slash');
      snow.classList.remove('blank');
      snow.classList.add('A');
      break;
    case 1:
      snow.classList.remove('A');
      snow.classList.remove('blank');
      snow.classList.add('slash');
      break;
    case 2:
      snow.classList.remove('slash');
      snow.classList.remove('A');
      snow.classList.add('blank');
      break;
  }
}

function update6(dir) {
  switch (dir) {
    case '自动循环':
      circle.classList.remove('inside');
      circle.classList.remove('outside');
      circle.classList.add('autoside');
      break;
    case '内循环':
      circle.classList.remove('autoside');
      circle.classList.remove('outside');
      circle.classList.add('inside');
      break;
    case '外循环':
      circle.classList.remove('inside');
      circle.classList.remove('autoside');
      circle.classList.add('outside');
      break;
  }
}

function upload(e) {
  const num = e.target.getAttribute('data-num') * 1;
  let str = '';

  for (let i = 1; i <= 15; i++) {
    if (i === num) {
      str += `T${i}=1&`;
    } else {
      str += `T${i}=0&`;
    }
  }
  str = str.slice(0, -1);

  Util.request(str).then(res => console.log('-----', res));
}

vent.addEventListener('click', upload);
vf.addEventListener('click', upload);
floor.addEventListener('click', upload);
fs.addEventListener('click', upload);
minus.addEventListener('click', upload);
plus.addEventListener('click', upload);
leftUp.addEventListener('click', upload);
leftDown.addEventListener('click', upload);
rightUp.addEventListener('click', upload);
rightDown.addEventListener('click', upload);
snow.addEventListener('click', upload);
circle.addEventListener('click', upload);
auto.addEventListener('click', upload);
ion.addEventListener('click', upload);
sync.addEventListener('click', upload);

let lastData = null;

export function updatePage3(mode, temp, dir, s11, s12, s13, s14, s15, s16, s17, s18, s19) {
  const curData = Array.prototype.slice.call(arguments).toString();
  if (curData === lastData) {
    return;
  } else {
    lastData = curData;
  }

  update1(mode);
  update2(s11, s12);
  update3or4(temp, s13, leftTemp);
  update3or4(s14, s15, rightTemp);
  update5(s16);
  update6(dir);
  s17 ? auto.classList.add('on') : auto.classList.remove('on');
  s18 === 1 ? ion.classList.add('on') : ion.classList.remove('on');
  s19 ? footer.classList.add('on') : footer.classList.remove('on');
}
