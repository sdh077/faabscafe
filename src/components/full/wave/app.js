import { WaveGroup } from "./wavegroup.js";

class WaveComponent {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    const COLOR = [
      'rgba(255, 255, 0, 1)',
      'rgba(250,250,250,1)',
      'rgba(00,170,255,1)',
      'rgba(22,170,170,1)',
      'rgba(13,00,255,1)',
      'rgba(66,00,255,1)',
      'rgba(99,00,225,1)',
      'rgba(255,00,66,1)',
      'rgba(240,02,22,1)',
      'rgba(240,77,2,1)',
      'rgba(240,200,0,1)',
    ]

    this.waveGroup = new WaveGroup(COLOR[Date.now() % 11]);

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.waveGroup.draw(this.ctx);
  }
}

export { WaveComponent }