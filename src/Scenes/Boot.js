import Phaser from 'phaser';

import SimpleText from '../Classes/SimpleText';
import SimpleSprite from '../Classes/SimpleSprite';

export default class extends Phaser.Scene {
  constructor () {
    super();

    this.simpleText = null;
    this.simpleImage = null;
  }

  init () {
    console.log('init');
  }

  preload () {
    console.log('preload');
    this.load.image('card', '../Assets/images/sprite.png');
    
  }

  create () {
    this.simpleText = new SimpleText({
      scene: this,
      x: 60,
      y: 70,
      text: 'Simple text',
      styles: {
        backgroundColor: '#f0f',
      },
    });

    this.simpleImage = new SimpleSprite({
      scene: this,
      x: 200,
      y: 300,
      sprite: 'card',
    });


    this.add.existing(this.simpleText);
    this.add.existing(this.simpleImage);
  }

  update(time, delta) {
    this.simpleText.update(time, delta);
  }
}
