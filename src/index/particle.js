import 'pixi.js';

import particleImg from './images/particle.png';

export default class Particle {
  constructor(opt) {
    this.particles = new PIXI.Container();
    this.particleTexture = PIXI.Texture.fromImage(particleImg);
    this.particleList = [];
    this.startX = opt.startX;
    this.endX = opt.endX;
    this.startY1 = opt.startY1;
    this.endY1 = opt.endY1;
    this.startY2 = opt.startY2;
    this.endY2 = opt.endY2;
    this.sum = opt.sum;
    this.color = opt.color;
    this.dir = this.startX > this.endX ? -1 : 1;
    this.x1 = this.startX + (this.endX - this.startX) * 0.3;
    this.x2 = this.startX + (this.endX - this.startX) * 0.6;

    this.setSum(this.sum);
  }

  setSum(n, interval) {
    const { particles, particleList } = this;

    this.sum = n;
    if (particleList.length > 0 && n <= particleList.length) {
      for (let i = n; i < particleList.length; i++) {
        setTimeout((i => () => {
          particles.removeChild(particleList[i]);
        })(i), (interval || 50) * (i - n));
      }
    } else {
      for (let i = particleList.length; i < n; i++) {
        setTimeout((i => () => {
          const particle = this._createParticle();
          particles.addChild(particle);
          particleList.push(particle);
        })(i), (interval || 50) * (i - particleList.length));
      }
    }
  }

  setColor(color, interval) {
    this.color = color;

    for (let i = 0; i < this.particleList.length; i++) {
      setTimeout((i => () => {
        const node = this.particleList[i];

        node.clear();
        node.lineStyle(0);
        node.beginFill(color, 0.5);
        node.drawCircle(0, 0, 1);
        node.endFill();
      })(i), (interval || 50) * i);
    }
  }

  animate() {
    const { particleList, startX, endX, startY1, startY2, endY1, endY2, x1, x2, dir, sum } = this;

    for (let i = 0; i < Math.min(sum, particleList.length); i++) {
      const node = particleList[i];

      if (dir === 1 && node.x < endX || dir === -1 && node.x >= endX) {
        const { dis, k } = node;

        node.x += dis;
        node.y += dis / k;
        if (dir === 1 && node.x < x1 || dir === -1 && node.x >= x1) {
          node.alpha = (node.x - startX) / (x1 - startX);
        } else if (dir === 1 && node.x > x2 || dir === -1 && node.x <= x2) {
          node.alpha = (endX - node.x ) / (endX - x2);
        } else {
          node.alpha = 1;
        }
      } else {
        node.x = startX;
        node.y = startY1 + (Math.random() * (startY2 - startY1));
        node.alpha = 0;
      }
    }
  }

  _createParticle() {
    const { startX, endX, startY1, startY2, endY1, endY2, dir, color } = this;
    const particle = new PIXI.Graphics();

    particle.lineStyle(0);
    particle.beginFill(color, 0.5);
    particle.drawCircle(0, 0, 1);
    particle.endFill();
    particle.x = startX;
    particle.y = startY1 + (Math.random() * (startY2 - startY1));
    particle.alpha = 0;
    // custom attr
    particle.dis = dir * (0.5 + Math.random() * 0.5);

    const endY = (particle.y - startY1) * (endY2 - startY2) / (endY1 - startY1) + startY2;
    particle.k = (startX - endX) / (particle.y - endY);

    return particle;
  }
}
