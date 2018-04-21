import Phaser from 'phaser';

import BootScene from './Scenes/Boot';
import GameScene from './Scenes/Game';

import initConfig from './Config';

class Game extends Phaser.Game {
  constructor () {
    super (
      initConfig([
        new BootScene(),
        new GameScene(),
      ])
    );
  }
}

const game = new Game();
