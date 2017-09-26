import './index.scss';

const blueNum = document.querySelector('.page2 .blue .num');
const redNum = document.querySelector('.page2 .red .num');

export function updatePage2(mode, temp, sum, blue, red) {
  blueNum.innerHTML = `${blue}℃`;
  redNum.innerHTML = `${red}℃`;
}
