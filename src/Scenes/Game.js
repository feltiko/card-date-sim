import Phaser from 'phaser';
import Factory from '../Classes/Factory';

import Deck from '../Classes/Deck';
import Woman from '../Classes/Woman';
import Hand from '../Classes/Hand';

export default class extends Phaser.Scene {
  constructor () {
    super({
      key: 'Game'
    });

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
    console.log('_________________________');
  }

  getRandomInt (max, min) { return Math.round(Math.random() * (max - min) + min); }

  create (props) {
    const scene = this;
    const factory = new Factory(this);
    let { deck, hand, woman } = this.gameObjects;

    deck = new Deck({ scene, x: 150, y: 500, sprite: 'deck' });
    hand = new Hand({ scene, x: 200, y: 300, sprite: 'card' });
    woman = new Woman(
      { scene, x: 1200 * 0.5, y: 200, sprite: 'woman' }, 
      { id: 1, type: 'whore', }
    );

    woman.scaleX = 0.2;
    woman.scaleY = 0.2;

    deck.fillDeck(
      [...new Array(10)].map(
        (value, index) => factory.cards[this.getRandomInt(0, factory.cards.length - 1)]
      )
    );

    const drawedCards = deck.getCards(3);
    hand.setHand(drawedCards);
    hand.renderHand();
    // TODO: recursivly add all gameobjects
    this.add.existing(deck);
    this.add.existing(woman);

    this.input.on('gameobjectup', this.btnHandler, this);
  }

  btnHandler (pointer, item) {
    if (!item.id) return null;

    if (item.id === 'deck') {
      console.log(item);
    }
  }

  update(time, delta) {
  }
}
