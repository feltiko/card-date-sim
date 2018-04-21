import jsonCards from "../Data/cards.json";
import Card from "../Classes/Card";

export default class Factory {
  constructor (scene) {
    this.cards  =  jsonCards;
    this.scene = scene;
  }

  runFactory() {
    let cards = [];
    for (let key in this.cards) {
      let item = this.cards[key];
      console.log(item.effect);
      let card = new Card({
        scene: this.scene,
        x: 0,
        y: 0,
        sprite: item.image
      }, {
        id: item.id,
        title: item.title,
        description: item.description,
        type: item.type,
        effect: item.effect
      });
      cards.push(card);
    }
    return cards;
  }
}