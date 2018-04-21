import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Text {
  constructor (config) {
    super(
      config.scene,
      config.x,
      config.y,
      config.text,
      config.styles,
    );

    this.id = config.id;
    this.handler = config.handler;

    this.setInteractive();
  }
}
