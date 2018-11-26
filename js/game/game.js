class Game{

    constructor() {
        this.score = 0;
        this.timeCreateEnemy = 0;
        this.timeOld = new Date().getSeconds();
        this.percentageCreateEnemy;
        this.scenario;
        this.playersNumber;
        this.playersList = [];
        this.enemiesList = [];
    }

    setup(level) {
        this.scenario = new Scenario(level);
        this.setPercentageCreateEnemy(0.5);
    }

    setPercentageCreateEnemy(percentageCreateEnemy){
        this.percentageCreateEnemy = percentageCreateEnemy / 100;
    }

    run(){
        this.scenario.parallaxScrollingEfect(1,1.5);
        for (let index = 0; index < this.enemiesList.length; index++) {
            this.enemiesList[index].moveEnemy(1.5);
        }
        document.getElementById('background').innerHTML = "<p>Score: "+ this.updateScore()+"</p>";
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

    generateEnemy() {
        if(Math.random() < this.percentageCreateEnemy && this.enemiesList < 1){
            var enemy;
            var enemiesNames = [
                'candy',
                'donut'
            ];
            var indexEnemy = Math.floor(Math.random() * enemiesNames.length);
    
            enemy = new Enemy(enemiesNames[indexEnemy], this.scenario.getLevel());
    
            this.enemiesList.push(enemy);
        }
    }
    
}