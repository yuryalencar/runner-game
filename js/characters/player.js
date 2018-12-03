class Player {
    
    constructor(playerName, keyUp){
        this.playerName = playerName;
        this.keyUp = keyUp;
        this.configureSizePlayerElement();
        this.heightUp = 0;
        this.width;
        this.height;
        this.x = document.getElementById('player').offsetLeft;
        this.y = document.getElementById('player').offsetTop;
    }

    setPlayerGif(playerName){
        this.playerName = playerName;
        document.getElementById('player').style.backgroundImage = "url(arts/characters/player/"+this.playerName+".gif)";
    }
    
    configureSizePlayerElement(){
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

        document.getElementById('player').style.backgroundImage = "url(arts/characters/player/"+this.playerName+".gif)";

        document.getElementById('player').style.width = "180px";
        this.width = 130;
        document.getElementById('player').style.height = "105px";    
        this.height = 100;
        
        document.getElementById('player').style.marginTop = height - 166 + "px";
    }

    getPlayerLeftWidth(){
        return document.getElementById('player').style.width;
    }

    up(value){
        this.heightUp += value;
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        parseInt(height);
        document.getElementById('player').style.marginTop = height - 166 - this.heightUp + "px";
        this.x = document.getElementById('player').offsetLeft;
        this.y = document.getElementById('player').offsetTop;
    }

    down(value){
        this.heightUp -= value;
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        parseInt(height);
        document.getElementById('player').style.marginTop = height + this.heightUp - 166 + "px";
        this.x = document.getElementById('player').offsetLeft;
        this.y = document.getElementById('player').offsetTop;
    }

    getKeyUp(){
        return this.keyUp;
    }

    getPlayerPath(){
        return this.playerName;
    }

    detectColision(enemy){
        
        if((this.x < enemy.getX() + enemy.getWidth())
                && enemy.getX() < this.x + this.width
                && this.y < enemy.getY() + enemy.getHeight()
                && enemy.getY() < this.y + this.height){
            return true;
        }
        return false;
    }

    printConsole(enemy){
        console.log(this.x);
        console.log(this.y);
        console.log(this.width);
        console.log(this.height);
        
        console.log("-------------");
        console.log(enemy.getX());
        console.log(enemy.getY());
        console.log(enemy.getWidth());
        console.log(enemy.getHeight());
        
    }
}