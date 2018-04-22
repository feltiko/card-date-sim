import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(
      config.scene,
      config.x,
      config.y,
      config.sprite
    );

    this.deck = [];
    this.id = 'deck';
    this.setInteractive();
  }

  fillDeck (cards) {
    this.deck = cards;
  }

  // TODO: works worng, sometimes return a undefined
  getCards (length) {
    let cards = [];

    if (length < this.deck.length){
      for (let i = 0; i < length; i++) {
        //console.log(this.deck.pop());
        let elem = this.deck.pop();
        elem.id += i;
        cards.push(elem);
      }
      console.log('cards if 1');
      console.log(cards);
      return cards;
    } else if (this.deck.length > 0) {
      for (let i = 0; i < this.deck.length; i++){
        cards.push(this.deck.pop());
      }
      console.log('cards if 2');
      console.log(cards);
      return cards;
    } else {
      //gameOver
    }
  }

  shuffle () {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {


      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[randomIndex];
      this.deck[randomIndex] = temporaryValue;
    }
  }

  playSound () {

  }

  update (time, delta) {

  }
}