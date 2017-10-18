import './index.scss';

const CLIENT_WIDTH = window.innerWidth;
const COLORS = [ '#061e81', '#1E1B9B', '#1B519B', '#237BC4', '#58b7ee', '#c9dae3', '#f2f3d6', '#edf271', '#EDE780', '#E5B329', '#F7D82C', '#f2962a', '#f24f2a', '#f43205', '#DB061B', '#A51D32', '#8E1925' ];


const blueNum = document.querySelector('.page2 .blue .num');
const redNum = document.querySelector('.page2 .red .num');
const doors = document.querySelectorAll('.page2 .door');
const arrows1 = document.querySelector('.page2 .arrows1');
const arrows2 = document.querySelector('.page2 .arrows2');
const arrows3 = document.querySelector('.page2 .arrows3');
const arrows4 = document.querySelector('.page2 .arrows4');
const arrows5 = document.querySelector('.page2 .arrows5');
const arrows6 = document.querySelector('.page2 .arrows6');
const arrows7 = document.querySelector('.page2 .arrows7');

function updateArrows1(sum) {
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

function updateArrows2(sum) {
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

function updateArrows3(sum) {
  const levels = Math.ceil(sum / 20);
  const polygons = arrows3.querySelectorAll('svg');

  polygons.forEach(node => arrows3.removeChild(node));

  for (let i = 0; i < levels; i++) {
    const polygon = document.createElementNS('http://www.w3.org/2000/svg','svg');
    polygon.setAttribute('width', CLIENT_WIDTH * 0.094);
    polygon.setAttribute('height', CLIENT_WIDTH * 0.117);
    polygon.style.top = `-${i * 2}%`;
    polygon.style.left = `${i * 1}%`;

    polygon.innerHTML = `
      <polygon points="20,5 14,0 14,2 0,2 0,7 14,7 14,9" style="fill:#2f75fb">
        <animateMotion path="M100,90 q-100,-40 -90,-80" begin="0s" dur="1.5s" rotate="auto" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="0s" dur="1.5s" values="0;1;1;0" repeatCount="indefinite" />
      </polygon>
    `;
    if (i % 2 === 1) {
      setTimeout(() => arrows3.appendChild(polygon), 750);
    } else {
      arrows3.appendChild(polygon);
    }
  }
}

function updateArrows4(sum) {
  const levels = Math.ceil(sum / 20);
  const polygons = arrows4.querySelectorAll('svg');

  polygons.forEach(node => arrows4.removeChild(node));

  for (let i = 0; i < levels; i++) {
    const polygon = document.createElementNS('http://www.w3.org/2000/svg','svg');
    polygon.setAttribute('width', CLIENT_WIDTH * 0.094);
    polygon.setAttribute('height', CLIENT_WIDTH * 0.117);
    polygon.style.top = `${i * 2}%`;
    polygon.style.left = `${i * 1}%`;

    polygon.innerHTML = `
      <polygon points="20,5 14,0 14,2 0,2 0,7 14,7 14,9" style="fill:#2f75fb">
        <animateMotion path="M100,20 q-105,20 -90,80" begin="0s" dur="1.5s" rotate="auto" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="0s" dur="1.5s" values="0;1;1;0" repeatCount="indefinite" />
      </polygon>
    `;
    if (i % 2 === 1) {
      setTimeout(() => arrows4.appendChild(polygon), 750);
    } else {
      arrows4.appendChild(polygon);
    }
  }
}

function updateArrows5(temp, sum) {
  const levels = Math.ceil(sum / 20);
  const polygons = arrows5.querySelectorAll('svg');

  polygons.forEach(node => arrows5.removeChild(node));

  for (let i = 0; i < levels; i++) {
    const polygon = document.createElementNS('http://www.w3.org/2000/svg','svg');
    polygon.setAttribute('width', CLIENT_WIDTH * 0.062);
    polygon.setAttribute('height', CLIENT_WIDTH * 0.093);
    polygon.style.top = `-${i * 2}%`;
    polygon.style.left = `${i * 2}%`;

    polygon.innerHTML = `
      <polygon points="20,5 14,0 14,2 0,2 0,7 14,7 14,9" style="fill:${COLORS[temp]}">
        <animateMotion path="M0,110 q0,-50 20,-100 " begin="0s" dur="1s" rotate="auto" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="0s" dur="1s" values="0;1;1;0" repeatCount="indefinite" />
      </polygon>
    `;
    if (i % 2 === 1) {
      setTimeout(() => arrows5.appendChild(polygon), 500);
    } else {
      arrows5.appendChild(polygon);
    }
  }
}

function updateArrows6(temp, sum) {
  const levels = Math.ceil(sum / 20);
  const polygons = arrows6.querySelectorAll('svg');

  polygons.forEach(node => arrows6.removeChild(node));

  for (let i = 0; i < levels; i++) {
    const polygon = document.createElementNS('http://www.w3.org/2000/svg','svg');
    polygon.setAttribute('width', CLIENT_WIDTH * 0.062);
    polygon.setAttribute('height', CLIENT_WIDTH * 0.101);
    polygon.style.top = `${i * 1}%`;
    polygon.style.left = `-${i * 3}%`;

    polygon.innerHTML = `
      <polygon points="20,5 14,0 14,2 0,2 0,7 14,7 14,9" style="fill:${COLORS[temp]}">
        <animateMotion path="M70,120 q-20,-50 -20,-100 " begin="0s" dur="1s" rotate="auto" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="0s" dur="1s" values="0;1;1;0" repeatCount="indefinite" />
      </polygon>
    `;
    if (i % 2 === 1) {
      setTimeout(() => arrows6.appendChild(polygon), 500);
    } else {
      arrows6.appendChild(polygon);
    }
  }
}

function updateArrows7(temp, sum) {
  const levels = Math.ceil(sum / 20);
  const polygons = arrows7.querySelectorAll('svg');

  polygons.forEach(node => arrows7.removeChild(node));

  for (let i = 0; i < levels; i++) {
    const polygon = document.createElementNS('http://www.w3.org/2000/svg','svg');
    polygon.setAttribute('width', CLIENT_WIDTH * 0.093);
    polygon.setAttribute('height', CLIENT_WIDTH * 0.195);
    polygon.style.top = `-${i * 2}%`;
    polygon.style.left = `-${i * 3}%`;

    polygon.innerHTML = `
      <polygon points="20,5 14,0 14,2 0,2 0,7 14,7 14,9" style="fill:${COLORS[temp]}">
        <animateMotion path="M110,50 q-40,100 -50,200" begin="0s" dur="2s" rotate="auto" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="0s" dur="2s" values="0;1;1;0" repeatCount="indefinite" />
      </polygon>
    `;
    if (i % 2 === 1) {
      setTimeout(() => arrows7.appendChild(polygon), 1000);
    } else {
      arrows7.appendChild(polygon);
    }
  }
}

export function updatePage2(mode, temp, sum, blue, red) {
  blueNum.innerHTML = `${blue}℃`;
  redNum.innerHTML = `${red}℃`;


  if (mode === 2 || mode === 4 || mode === 6 || mode === 7) {
    doors[0].style.webkitTransform = 'rotate(-60deg)';
    arrows7.style.display = 'block';
  } else {
    doors[0].style.webkitTransform = 'rotate(0deg)';
    arrows7.style.display = 'none';
  }

  if (mode === 1 || mode === 4 || mode === 5 || mode === 7) {
    doors[1].style.webkitTransform = 'rotate(90deg)';
    arrows6.style.display = 'block';
  } else {
    doors[1].style.webkitTransform = 'rotate(0deg)';
    arrows6.style.display = 'none';
  }

  if (mode === 3 || mode === 5 || mode === 6 || mode === 7) {
    doors[2].style.webkitTransform = 'rotate(90deg)';
    arrows5.style.display = 'block';
  } else {
    doors[2].style.webkitTransform = 'rotate(40deg)';
    arrows5.style.display = 'none';
  }

  doors[3].style.webkitTransform = `rotate(${45 - ((temp - 16) / 16) * 70}deg)`;

  const intTemp = Math.ceil(temp) - 16;

  updateArrows1(sum);
  updateArrows2(sum);
  updateArrows3(sum);
  updateArrows4(sum);
  updateArrows5(intTemp, sum);
  updateArrows6(intTemp, sum);
  updateArrows7(intTemp, sum);
}
