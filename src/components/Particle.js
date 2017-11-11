import 'pixi.js';

export default class Particle {
  constructor(opt) {
    this.particles = new PIXI.Container();
    this.particleList = [];
    this.startX = 0;
    this.endX = opt.width;
    this.startY1 = 0;
    this.startY2 = opt.height;
    this.sum = opt.sum;
    this.color = opt.color;
    this.k = opt.k;
    this.w = opt.w;
    this.radius = 2;
    this.dis = opt.dis || 1.5;
    this.dir = this.startX > this.endX ? -1 : 1;
    this.x1 = this.startX + (this.endX - this.startX) * 0.3;
    this.x2 = this.startX + (this.endX - this.startX) * 0.6;

    this.setSum(this.sum, 5);
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
        node.drawCircle(0, 0, this.radius);
        node.endFill();
      })(i), (interval || 50) * i);
    }
  }

  animate() {
    const { particleList, startX, endX, startY1, startY2, x1, x2, dir, sum, k } = this;

    for (let i = 0; i < Math.min(sum, particleList.length); i++) {
      const node = particleList[i];

      if (dir === 1 && node.x < endX || dir === -1 && node.x >= endX) {
        const { dis } = node;

        node.x += dis;
        node.y = node.startY + Math.sqrt(Math.abs(node.x)) * k + Math.sqrt(node.w * Math.abs(node.x));
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
    const { startX, endX, startY1, startY2, dir, color, w, dis } = this;
    const particle = new PIXI.Graphics();

    particle.lineStyle(0.3, 0xFFFFFF, 0.2);
    particle.beginFill(color, 0.9);
    particle.drawCircle(0, 0, this.radius);
    particle.endFill();
    // custom attr
    particle.dis = dir * (dis + Math.random() * 0.3);
    // particle.dis = dir * 1.5;
    particle.startY = startY1 + (Math.random() * (startY2 - startY1));
    particle.w = 1 + w * Math.random();

    return particle;
  }
}
