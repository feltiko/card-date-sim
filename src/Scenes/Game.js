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
      score: null,
    };

    this.score = 0;
    this.sex = 50;
  }

  init () {
    console.log('init');
  }

  preload () {
    console.log('preload');
    console.log('_________________________');
  }

  create (props) {
    const scene = this;
    const factory = new Factory(this);
    let { deck, hand, woman, score } = this.gameObjects;

    this.gameObjects.deck = new Deck({ scene, x: 150, y: 500, sprite: 'deck' });
    this.gameObjects.hand = new Hand({ scene, x: 200, y: 300, sprite: 'card' });
    this.gameObjects.woman = new Woman(
      { scene, x: 1200 * 0.5, y: 150, sprite: 'woman' }, 
      { id: 1, type: 'whore', }
    );

    this.gameObjects.woman.scaleX = 0.2;
    this.gameObjects.woman.scaleY = 0.2;

    this.gameObjects.deck.fillDeck(
      [...new Array(30)].map(
        (value, index) => factory.cards[Math.floor(Math.random() * factory.cards.length)]
      )
    );

    console.log(this.gameObjects.deck);

    this.drawCards();

    this.gameObjects.score = new Phaser.GameObjects.Text(this, 50, 50, this.sex);
    // TODO: recursivly add all gameobjects
    this.add.existing(this.gameObjects.deck);
    this.add.existing(this.gameObjects.woman);
    this.add.existing(this.gameObjects.score);

    this.input.on('gameobjectup', (p, obj) => {
      if (obj.order !== -1) {
        const { order } = obj;
        const dmg = this.gameObjects.hand.useCard(order, 'whore');
        this.sex += dmg;

        this.drawCards();
      }
    }, this);
  }

  drawCards () {
    // const { deck, hand } = this.gameObjects
    console.log(this);
    
    const drawedCards = this.gameObjects.deck.getCards(3);
    console.log(this.gameObjects.deck.deck);
    console.log(this.gameObjects.hand.hand);
    this.gameObjects.hand.setHand(drawedCards);
    this.gameObjects.hand.renderHand();
  }

  remove (a) {
    console.log(a);
  }

  btnHandler (pointer, item) {
    if (!item.id) return null;

    if (item.id === 'deck') {
      this.remove(this.gameObjects.hand);
      // console.log(this.hand.getElemById(1));
      // 
    }
  }

  scoreCheck () {
    if (this.sex >= 100) { console.log('win'); }
    else if (this.sex <= 0) { console.log('lose'); }
  }

  update (time, delta) {
    this.gameObjects.score.setText(this.sex);

    this.scoreCheck();
  }
}
