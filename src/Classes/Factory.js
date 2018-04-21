import jsonCards from "../Data/cards.json";
import Card from "../Classes/Card";

export default class Factory {
  constructor (scene) {
    this.cardsData = jsonCards;
    this.scene = scene;
    this.cards = null;

    this.runFactory();
  }

  runFactory() {
    const { cardsData, scene } = this;
    const keys = Object.keys(cardsData);

    this.cards = keys.map(
      (value, index) => new Card({
        scene,
        x: 0,
        y: 0,
        sprite: cardsData[value].image
      }, {
        id: cardsData[value].id,
        title: cardsData[value].title,
        description: cardsData[value].description,
        type: cardsData[value].type,
        effect: cardsData[value].effect
      })
    );
  }
}