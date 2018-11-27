class Enemy {
    
    constructor(enemyName, level, enemyNumber){
        this.level = level;
        this.enemySpeed = 0;
        this.enemyName = enemyName;
        this.enemyNumber = enemyNumber;
        this.enemyDiv;
        this.configureSizeEnemyElement();
    }

    configureSizeEnemyElement(){
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

        var enemyDiv = document.createElement('div');
        enemyDiv.setAttribute('id', this.enemyNumber);
        enemyDiv.setAttribute('class', 'enemies');
        
        enemyDiv.style.backgroundImage = "url(arts/characters/enemies/level_"+this.level+"/"+this.enemyName+".png)";
        enemyDiv.style.width = "45px";
        enemyDiv.style.height = "60px";    
    
        enemyDiv.style.marginTop = height - 98 + "px";
        enemyDiv.style.marginLeft = 0 + "px";

        document.getElementById('game').appendChild(enemyDiv);

        this.enemyDiv = enemyDiv;

        this.enemySpeed = width;
    }

    getEnemyPosition(){
        return 0;
    }

    moveEnemy(speed){
        this.enemySpeed -= speed;
        
        this.enemyDiv.style.left = this.enemySpeed+"px";
    }

}