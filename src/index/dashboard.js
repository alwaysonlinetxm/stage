import 'pixi.js';

const dashboard = new PIXI.Container();
const graphics = new PIXI.Graphics();
const mask = new PIXI.Graphics();
const WIDTH = 300;
const HEIGHT = 240;

dashboard.width = WIDTH;
dashboard.height = HEIGHT;

graphics.lineStyle(2, 0xffffff, 1);
// graphics.beginFill(0x2d3975, 1);
graphics.drawCircle(WIDTH / 2, HEIGHT * 0.8, 120);
// graphics.endFill();

mask.lineStyle(0);
mask.beginFill(0xffffff, 1);
mask.drawRect(0, 0, WIDTH, HEIGHT);
dashboard.addChild(mask);

graphics.mask = mask;

dashboard.addChild(graphics);

export default { sprite: dashboard, width: WIDTH, height: HEIGHT };
