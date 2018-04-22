import Phaser from 'phaser';
import Factory from '../Classes/Factory';

import jsonCards from "../Data/cards.json";

import Deck from '../Classes/Deck';
import Card from '../Classes/Card';
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
      deckCount: null,
    };

    this.cardsCount = 0;
    this.sex = 50;
    this.factory = null;
  }

  init () {
    console.log('init game');
  }

  preload () {
    console.log('preload');
    console.log('_________________________');
    this.load.image('background', '../Assets/images/backgroundmenu.png');
  }


  create (props) {
    const scene = this;
    this.factory = new Factory(this, 'factory');
    this.factory.runFactory();

    let { deck, hand, woman, score } = this.gameObjects;

    this.add.image(600, 360, 'background');

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
        (value, index) => {
          let card = this.factory.cards[
            Math.floor(Math.random() * this.factory.cards.length)
          ];

          return new Card(
              { scene: this, x: 0, y: 0, sprite: 'card' },
              {
                id: card.id, 
                title: card.title,
                description: card.description,
                type: card.type,
                effect: card.effect,
              },
            );
        }
      )
    );

    this.drawCards();

    this.gameObjects.score = new Phaser.GameObjects.Text(this, 50, 50, this.sex);
    this.gameObjects.deckCount = new Phaser.GameObjects.Text(this, 50, 70, this.cardsCount);
    // TODO: recursivly add all gameobjects
    this.add.existing(this.gameObjects.deck);
    this.add.existing(this.gameObjects.woman);
    this.add.existing(this.gameObjects.score);
    this.add.existing(this.gameObjects.deckCount);

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
    const drawedCards = this.gameObjects.deck.getRandomCards(3);
    this.gameObjects.hand.setHand(drawedCards);
    this.gameObjects.hand.renderHand();
  }

  btnHandler (pointer, item) {
    if (!item.id) return null;
  }

  scoreCheck () {
    if (this.sex >= 100) { console.log('win'); }
    else if (this.sex <= 0) { console.log('lose'); }
  }

  update (time, delta) {
    this.cardsCount = this.gameObjects.deck.length();

    this.gameObjects.score.setText(this.sex);
    this.gameObjects.deckCount.setText(this.cardsCount);

    this.scoreCheck();
  }
}
