import './libs/reset.scss';
import './index.scss';

import Util from './libs/util';

import { updatePage1 } from './page1/index';
import { updatePage2 } from './page2/index';


const CLIENT_WIDTH = window.innerWidth;
const box = document.querySelector('.box');
const back = document.querySelector('.back');
const forward = document.querySelector('.forward');
let curIndex = 0;

back.addEventListener('click', () => {
  if (curIndex > 0) {
    curIndex--;
    box.style.webkitTransform = `translateX(-${curIndex * CLIENT_WIDTH}px)`;
  }
}, false);

forward.addEventListener('click', () => {
  if (curIndex < 3) {
    curIndex++;
    box.style.webkitTransform = `translateX(-${curIndex * CLIENT_WIDTH}px)`;
  }
}, false);

// S1：出风方式（吹脸、脚、窗）；
// S2：出风风量；
// S3：出风温度；
// S4：进风方式（内外循环）；
// S5：蒸发器温度；
// S6：水温；
function showData(data) {
  const { S1, S2, S3, S4, S5, S6 } = data;
  const mode = S1 * 1;
  const sum = Math.ceil(S2 * 1);
  const temp = S3 * 1;
  const dir = S4 === '1' ? '外循环' : '内循环';
  const blue = S5 * 1;
  const red = S6 * 1;
  updatePage1(temp, sum, dir);
  updatePage2(mode, temp, sum, blue, red);
}

Util.request('S1=&S2=&S3=&S4=&S5=&S6=').then(res => showData(res));

// let mode = Math.ceil(Math.random() * 7);
// let temp = 16 + Math.ceil(16 * Math.random());
// let sum =  Math.ceil(100 * Math.random());
// let dir = '外循环';
// let blue = -4;
// let red = 85;
//
// updatePage1(temp, sum, dir);
// updatePage2(mode, temp, sum, blue, red);

setInterval(() => {
  Util.request('S1=&S2=&S3=&S4=&S5=&S6=').then(res => showData(res));
  // mode = Math.ceil(Math.random() * 7);
  // temp = 16 + Math.ceil(16 * Math.random());
  // sum =  Math.ceil(100 * Math.random());
  //
  // if (dir === '内循环') {
  //   dir = '外循环';
  // } else {
  //   dir = '内循环';
  // }
  //
  // blue = Math.ceil(Math.random() * 125) - 40;
  // red = Math.ceil(Math.random() * 125) - 40;
  //
  // updatePage1(temp, sum, dir);
  // updatePage2(mode, temp, sum, blue, red);
}, 10000);
