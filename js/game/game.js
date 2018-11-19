class Game{

    constructor() {
        this.scenario;
        this.playersNumber;
        this.playersList = [];

        this.setup(1);
        this.run();
    }

    setup(level) {
        this.scenario = new Scenario(level);
    }

    gameRunning(){
        this.scenario.parallaxScrollingEfect(1,1.5);    
    }

    run(){
        requestAnimationFrame(this.gameRunning);
    }

    configureNewPlayer(playerPath, keyUp) {
        var player = new Player(playerPath, keyUp);
        this.playersList.push(player);
    }

    loadEnemies() {

    }

    
}