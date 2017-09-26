import './libs/reset.scss';
import './index.scss';

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

let mode = Math.ceil(Math.random() * 7);
let temp = 16 + Math.ceil(16 * Math.random());
let sum =  Math.ceil(100 * Math.random());
let dir = '外循环';
let blue = -4;
let red = 85;

updatePage1(temp, sum, dir);
updatePage2(mode, temp, sum, blue, red);


setInterval(() => {
  // Util.request('S1=&S2=&S3=&S4=&S5=&S6=').then(res => {
  //
  // });
  mode = Math.ceil(Math.random() * 7);
  temp = 16 + Math.ceil(16 * Math.random());
  sum =  Math.ceil(100 * Math.random());

  if (dir === '内循环') {
    dir = '外循环';
  } else {
    dir = '内循环';
  }

  blue = Math.ceil(Math.random() * 125) - 40;
  red = Math.ceil(Math.random() * 125) - 40;

  updatePage1(temp, sum, dir);
  updatePage2(mode, temp, sum, blue, red);
}, 10000);
