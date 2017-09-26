import './index.scss';

const blueNum = document.querySelector('.page2 .blue .num');
const redNum = document.querySelector('.page2 .red .num');
const doors = document.querySelectorAll('.page2 .door');

console.log(doors)

export function updatePage2(mode, temp, sum, blue, red) {
  blueNum.innerHTML = `${blue}℃`;
  redNum.innerHTML = `${red}℃`;


  if (mode === 2 || mode === 4 || mode === 6 || mode === 7) {
    doors[0].style.webkitTransform = 'rotate(-60deg)';
  } else {
    doors[0].style.webkitTransform = 'rotate(0deg)';
  }

  if (mode === 1 || mode === 4 || mode === 5 || mode === 7) {
    doors[1].style.webkitTransform = 'rotate(90deg)';
  } else {
    doors[1].style.webkitTransform = 'rotate(0deg)';
  }

  if (mode === 3 || mode === 5 || mode === 6 || mode === 7) {
    doors[2].style.webkitTransform = 'rotate(90deg)';
  } else {
    doors[2].style.webkitTransform = 'rotate(40deg)';
  }

  doors[3].style.webkitTransform = `rotate(${45 - ((temp - 16) / 16) * 70}deg)`;
}
