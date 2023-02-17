import Phaser from '../lib/phaser.js'

 export default class Game extends Phaser.Scene {
 // Game will have all the methods and properties that Phaser.Scene has
 // It's called inheritance in Object Oriented Programming.

  constructor()
  {
    super('game') // unique key
  }

  preload() 
  {
    this.load.image('background', 'assets/bg_layer1.png')
    // key is 'background' and the path is 'assets/bg_layer1.png

  }
  create()  {
    this.add.image(240, 320, 'background')
  }
  }

  // part 2