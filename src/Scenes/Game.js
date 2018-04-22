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
      barGray: null,
      barPink: null,
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
    this.load.image('background', '../Assets/images/backgroundgame.png');
  }


  create (props) {
    const scene = this;
    this.sex = 50;

    this.factory = new Factory(this, 'factory');
    this.factory.runFactory();

    let { deck, hand, woman, score } = this.gameObjects;

    this.add.image(600, 360, 'background');

    this.gameObjects.deck = new Deck({ scene, x: 150, y: 500, sprite: 'deck' });
    this.gameObjects.hand = new Hand({ scene, x: 200, y: 300, sprite: 'card' });
    
    const rndWoman = this.factory.woman[
      Math.floor(Math.random() * this.factory.woman.length)
    ];

    this.gameObjects.woman = new Woman(
      { scene, x: 1200 * 0.5, y: 150, sprite: rndWoman.texture.key }, 
      { id: rndWoman.id, type: rndWoman.type, image: rndWoman.sprite }
    );

    this.gameObjects.woman.scaleX = 0.8;
    this.gameObjects.woman.scaleY = 0.8;

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
                icon: card.icon,
              },
            );
        }
      )
    );

    this.drawCards();

    this.gameObjects.deckCount = new Phaser.GameObjects.Text(this, 140, 450, this.cardsCount, {
      color: '#FF1E52',
      fontSize: '22px',
      fixedWidth: '30px',
      align: 'center',
      fontFamily: 'Ourverture-script',
    });

    this.gameObjects.barGray = new Phaser.GameObjects.Sprite(
      this,
      1100,
      720 * 0.5,
      'bar'
    );

    this.gameObjects.barPink = new Phaser.GameObjects.Sprite(
      this,
      1100,
      720 * 0.5 + 200,
      'bar-fill'
    );

    this.gameObjects.barPink.setOrigin(0.5, 1);

    this.gameObjects.woman.render();
    this.add.existing(this.gameObjects.deck);
    this.add.existing(this.gameObjects.deckCount);
    this.add.existing(this.gameObjects.barGray);
    this.add.existing(this.gameObjects.barPink);

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
    console.log('LENGTH: '  + this.gameObjects.deck.length());
    if (this.sex >= 100) {
      this.scene.start('GameEnd', {data: true});
    }
    else if (this.sex <= 0) {
      this.scene.start('GameEnd', {data: false});
    } else if(this.gameObjects.deck.length() <= 3) {
      this.scene.start('GameEnd', {data: false});
    }
  }

  update (time, delta) {
    this.cardsCount = this.gameObjects.deck.length();

    const x = (this.sex / 100) * 400 / 1000;
    //Current Health / Max Health) * Max Size of Bar
    this.gameObjects.barPink.scaleY = x;
    this.gameObjects.deckCount.setText(this.cardsCount);

    this.scoreCheck();
  }
}
