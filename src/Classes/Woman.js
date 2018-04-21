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

  const text = new Phaser.GameObjects.Text(
    config.scene, 10, 10, 'dkjsfsdlkfjl ksjflk jdslfk'
  );
  console.log(text);
    this.scene.add.existing(text);
  }

  playSound(){

  }

  update (time, delta) {

  }
}