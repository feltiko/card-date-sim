import Phaser from 'phaser';
import Factory from '../Classes/Factory';

import Deck from '../Classes/Deck';

export default class extends Phaser.Scene {
  constructor () {
    super({
      key: 'DeckScene'
    });
  }

  init () {
    console.log('init DeckScene');
  }

  preload () {
    console.log('preload DeckScene');
    console.log('_________________________');
    this.load.image('background', '../Assets/images/backgrounddeka.png');
  }

  create (props) {
    const scene = this;
    const factory = new Factory(this);
    let deck = this.gameObjects;
    let cards = factory.cards;

    this.add.image(600, 360, 'background');
    let x = 150;
    let y = 150;

    cards.forEach((value, index) => {

      if(((index + 1) % 7) == 0) {
        value.x = x;
        value.y = y;
        value.scaleX = 0.5;
        value.scaleY = 0.5;
        value.order = -1;
        x = 150;
        y += 200;
      } else {
        value.x = x;
        value.y = y;
        value.scaleX = 0.5;
        value.scaleY = 0.5;
        value.order = -1;
        x += 120;
      }
      scene.add.existing(value);
    });

  }

  update (time, delta) {

  }
}
