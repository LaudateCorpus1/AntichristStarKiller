'use strict';

var config = {
  type: Phaser.AUTO,
  width: 320,
  height: 240,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image('nightsky', '../assets/nightsky/nightsky.png');
  this.load.image('ship_white', '../assets/ship/cross_white.png');
  this.load.image('ship_black', '../assets/ship/cross_black.png');
}

function create() {
  this.add.image('400', '250', 'nightsky');
  let ship = this.add.image('160', '215', 'ship_white');
  ship.setDisplaySize('18', '28');
}

function update() {
  // if (this.escKey.isDown)
  // {
  //   // nwjs related code to close the application
  //   nw.App.closeAllWindows();
  // }
}