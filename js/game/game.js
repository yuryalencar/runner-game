class Game{

    constructor() {
        this.score = 0;
        this.timeOld = new Date().getSeconds();
        this.percentageCreateEnemy;
        this.scenario;
        this.playersNumber;
        this.playersList = [];
        this.enemiesList = [];
    }

    setup(level) {
        this.scenario = new Scenario(level);
        var cat = new Player('cat', 32);
        this.playersList.push(cat);
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

    verifyCreateEnemy(){
        return this.score % 5 == 0;
    }

    generateEnemy() {
        if(Math.random() < this.percentageCreateEnemy){
            var enemy;
            var enemiesNames = [
                'candy',
                'donut'
            ];
            var indexEnemy = Math.floor(Math.random() * enemiesNames.length);
    
            enemy = new Enemy(enemiesNames[indexEnemy], this.scenario.getLevel(), this.enemiesList.length + 1);
    
            console.log('enemy generated');
            this.canCreateEnemy = false;

            this.enemiesList.push(enemy);
        }
    }
    
}