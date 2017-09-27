import './index.scss';

const CLIENT_WIDTH = window.innerWidth;

const blueNum = document.querySelector('.page2 .blue .num');
const redNum = document.querySelector('.page2 .red .num');
const doors = document.querySelectorAll('.page2 .door');
const arrows1 = document.querySelector('.page2 .arrows1');
const arrows2 = document.querySelector('.page2 .arrows2');

function updateArrows1(temp, sum) {
  const levels = Math.ceil(sum / 10);
  const polygons = arrows1.querySelectorAll('svg');

  polygons.forEach(node => arrows1.removeChild(node));

  for (let i = 0; i < levels; i++) {
    const polygon = document.createElementNS('http://www.w3.org/2000/svg','svg');
    polygon.setAttribute('width', 120);
    polygon.setAttribute('height', 10);
    polygon.style.top = `${100 / (levels + 1) * (i + 1)}%`;

    polygon.innerHTML = `
      <animateTransform attributeName="transform" begin="0s" dur="2s" type="translateX" from="80" to="0" repeatCount="indefinite" />
      <animate attributeName="opacity" begin="0s" dur="2s" values="0;1;1;0" repeatCount="indefinite" />
      <polygon points="0,5 6,0 6,2 20,2 20,7 6,7 6,9" y="100" style="fill:#2f75fb" />
    `;
    arrows1.appendChild(polygon);
  }
}

function updateArrows2(temp, sum) {
  const levels = Math.ceil(sum / 10);
  const polygons = arrows2.querySelectorAll('svg');

  polygons.forEach(node => arrows2.removeChild(node));

  for (let i = 0; i < levels; i++) {
    const polygon = document.createElementNS('http://www.w3.org/2000/svg','svg');
    polygon.setAttribute('width', CLIENT_WIDTH * 0.125);
    polygon.setAttribute('height', CLIENT_WIDTH * 0.234);
    polygon.style.top = `-${i / 2 * 4}%`;
    polygon.style.left = `${i / 2 * 3}%`;

    polygon.innerHTML = `
      <polygon points="20,5 14,0 14,2 0,2 0,7 14,7 14,9" style="fill:#e4574e">
        <animateMotion path="M140,280 q-190,-80 -110,-240" begin="0s" dur="3s" rotate="auto" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="0s" dur="3s" values="0;1;1;1;0" repeatCount="indefinite" />
      </polygon>
    `;
    if (i % 2 === 1) {
      setTimeout(() => arrows2.appendChild(polygon), 1500);
    } else {
      arrows2.appendChild(polygon);
    }
  }
}

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

  updateArrows1(temp, sum);
  updateArrows2(temp, sum);
}
