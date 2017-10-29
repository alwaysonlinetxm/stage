import './index.scss';

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
const downList = document.querySelectorAll('.page3 .down-item');
const vent = downList[0];
const vf = downList[1];
const floor = downList[2];
const fs = downList[3];
const downAuto = document.querySelector('.page3 .down-auto');
const sync = document.querySelector('.page3 .sync');

let lastData = null

export function updatePage3(mode, temp, dir, s11, s12, s14, s15, s16, s17, s18, s19) {
  const curData = Array.prototype.slice.call(arguments).toString();
  if (curData === lastData) {
    return;
  } else {
    lastData = curData;
  }

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
