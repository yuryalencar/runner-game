class Game{

    constructor() {
        this.scenario;
        this.playersNumber;
        this.playersList = [];
    }

    setup(level) {
        this.scenario = new Scenario(level);
    }

    run(){
        this.scenario.parallaxScrollingEfect(1,1.5);
    }

    configureNewPlayer(playerPath, keyUp) {
        var player = new Player(playerPath, keyUp);
        this.playersList.push(player);
    }

    loadEnemies() {

    }

    
}