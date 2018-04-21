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
    this.positions = [
      { x: 1280 * 0.5 - 200, y: 500 },
      { x: 1280 * 0.5, y: 500 },
      { x: 1280 * 0.5 + 200, y: 500 },
    ];
  }

  getHand () {
    return this.hand;
  }

  setHand (value) {
    this.hand = value;
  }

  renderHand () {
    const { scene, hand, positions } = this;

    hand.forEach((value, index) => {
      value.x = positions[index].x;
      value.y = positions[index].y;

      scene.add.existing(value)
    });
  }

  getElemById (id) {
    return this.hand[index];
  }

  setElemById (id, value) {
    this.hand[index] = value;
  }

  playSound () {

  }

  update (time, delta) {

  }
}