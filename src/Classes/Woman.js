import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor (config, params) {
    super(
      config.scale,
      config.x,
      config.y,
      config.sprite
    );
    const id = params.id;
    const type = params.type;
    this.setInteractive();
  }

  playSound(){

  }

  update (time, delta) {

  }
}