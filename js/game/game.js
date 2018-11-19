class Game{

    constructor() {
        this.score = 0;
        this.timeOld = new Date().getSeconds();
        this.scenario;
        this.playersNumber;
        this.playersList = [];
    }

    setup(level) {
        this.scenario = new Scenario(level);
    }

    run(){
        this.scenario.parallaxScrollingEfect(1,1.5);
        document.getElementById('background').innerHTML = "&nbsp Score: "+ this.updateScore();
    }

    updateScore(){
        if(this.timeOld < new Date().getSeconds()){
            this.timeOld = new Date().getSeconds();
            this.score += 1;
        }
        return this.score;
    }

    configureNewPlayer(playerPath, keyUp) {
        var player = new Player(playerPath, keyUp);
        this.playersList.push(player);
    }

    enemiesGenerator() {

    }

    
}