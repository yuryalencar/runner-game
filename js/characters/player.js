class Player {
    
    constructor(playerName, keyUp){
        this.playerName = playerName;
        this.keyUp = keyUp;
        this.configureSizePlayerElement();
        this.heightUp = 0;
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
    
        document.getElementById('player').style.marginTop = height - 166 + "px";
    }

    getPlayerLeftWidth(){
        return document.getElementById('player').style.width;
    }

    up(value){
        this.heightUp += value;
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        parseInt(height);
        console.log(this.heightUp);
        document.getElementById('player').style.marginTop = height - 166 - this.heightUp + "px";
    }

    down(value){
        this.heightUp -= value;
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        parseInt(height);
        document.getElementById('player').style.marginTop = height + this.heightUp - 166 + "px";
    }

    getKeyUp(){
        return this.keyUp;
    }

    getPlayerPath(){
        return this.playerName;
    }
}