import './libs/reset.scss';
import './index.scss';

import { updateState } from './page1/index';

const CLIENT_WIDTH = window.innerWidth;
// const box = document.querySelector('')

let temp = 16 + Math.ceil(16 * Math.random());
let sum =  Math.ceil(100 * Math.random());
let dir = '外循环';

updateState(temp, sum, dir);



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

  updateState(temp, sum, dir);
}, 10000);
