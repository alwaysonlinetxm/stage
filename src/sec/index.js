import 'pixi.js';

import Timg from './images/timg.jpeg';

var app = new PIXI.Application(800, 600, {backgroundColor : 0x000000});
document.body.appendChild(app.view);

// var bunny = PIXI.Sprite.fromImage(Timg)
//
// // center the sprite's anchor point
// bunny.anchor.set(0.5);
//
// // move the sprite to the center of the screen
// bunny.x = app.renderer.width / 2;
// bunny.y = app.renderer.height / 2;
//
// app.stage.addChild(bunny);
//
// let colorMatrix = new PIXI.filters.ColorMatrixFilter();
//  bunny.filters = [colorMatrix];
//  colorMatrix.contrast(2);

const box = new PIXI.Container();

for (let i = 10; i < 300; i++) {
  var graphics = new PIXI.Graphics();

  // set a fill and line style
  // graphics.beginFill(0xFF3300);
  graphics.lineStyle(1, 0xffd900, 1);

  // draw a shape
  // graphics.moveTo(i, Math.log2(i) / Math.log2(2));
  // graphics.lineTo(i, Math.log2(i) / Math.log2(3));
  graphics.moveTo(i, Math.cbrt(i) * 30);
  graphics.lineTo(i, Math.sqrt(i) * 25);
  graphics.alpha = (300 - i) / 300;
  // console.log(Math.log2(i) / Math.log2(2) * 2, Math.log2(i) / Math.log2(3))
  console.log(Math.cbrt(i), Math.sqrt(i))



  box.addChild(graphics);
}
box.scale.set(0.5)

app.stage.addChild(box)
