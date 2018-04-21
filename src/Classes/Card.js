import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite{
  constructor(config, params) {
    super(
      config.scale,
      config.x,
      config.y,
      config.sprite
    );
    const id = params.id;
    this.title = params.title;
    this.description = params.description;
    this.type = params.type;
    this.effect = params.effect;
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
    this.x += 20 / delta * this.dir;

    if (this.x > 300) this.dir = -1;
    else if (this.x < 50) this.dir = 1;
  }
}
