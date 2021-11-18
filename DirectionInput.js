class DirectionInput {
    constructor() {
        this.heldDirections = [];

        this.map = {
            "ArrowUp": "up",
            "KeyW": "up",
            "ArrowDown": "down",
            "KeyS": "down",
            "ArrowLeft": "left",
            "KeyA": "left",
            "ArrowRight": "right",
            "KeyD": "right",
        }
    }

    get direction() {
        return this.heldDirections[0];
    }

    init() {
        document.addEventListener("keydown", event => {
            const direction = this.map[event.code];
            if (direction && this.heldDirections.indexOf(direction) === -1) {
                this.heldDirections.unshift(direction);

            }
        });
        document.addEventListener("keyup", event => {
            const direction = this.map[event.code];
            const index = this.heldDirections.indexOf(direction);
            if (index > -1) {
                this.heldDirections.splice(index, 1);

            }
        })

    }

}