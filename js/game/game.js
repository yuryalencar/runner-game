class Game{

    constructor() {
        this.score = 0;
        this.count = 0;
        this.percentageCreateEnemy;
        this.scenario;
        this.playersNumber;
        this.playersList = [];
        this.enemiesList = [];
        this.valueSetPercentage = 0.00001;
        this.backgroundSpeed = 1;
        this.backgroundParallaxSpeed = 1.5;
    }

    setup(level) {
        this.scenario = new Scenario(level);
        var cat = new Player('gato3', 32);
        this.playersList.push(cat);
        this.setPercentageCreateEnemy(0.5);
    }

    incrementPercentageCreateEnemy(){
        this.percentageCreateEnemy += this.valueSetPercentage;
    }

    setPercentageCreateEnemy(percentageCreateEnemy){
        this.percentageCreateEnemy = percentageCreateEnemy / 100;
    }

    run(){
        this.scenario.parallaxScrollingEfect(this.backgroundSpeed, this.backgroundParallaxSpeed);
        this.count += 1;
        for (let index = 0; index < this.enemiesList.length; index++) {
            this.enemiesList[index].moveEnemy(this.backgroundParallaxSpeed);
            if(this.playersList[0].detectColision(this.enemiesList[index])){
                document.getElementById('colisionSong').play();
                this.enemiesList[index].destroyEnemy();
                this.playersList[0].decrementLife();;
                this.playersList[0].setPlayerGifBootom();
                if(this.playersList[0].getLife() === 0){
                    document.getElementById('playerDie').play();
                    window.location.href = 'gameover.html';
                }
            }
            if(this.enemiesList[index].getEnemyPosition() < '0px'){
                this.enemiesList[index].destroyEnemy();
            }
        }
        document.getElementById('background').innerHTML = "<p>Score: "+ this.updateScore()+"<br/>Life: "+ this.playersList[0].getLife()+"</p>";
    }

    setDificult(){
        
        if(this.score % 10 == 0){
            this.backgroundParallaxSpeed += 0.1;
            console.log(this.backgroundParallaxSpeed);
        }

    }

    updateScore(){

        if(this.count > 100){
            this.count = 0;
            this.score += 1;
            this.setDificult();
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