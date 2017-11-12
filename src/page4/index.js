import './index.scss';

const a1 = document.querySelector('.page4 .a1');
const a2 = document.querySelector('.page4 .a2');

let lastData = null;

export function updatePage4(s7, s8, s9, s10) {
  const curData = Array.prototype.slice.call(arguments).toString();
  if (curData === lastData) {
    return;
  } else {
    lastData = curData;
  }

  a1.style.webkitTransform = `rotate(${-180 + s8 / 220 * 360}deg)`;
  a2.style.webkitTransform = `rotate(${-180 + s9 / 8000 * 360}deg)`;
}
