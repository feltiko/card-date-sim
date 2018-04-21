import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor (config) {
    super(
      config.scene,
      config.x,
      config.y,
      config.sprite,
    );

    this.setInteractive();
  }

  update (time, delta) {
  }
}
