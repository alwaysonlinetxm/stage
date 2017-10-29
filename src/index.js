import './libs/reset.scss';
import './index.scss';

import Util from './libs/util';

import { updatePage1 } from './page1/index';
import { updatePage2 } from './page2/index';
import { updatePage3 } from './page3/index';


const CLIENT_WIDTH = window.innerWidth;
const box = document.querySelector('.box');
const back = document.querySelector('.back');
const forward = document.querySelector('.forward');
const title = document.querySelector('.title');
let timer = null;
let interval = -1;
let curIndex = 0;

back.addEventListener('click', () => {
  if (curIndex > 0) {
    updateStatus(--curIndex);
  }
}, false);

forward.addEventListener('click', () => {
  if (curIndex < 3) {
    updateStatus(++curIndex);
  }
}, false);

function updateStatus(index) {
  if (index === 0 || index === 1) {
    title.style.display = 'block';
  } else {
    title.style.display = 'none';
  }
  box.style.webkitTransform = `translateX(-${curIndex * CLIENT_WIDTH}px)`;

  switch (index) {
    case 0:
    case 1:
      interval = 10000;
      break;
    case 2:
      interval = 1000;
      break;
  }

  clearInterval(timer);
  timer = setInterval(() => {
    Util.request('S1=&S2=&S3=&S4=&S5=&S6=&S11=&S12=&S13=&S14=&S15=&S16=&S17=&S18=&S19=').then(res => showData(res, index));
  }, interval);
  Util.request('S1=&S2=&S3=&S4=&S5=&S6=&S11=&S12=&S13=&S14=&S15=&S16=&S17=&S18=&S19=').then(res => showData(res, index));

  // timer = setInterval(() => {
  //   showData({
  //     S1: Math.ceil(Math.random() * 9),
  //     S2: Math.ceil(100 * Math.random()),
  //     S3: 16 + Math.ceil(16 * Math.random()),
  //     S4: Math.ceil(Math.random() * 3) + '',
  //     S5: -4,
  //     S6: 85,
  //     S11: Math.floor(Math.random() * 6.99),
  //     S12: Math.floor(Math.random() * 2.99),
  //     S13: Math.floor(Math.random() * 4.99),
  //     S14: 16 + Math.ceil(16 * Math.random()),
  //     S15: Math.floor(Math.random() * 4.99),
  //     S16: Math.floor(Math.random() * 2.99),
  //     S17: Math.floor(Math.random() * 1.99),
  //     S18: Math.ceil(Math.random() * 2),
  //     S19: Math.floor(Math.random() * 1.99)
  //   }, index);
  // }, interval);
  // showData({
  //   S1: Math.ceil(Math.random() * 9),
  //   S2: Math.ceil(100 * Math.random()),
  //   S3: 16 + Math.ceil(16 * Math.random()),
  //   S4: Math.ceil(Math.random() * 3) + '',
  //   S5: -4,
  //   S6: 85,
  //   S11: Math.floor(Math.random() * 6.99),
  //   S12: Math.floor(Math.random() * 2.99),
  //   S13: Math.floor(Math.random() * 4.99),
  //   S14: 16 + Math.ceil(16 * Math.random()),
  //   S15: Math.floor(Math.random() * 4.99),
  //   S16: Math.floor(Math.random() * 2.99),
  //   S17: Math.floor(Math.random() * 1.99),
  //   S18: Math.ceil(Math.random() * 2),
  //   S19: Math.floor(Math.random() * 1.99)
  // }, index);
}

let lastData = '';
// S1：出风方式（吹脸、脚、窗）；
// S2：出风风量；
// S3：出风温度；
// S4：进风方式（内外循环）；
// S5：蒸发器温度；
// S6：水温；
function showData(data, index) {
  const { S1, S2, S3, S4, S5, S6, S11, S12, S13, S14, S15, S16, S17, S18, S19 } = data;
  const s1 = S1 * 1;
  const s2 = Math.ceil(S2 * 1);
  const s3 = S3 * 1;
  const s4 = S4 === '1' ? '自动循环' : S4 === '2' ? '内循环' : '外循环';
  const s5 = S5 * 1;
  const s6 = S6 * 1;
  const s11 = S11 * 1;
  const s12 = S12 * 1;
  const s13 = S13 * 1;
  const s14 = S14 * 1;
  const s15 = S15 * 1;
  const s16 = S16 * 1;
  const s17 = S17 * 1;
  const s18 = S18 * 1;
  const s19 = S19 * 1;

  switch (index) {
    case 0:
      updatePage1(s1, s3, s2, s4);
      break;
    case 1:
      updatePage2(s1, s3, s2, s5, s6);
      break;
    case 2:
      updatePage3(s1, s3, s4, s11, s12, s13, s14, s15, s16, s17, s18, s19);
      break;
  }
}

window.update = updatePage3

updateStatus(curIndex);
