import Phaser from 'phaser';
import Button from "../Classes/UI/Button";

export default class extends Phaser.Scene {
  constructor () {
    super({
      key: 'GameEnd'
    });

  }

  init () {
    console.log('init game');
  }

  preload () {
    console.log('preload');
    console.log('_________________________');
    this.load.image('background', '../Assets/images/backgroundgame.png');
  }


  create (props, status) {
    const scene = this;

    this.add.image(600, 360, 'background');

    console.log(props);

    if(props.data) {
      this.message = new Button({
        scene: this,
        id: 'text',
        x: 460,
        y: 100,
        text: 'У кого то будет секс',
        styles: {
          color: '#FF1E52',
          fontSize: '50px',
          fontFamily: 'Ourverture-script',
        },
      });
    } else {
      this.message = new Button({
        scene: this,
        id: 'text',
        x: 350,
        y: 100,
        text: 'Ты проебал все полимеры',
        styles: {
          color: '#FF1E52',
          fontSize: '50px',
          fontFamily: 'Ourverture-script',
        },
      });
    }

    this.newGameButton = new Button({
      scene: this,
      id: 'newGame',
      x: 560,
      y: 300,
      text: 'New Game',
      styles: {
        color: '#FF1E52',
        fontSize: '36px',
        fontFamily: 'Ourverture-script',
      },
      handler: (pointer, button) => {
        this.scene.start('Game');
      }
    });

    this.menuButton = new Button({
      scene: this,
      id: 'menu',
      x: 560,
      y: 400,
      text: 'Menu',
      styles: {
        color: '#FF1E52',
        fontSize: '36px',
        fontFamily: 'Ourverture-script',
      },
      handler: (pointer, button) => {
        this.scene.start('Boot');
      }
    });

    this.add.image(600, 360, 'background');
    this.add.existing(this.message);
    this.add.existing(this.newGameButton);
    this.add.existing(this.menuButton);

    this.input.on('gameobjectup', this.btnHandler, this);
  }

  btnHandler (pointer, item) {
    if (!item.id) return;
    console.log(item.id);
    switch (item.id) {
      case 'newGame':
        this.newGameButton.handler(pointer, item);
        break;
      case 'menu':
        this.menuButton.handler(pointer, item);
        break;
      default: return;
    }
  }

  update (time, delta) {

  }
}
