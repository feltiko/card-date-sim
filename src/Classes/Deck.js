import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(
      config.scene,
      config.x,
      config.y,
      config.sprite
    );

    this.deck = [];
    this.id = 'deck';
  }

  fillDeck (cards) {
    cards.forEach((value, index) => {
      this.deck.push(value);
    }, this);
  }

  length () {
    return this.deck.length;
  }

  getRandomCards () {
    if (3 >= this.deck.length) {
      return this.deck;
    } else {
      return [...new Array(3)].map((value, index) => {
        const rnd = Math.floor(Math.random() * this.deck.length);
        const elem = this.deck[rnd];
        elem.scene = this.scene;

        this.deck.splice(rnd, 1);

        this.deck.forEach((value, index) => {
          value.scene = value.scene;
        });

	      return elem;
      });
    }
  }

  playSound () {

  }

  update (time, delta) {

  }
}