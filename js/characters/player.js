class Player {
    
    constructor(playerPath, keyUp){
        this.playerPath = playerPath;
        this.keyUp = keyUp;
    }

    getKeyUp(){
        return this.keyUp;
    }

    getPlayerPath(){
        return this.playerPath;
    }
}