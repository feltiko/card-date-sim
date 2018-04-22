import Phaser from 'phaser';

import BootScene from './Scenes/Boot';
import GameScene from './Scenes/Game';
import DeckScene from './Scenes/DeckScene';
import GameEnd from './Scenes/GameEnd';

import initConfig from './Config';

class Game extends Phaser.Game {
  constructor () {
    super (
      initConfig([
        new BootScene(),
        new GameScene(),
        new DeckScene(),
        new GameEnd(),
      ])
    );
  }
}

const game = new Game();
