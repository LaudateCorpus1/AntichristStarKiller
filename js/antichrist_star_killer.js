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
  let ship = this.add.image('200', '300', 'ship_white');
  // ship.width = '35';
  // ship.height = '60';
  ship.setDisplaySize('70', '120');
}

function update() {
}