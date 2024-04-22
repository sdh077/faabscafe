import { Point } from "./point.js";
const COLOR = [
  '#222',
  '#fafafa',
  '#00ccff',
  '#22dddd',
  '#1300ff',
  '#6600ff',
  '#9900ff',
  '#ff0066',
  '#fe0222',
  '#fd7702',
  '#ffbb00',
]
export class Wave {
  constructor(index, totalPoints, color) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    this.points = [];

    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(this.index + i, this.pointGap * i, this.stageHeight);
      this.points[i] = point;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    let prevX = this.points[0].x;
    let prevY = this.points[0].y / 2;

    const point = this.points[0]
    point.update()
    const cx = (prevX + point.x) / 2;
    const cy = (prevY + point.y) / 2;
    const upEdge = point.y
    const downEdge = point.y + this.stageHeight
    ctx.moveTo(0, upEdge);
    ctx.quadraticCurveTo(this.stageWidth / 2, upEdge / 2, this.stageWidth, upEdge);
    ctx.lineTo(this.stageWidth, upEdge);
    ctx.lineTo(this.stageWidth, downEdge);
    ctx.quadraticCurveTo(this.stageWidth / 2, downEdge / 2, 0, downEdge);
    ctx.lineTo(0, downEdge);

    // for (let i = 1; i < this.totalPoints; i++) {
    //   if (i < this.totalPoints - 1) {
    //     this.points[i].update();
    //   }

    //   const cx = (prevX + this.points[i].x) / 2;
    //   const cy = (prevY + this.points[i].y) / 2;
    //   ctx.quadraticCurveTo(prevX, prevY, cx, cy);

    //   prevX = this.points[i].x;
    //   prevY = this.points[i].y;
    // }

    // ctx.lineTo(prevX, prevY);
    // ctx.lineTo(this.stageWidth, this.stageHeight / 2);
    // ctx.lineTo(this.stageWidth, 0);
    // ctx.lineTo(0, 0);
    // ctx.lineTo(this.points[0].x, this.stageHeight / 2);
    ctx.fill();
    ctx.closePath();
  }
}
