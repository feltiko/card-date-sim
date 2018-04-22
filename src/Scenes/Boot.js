import Phaser from 'phaser';

import Button from '../Classes/UI/Button';

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
    this.load.image('background', '../Assets/images/backgroundmenu.png');
  }

  create () {
    this.startButton = new Button({
      scene: this,
      id: 'startBtn',
      x: 520,
      y: 250,
      text: 'Start game',
      styles: {
        color: '#FF1E52',
        fontSize: '36px',
        fontFamily: 'Ourverture-script',
      },
      handler: (pointer, button) => {
        this.scene.start('Game');
      }
    });
    this.deckButton = new Button({
      scene: this,
      id: 'startBtn',
      x: 560,
      y: 300,
      text: 'Deka',
      styles: {
        color: '#FF1E52',
        fontSize: '36px',
        fontFamily: 'Ourverture-script',
      },
      handler: (pointer, button) => {
        this.scene.start('Game');
      }
    });
    this.add.image(600, 360, 'background');
    this.add.existing(this.startButton);
    this.add.existing(this.deckButton);
    
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
