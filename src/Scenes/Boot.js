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
  }

  preload () {
    /** Load all assets */
    this.load.image('card', '../Assets/images/card.png');
    this.load.image('deck', '../Assets/images/deck.png');
    this.load.image('woman-1', '../Assets/images/woman2.png');
    this.load.image('woman-2', '../Assets/images/woman3.png');
    this.load.image('woman-3', '../Assets/images/woman4.png');
    this.load.image('woman-4', '../Assets/images/woman1.png');
    this.load.image('background', '../Assets/images/backgroundmenu.png');
    this.load.image('heart', '../Assets/images/heart.png');
    this.load.image('bar', '../Assets/images/sex-bar.png');
    this.load.image('bar-fill', '../Assets/images/sex-bar--success.png');
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
      id: 'deckBtn',
      x: 560,
      y: 300,
      text: 'Deck',
      styles: {
        color: '#FF1E52',
        fontSize: '36px',
        fontFamily: 'Ourverture-script',
      },
      handler: (pointer, button) => {
        this.scene.start('DeckScene');
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
      case 'deckBtn':
          this.deckButton.handler(pointer, item);
          break;
      default: return;
    }
  }

  update(time, delta) {
  }
}
