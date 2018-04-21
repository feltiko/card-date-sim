import Phaser from 'phaser';

import Button from '../Classes/UI/Button';
import Factory from '../Classes/Factory'

export default class extends Phaser.Scene {
  constructor () {
    super({
      key: 'Boot'
    });
    this.startButton = null;
  }

  init () {
    console.log('init');
  }

  preload () {
    console.log('preload');
    /** Load all assets */
    this.load.image('card', '../Assets/images/card.png');
    this.load.image('deck', '../Assets/images/deck.png');
    this.load.image('woman', '../Assets/images/woman.png');
  }

  create () {
    const factory = new Factory();
    const cards = factory.runFactory();
    console.log(cards);
    this.startButton = new Button({
      scene: this,
      id: 'startBtn',
      x: 55,
      y: 70,
      text: 'Start game',
      styles: {
        backgroundColor: '#f0f',
      },
      handler: (pointer, button) => {
        this.scene.start('Game');
      }
    });

    this.add.existing(this.startButton);
    
    this.input.on('gameobjectup', this.btnHandler, this);
  }

  btnHandler (pointer, item) {
    if (!item.id) return;

    switch (item.id) {
      case 'startBtn': 
          this.startButton.handler(pointer, item);
        break;
      default: return;
    }
  }

  update(time, delta) {
  }
}
