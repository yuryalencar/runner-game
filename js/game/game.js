class Game{

    constructor() {
        this.score = 0;
        this.timeOld = new Date().getSeconds();
        this.percentageCreateEnemy;
        this.scenario;
        this.playersNumber;
        this.playersList = [];
        this.enemiesList = [];
        this.life = 3;
    }

    setup(level) {
        this.scenario = new Scenario(level);
        var cat = new Player('gato', 32);
        this.playersList.push(cat);
        this.setPercentageCreateEnemy(0.5);
    }

    incrementPercentageCreateEnemy(){
        this.percentageCreateEnemy += 0.00002;
    }

    setPercentageCreateEnemy(percentageCreateEnemy){
        this.percentageCreateEnemy = percentageCreateEnemy / 100;
    }

    run(){
        this.scenario.parallaxScrollingEfect(1,1.5);
        for (let index = 0; index < this.enemiesList.length; index++) {
            this.enemiesList[index].moveEnemy(1.5);
            if(this.playersList[0].detectColision(this.enemiesList[index])){
                //console.log(this.playersList[0].printConsole(this.enemiesList[index]));
                document.getElementById('colisionSong').play();
                this.enemiesList[index].destroyEnemy();
                this.life -= 1;
                if(this.life === 0){
                    document.getElementById('playerDie').play();
                   // alert('You Lose !');
                   // window.location.href = 'index.html';
                }
            }
            if(this.enemiesList[index].getEnemyPosition() < '0px'){
                this.enemiesList[index].destroyEnemy();
            }
        }
        document.getElementById('background').innerHTML = "<p>Score: "+ this.updateScore()+"<br/>Life: "+ this.life+"</p>";
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

    getEnemies(){
        return this.enemiesList;
    }

    getPlayers(){
        return this.playersList;
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
    
            this.canCreateEnemy = false;

            this.enemiesList.push(enemy);
            return true;
        }
        return false;
    }
    
}