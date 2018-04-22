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
    this.icon = params.icon;
    this.order = -1;

    this.info = {
      title: null,
      image: null,
      desc: null,
    };

    this.setInteractive();
  }

  getId() {
    return id;
  }

  getTitle() {
    return this.title;
  }

  render () {
    this.info.title = new Phaser.GameObjects.Text(
      this.scene,
      this.x - 200 * 0.5 + 20,
      this.y - this.height / 2 + 15,
      this.title,
      {
        color: '#FF1E52',
        fontSize: '18px',
        fixedWidth: '30px',
        align: 'center',
        fontFamily: 'Ourverture-script',
      }
    );

    // this.info.title.x = /this.x;

    this.info.image = new Phaser.GameObjects.Sprite(
      this.scene,
      this.x,
      this.y - 30,
      this.icon
      // 'heart',
      // this.texture.key
    );

    this.info.desc = new Phaser.GameObjects.Text(
      this.scene,
      this.x - 200 * 0.5 + 20,
      this.y + 60,
      this.description,
      {
        align: 'left',
        color: '#FF1E52',
        fontSize: '18px',
        fontFamily: 'Ourverture-script',
        fixedWidth: '200px',
      }
    );

    this.info.desc.setWordWrapWidth(
      180
    );

    this.scene.add.existing(this);
    this.scene.add.existing(this.info.title);
    this.scene.add.existing(this.info.image);
    this.scene.add.existing(this.info.desc);

  }

  onDestroy () {
    this.info.title.destroy();
    this.info.image.destroy();
    this.info.desc.destroy();
    this.destroy();
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
