class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.context = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      //Clear off the canvas
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //Draw Lower layer
      this.map.drawLowerImage(this.context);

      //Draw Game Objects
      Object.values(this.map.gameObjects).forEach(object => {
        object.update({
          arrow: this.directionInput.direction
        })
        object.sprite.draw(this.context);
      })

      //Draw Upper layer
      this.map.drawUpperImage(this.context);

      requestAnimationFrame(() => {
        step();
      })
    }
    step();
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.DemoRoom);

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.startGameLoop();
  }
}