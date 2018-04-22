import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor(config, params) {
    super(
      config.scene,
      config.x,
      config.y,
      config.sprite
    );

    this.id = params.id;
    this.title = params.title;
    this.description = params.description;
    this.type = params.type;
    this.effect = params.effect;
    this.order = -1;

    this.setInteractive();
  }

  getId() {
    return id;
  }

  getTitle() {
    return this.title;
  }

  setTitle(value) {
    this.title = value;
  }

  getDescription() {
    return this.description;
  }

  setDescription(value) {
    this.description = value;
  }

  getType() {
    return this.type;
  }

  setType(value) {
    this.type = value;
  }

  getEffect() {
    return this.effect;
  }

  setEffect(value) {
    this.effect = value;
  }

  get(){
    return this;
  }

  draw() {
    delete this;
  }

  playSound(){

  }

  update (time, delta) {

  }
}
