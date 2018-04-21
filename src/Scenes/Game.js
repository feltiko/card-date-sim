import Phaser from 'phaser';
import SimpleSprite from '../Classes/SimpleSprite';

import Deck from '../Classes/Deck';
import Woman from '../Classes/Woman';
import Hand from '../Classes/Hand';

export default class extends Phaser.Scene {
  constructor () {
    super({
      key: 'Game'
    });

    this.simpleImage = null;
    this.gameObjects = {
      deck: null,
      woman: null,
      hand: null,
    };
  }

  init () {
    console.log('init');
  }

  preload () {
    console.log('preload');
  }

  create () {
    console.log('create');
    const scene = this;
    console.log(scene.game);
    this.simpleImage = new SimpleSprite({ scene, x: 500, y: 500, sprite: 'card' });
    this.gameObjects.deck = new Deck({ scene, x: 150, y: 500, sprite: 'deck' });
    this.gameObjects.woman = new Woman(
      { scene, x: 1200 * 0.5, y: 200, sprite: 'woman' }, 
      { id: 1, type: 'whore', }
    );

    this.gameObjects.woman.scaleX = 0.2;
    this.gameObjects.woman.scaleY = 0.2;

    console.log(this.gameObjects.woman);

    // this.gameObjects.hand = new Hand({ scene, x: 200, y: 300, sprite: 'card' });

    // TODO: recursivly add all gameobjects
    this.add.existing(this.gameObjects.deck);
    this.add.existing(this.simpleImage);
    this.add.existing(this.gameObjects.woman);

    this.input.on('gameobjectup', this.btnHandler, this);
  }

  btnHandler (pointer, item) {
    if (!item.id) return null;

    if (item.id === 'deck') {
      console.log(item.id);
    }
  }

  update(time, delta) {
  }
}
