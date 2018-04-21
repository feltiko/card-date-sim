import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor (config) {
    super(
      config.scale,
      config.x,
      config.y,
      config.sprite
    );
  }

  playSound(){

  }

  update (time, delta) {
    this.x += 20 / delta * this.dir;

    if (this.x > 300) this.dir = -1;
    else if (this.x < 50) this.dir = 1;
  }
}