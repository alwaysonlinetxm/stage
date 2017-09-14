import 'pixi.js';

import '../libs/reset.scss';

import Logo from './images/logo.png';

var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
app.view.style.position = "absolute";
app.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

var container = new PIXI.Container();

app.stage.addChild(container);

var texture = PIXI.Texture.fromImage(Logo);
const list = [];

// Create a 5x5 grid of bunnies
for (var i = 0; i < 25; i++) {
    var bunny = new PIXI.Sprite(texture);
    // bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;
    bunny.width = 10;
    bunny.height = 10;
    list.push(bunny);
    container.addChild(bunny);
}
// Center on the screen
// container.x = (app.renderer.width - container.width) / 2;
container.y = (app.renderer.height - container.height) / 2;

app.ticker.add(function() {
  list.forEach((node, i) => {
    if (node.x + 2 > app.renderer.width) {
      node.x = 0;
    } else {
      node.x += 2;
    }
  });
});
