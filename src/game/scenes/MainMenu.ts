import {Scene, GameObjects} from 'phaser';

export class MainMenu extends Scene {
  background: GameObjects.Image;
  title: GameObjects.Text;
  
  constructor() {
    super('MainMenu');
  }
  
  create() {
    this.background = this.add.image(400, 300, 'sky');
  
    this.title = this.add.text(400, 300, 'Start Game', {
      fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
      stroke: '#000000', strokeThickness: 8,
      align: 'center'
    }).setOrigin(0.5);
    
    this.input.once('pointerdown', () => {
      
      this.scene.start('Game');
      
    });
  }
}
