import Phaser from 'phaser';

import jsonCards from "../Data/cards.json";
import jsonWoman from "../Data/woman.json";
import Card from "../Classes/Card";
import Woman from "../Classes/Woman";

export default class Factory extends Phaser.GameObjects.GameObject {
  constructor (scene, type) {
    super(scene, type)

    this.cardsData = jsonCards;
    this.womanData = jsonWoman;

    this.scene = scene;
    this.cards = null;
    this.woman = null;
  }

  runFactory() {
    const { cardsData, womanData, scene } = this;
    const cardKeys = Object.keys(cardsData);
    const womanKeys = Object.keys(womanData);

    this.cards = cardKeys.map(
      (value, index) => {
       return new Card({
        scene,
        x: null,
        y: null,
        sprite: cardsData[value].image
      }, {
        id: cardsData[value].id,
        title: cardsData[value].title,
        description: cardsData[value].description,
        type: cardsData[value].type,
        effect: cardsData[value].effect
      })
    });

    this.woman = womanKeys.map(
      (value, index) => new Woman({
        scene,
        x: 0,
        y: 0,
        sprite: womanData[value].image
        }, {
        id: womanData[value].id,
        type: womanData[value].type
      })
    );
  }
}