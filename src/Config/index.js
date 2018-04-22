import Phaser from 'phaser';

export default (scene) => ({
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: 'gameContainer',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene
});