import Phaser from 'phaser';

import SimpleSprite from '../Classes/SimpleSprite';
import Button from '../Classes/UI/Button';
import Factory from '../Classes/Factory'

export default class extends Phaser.Scene {
  constructor () {
    super();

    this.simpleImage = null;
    this.startButton = null;
  }

  init () {
    console.log('init');
  }

  preload () {
    console.log('preload');
    this.load.image('card', '../Assets/images/sprite.png');
  }

  create () {
    this.simpleImage = new SimpleSprite({
      scene: this,
      x: 200,
      y: 300,
      sprite: 'card',
    });

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
        console.log('start game');
      }
    });

    this.add.existing(this.simpleImage);
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
    // this.simpleText.update(time, delta);
  }
}
