class Player {
    
    constructor(playerName, keyUp){
        this.playerName = playerName;
        this.keyUp = keyUp;
        this.configureSizePlayerElement();
    }

    setPlayerGif(playerName){
        document.getElementById('player').style.backgroundImage = "url(arts/characters/player/"+this.playerName+".gif)";
    }
    
    configureSizePlayerElement(){
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

        document.getElementById('player').style.backgroundImage = "url(arts/characters/player/"+this.playerName+".gif)";

        document.getElementById('player').style.width = "180px";
        document.getElementById('player').style.height = "105px";    
    
        document.getElementById('player').style.marginTop = height - 166 + "px";
    }


    getKeyUp(){
        return this.keyUp;
    }

    getPlayerPath(){
        return this.playerName;
    }
}