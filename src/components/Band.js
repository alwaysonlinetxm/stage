import 'pixi.js';

export default class Particle {
  constructor(opt) {
    this.band = new PIXI.Container();
    this.bandList = [];
    this.startX = opt.startX;
    this.endX = opt.endX;
    this.k1 = opt.k1;
    this.k2 = opt.k2;
    this.dir = this.endX > 0 ? 1 : -1;

    this.create(opt.color);
  }

  create(color) {
    const { band, bandList, startX, endX, k1, k2, dir } = this;
    const start = Math.abs(startX);
    const end = Math.abs(endX);

    for (let i = start; i < end; i++) {
      var graphics = new PIXI.Graphics();

      graphics.lineStyle(1, color, 1);
      graphics.alpha = (end - i) / end * 0.7;
      graphics.moveTo(i * dir, Math.cbrt(i) * k1);
      graphics.lineTo(i * dir, Math.sqrt(i) * k2);
      graphics.dx = i;

      bandList.push(graphics);
      band.addChild(graphics);
    }
  }

  setColor(color) {
    const { band, bandList, dir, k1, k2 } = this;

    for (let i = 0; i < bandList.length; i++) {
      setTimeout((i => () => {
        const node = bandList[i];

        node.clear();
        node.lineStyle(1, color, 1);
        node.moveTo(node.dx * dir, Math.cbrt(node.dx) * k1);
        node.lineTo(node.dx * dir, Math.sqrt(node.dx) * k2);
      })(i), 10 * i);
    }
  }
}
