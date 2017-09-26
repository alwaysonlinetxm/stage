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


let temp = 16 + Math.ceil(16 * Math.random());
let sum =  Math.ceil(100 * Math.random());
let dir = '外循环';

updatePage1(temp, sum, dir);



setInterval(() => {
  // Util.request('S2=&S3=&S4=').then(res => {
  //
  // });
  temp = 16 + Math.ceil(16 * Math.random());
  sum =  Math.ceil(100 * Math.random());
  if (dir === '内循环') {
    dir = '外循环';
  } else {
    dir = '内循环';
  }

  updatePage1(temp, sum, dir);
}, 10000);
