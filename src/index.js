import './libs/reset.scss';
import './index.scss';

import Util from './libs/util';

import { updatePage1 } from './page1/index';
import { updatePage2 } from './page2/index';


const CLIENT_WIDTH = window.innerWidth;
const box = document.querySelector('.box');
const back = document.querySelector('.back');
const forward = document.querySelector('.forward');
const title = document.querySelector('.title');
let curIndex = 0;

back.addEventListener('click', () => {
  if (curIndex > 0) {
    curIndex--;
    showTitle(curIndex);
    box.style.webkitTransform = `translateX(-${curIndex * CLIENT_WIDTH}px)`;
  }
}, false);

forward.addEventListener('click', () => {
  if (curIndex < 3) {
    curIndex++;
    showTitle(curIndex);
    box.style.webkitTransform = `translateX(-${curIndex * CLIENT_WIDTH}px)`;
  }
}, false);

function showTitle(index) {
  if (index === 0 || index === 1) {
    title.style.display = 'block';
  } else {
    title.style.display = 'none';
  }
}

let lastData = '';
// S1：出风方式（吹脸、脚、窗）；
// S2：出风风量；
// S3：出风温度；
// S4：进风方式（内外循环）；
// S5：蒸发器温度；
// S6：水温；
function showData(data) {
  if (lastData !== JSON.stringify(data)) {
    lastData = JSON.stringify(data);
  } else {
    return
  }
  const { S1, S2, S3, S4, S5, S6 } = data;
  const mode = S1 * 1;
  const sum = Math.ceil(S2 * 1);
  const temp = S3 * 1;
  const dir = S4 === '1' ? '自动循环' : S4 === '2' ? '内循环' : '外循环';
  const blue = S5 * 1;
  const red = S6 * 1;
  updatePage1(mode, temp, sum, dir);
  updatePage2(mode, temp, sum, blue, red);
}

Util.request('S1=&S2=&S3=&S4=&S5=&S6=').then(res => showData(res));

setInterval(() => {
  Util.request('S1=&S2=&S3=&S4=&S5=&S6=').then(res => showData(res));
}, 10000);

// let mode = Math.ceil(Math.random() * 7);
// let temp = 16 + Math.ceil(16 * Math.random());
// let sum =  Math.ceil(100 * Math.random());
// let dir = '外循环';
// let blue = -4;
// let red = 85;
//
// updatePage1(mode, temp, sum, dir);
// updatePage2(mode, temp, sum, blue, red);
//
// setInterval(() => {
//   mode = Math.ceil(Math.random() * 7);
//   temp = 16 + Math.ceil(16 * Math.random());
//   sum =  Math.ceil(100 * Math.random());
//
//   if (dir === '内循环') {
//     dir = '外循环';
//   } else {
//     dir = '内循环';
//   }
//
//   blue = Math.ceil(Math.random() * 125) - 40;
//   red = Math.ceil(Math.random() * 125) - 40;
//
//   updatePage1(mode, temp, sum, dir);
//   updatePage2(mode, temp, sum, blue, red);
// }, 10000);
