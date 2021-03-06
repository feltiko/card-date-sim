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
    this.load.image('selected', '../Assets/images/cardSelect.png')
  }

  create (props) {
    const scene = this;
    this.factory = new Factory(this, 'factory');
    this.factory.runFactory();
    console.log(this.factory);
    let deck = this.gameObjects;
    let cards = this.factory.cards;

    this.add.image(600, 360, 'background');
    let x = 150;
    let y = 150;


    cards.forEach((value, index) => {
      console.log(value.sprite);
      value.sprite  = this.add.image('selected');
      console.log(value.sprite);
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
