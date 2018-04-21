import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor (config, params) {
    super(
      config.scene,
      config.x,
      config.y,
      config.sprite
    );

    this.id = params.id;
    this.type = params.type;
    this.setInteractive();
  }

  playSound () {

  }

  update (time, delta) {

  }
}