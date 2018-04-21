import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(
      config.scale,
      config.x,
      config.y,
      config.sprite
    );

    this.deck = [];
  }

  getCards(length) {
    let hand = [];

    if (length < this.deck.length){
      for (let i = 0; i< length; i++){
        hand = this.deck.pop();
      }

      return hand;
    } else if (this.deck.length > 0) {
      for (let i = 0; i < this.deck.length; i++){
        hand = this.deck.pop();
      }
    } else {
      //gameOver
    }
  }

  shuffle(){
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

  playSound() {

  }

  update (time, delta) {

  }
}