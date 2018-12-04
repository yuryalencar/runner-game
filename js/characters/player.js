class Player {
    
    constructor(playerName, keyUp){
        this.life = 3;
        this.canJump = true;
        this.playerName = playerName;
        this.keyUp = keyUp;
        this.configureSizePlayerElement();
        this.width;
        this.height;
        this.x = document.getElementById('playerColisor').offsetLeft;
        this.y = document.getElementById('playerColisor').offsetTop;
    }

    setPlayerGif(playerName){
        this.playerName = playerName;
        document.getElementById('player').style.backgroundImage = "url(arts/characters/player/"+this.playerName+".gif)";
    }
    
    configureSizePlayerElement(){
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

        document.getElementById('player').style.backgroundImage = "url(arts/characters/player/"+this.playerName+".gif)";

        document.getElementById('player').style.width = "180px";
        document.getElementById('player').style.height = "105px";    
        
        document.getElementById('playerColisor').style.width = "40px";
        document.getElementById('playerColisor').style.height = "60px";

        document.getElementById('playerColisor').style.marginTop = height - 140 + "px";
        document.getElementById('playerColisor').style.marginLeft = 105 + "px";
        
        this.width = 40;
        this.height = 60;
        
        document.getElementById('player').style.marginTop = height - 166 + "px";
    }

    getPlayerLeftWidth(){
        return document.getElementById('player').style.width;
    }

    up(value){
        var height = this.numbersOnly(document.getElementById('player').style.marginTop);
        document.getElementById('player').style.marginTop = height - value + "px";

        height = this.numbersOnly(document.getElementById('playerColisor').style.marginTop)
        document.getElementById('playerColisor').style.marginTop = height - value + "px";

        this.x = document.getElementById('playerColisor').offsetLeft;
        this.y = document.getElementById('playerColisor').offsetTop;
    }

    down(value){
        var height = this.numbersOnly(document.getElementById('player').style.marginTop);
        document.getElementById('player').style.marginTop = height + value + "px";
        
        height = this.numbersOnly(document.getElementById('playerColisor').style.marginTop)
        document.getElementById('playerColisor').style.marginTop = height + value + "px";

        this.x = document.getElementById('playerColisor').offsetLeft;
        this.y = document.getElementById('playerColisor').offsetTop;
    }

    numbersOnly(string){
        var numsStr = string.replace(/[^0-9]/g,'');
        return parseInt(numsStr);
    }

    getKeyUp(){
        return this.keyUp;
    }

    getPlayerPath(){
        return this.playerName;
    }

    getCanJump(){
        return this.canJump;
    }

    setCanJump(bool){
        this.canJump = bool;
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

    setPlayerGifUp(){
        this.setPlayerGif('gatoPulando'+this.life);
    }

    setPlayerGifBootom(){
        this.setPlayerGif('gato'+this.life);
    }

    decrementLife(){
        this.life -= 1;
    }

    getLife(){
        return this.life;
    }
}