import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor (config) {
    super(
      config.scene,
      config.x,
      config.y,
      config.sprite
    );

    this.hand = [];
    this.settings = [
      { order: 0, x: 1280 * 0.5 - 200, y: 500 },
      { order: 1, x: 1280 * 0.5, y: 500 },
      { order: 2, x: 1280 * 0.5 + 200, y: 500 },
    ];
  }

  getHand () {
    return this.hand;
  }

  setHand (value) {
    this.hand = value;
  }

  renderHand () {
    const { settings } = this;

    this.hand.forEach((value, index) => {
      value.x = settings[index].x;
      value.y = settings[index].y;
      value.order = settings[index].order;
      value.scene = this.scene;
      value.parentContainer = null;
      value.render();
    });
  }

  getElemByOrder (order) {
    return this.hand[order];
  }

  setElemByOrder (order, value) {
    this.hand[order] = value;
  }

  removeCards () {
    this.hand.forEach((value, index) => { 
      value.onDestroy();
    });

    this.hand = [];
  }

  useCard (order, womanType) {
    const effectValue = this.hand[order].effect[womanType];
    this.removeCards();

    return effectValue;
  }

  playSound () {

  }

  update (time, delta) {

  }
}
