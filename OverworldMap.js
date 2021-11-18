class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(context, cameraPerson) {
    context.drawImage(
      this.lowerImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y,
    )
  }

  drawUpperImage(context, cameraPerson) {
    context.drawImage(
      this.upperImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y,
    )
  }
  isSpaceTaken(currentX, currentY, direction) {
    const { x, y } = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x},${y}`] || false;
  }
  mountObjects() {
    Object.values(this.gameObjects).forEach(o => {
      o.mount(this);
    })
  }


  addWall(x, y) {
    this.walls[`${x},${y}`] = true;
  }
  removeWall(x, y) {
    delete this.walls[`${x},${y}`];
  }
  moveWall(wasX, wasY, direction) {
    this.removeWall(wasX, wasY);
    const { x, y } = utils.nextPosition(wasX, wasY, direction);
    this.addWall(x, y);
  }
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "/images/maps/DemoLower.png",
    upperSrc: "/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      npc1: new Person({
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        src: "/images/characters/people/npc1.png"
      })
    },
    walls: {
      // "16,16": true,
      [utils.asGridCoord(7, 6)]: true,
      [utils.asGridCoord(8, 6)]: true,
      [utils.asGridCoord(7, 7)]: true,
      [utils.asGridCoord(8, 7)]: true,
    }
  },
  Kitchen: {
    lowerSrc: "/images/maps/KitchenLower.png",
    upperSrc: "/images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      npcA: new Person({
        isPlayerControlled: false,
        x: utils.withGrid(4),
        y: utils.withGrid(4),
        src: "/images/characters/people/npc2.png"
      }),
      npcB: new Person({
        isPlayerControlled: false,
        x: utils.withGrid(9),
        y: utils.withGrid(8),
        src: "/images/characters/people/npc3.png"
      })
    }
  },
  DiningRoom: {
    lowerSrc: "/images/maps/DiningRoomLower.png",
    upperSrc: "/images/maps/DiningRoomUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      npcA: new Person({
        isPlayerControlled: false,
        x: utils.withGrid(4),
        y: utils.withGrid(4),
        src: "/images/characters/people/npc2.png"
      }),
      npcB: new Person({
        isPlayerControlled: false,
        x: utils.withGrid(9),
        y: utils.withGrid(8),
        src: "/images/characters/people/npc3.png"
      })
    }
  },
  Street: {
    lowerSrc: "/images/maps/StreetLower.png",
    upperSrc: "/images/maps/StreetUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(18),
        y: utils.withGrid(8),
      }),
      npcA: new Person({
        isPlayerControlled: false,
        x: utils.withGrid(14),
        y: utils.withGrid(10),
        src: "/images/characters/people/npc2.png"
      }),
      npcB: new Person({
        isPlayerControlled: false,
        x: utils.withGrid(9),
        y: utils.withGrid(11),
        src: "/images/characters/people/npc3.png"
      })
    }
  },
}