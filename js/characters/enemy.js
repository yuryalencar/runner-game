class Enemy {
    
    constructor(enemyName, level, enemyNumber){
        this.level = level;
        this.enemySpeed = 0;
        this.enemyName = enemyName;
        this.enemyNumber = enemyNumber;
        this.enemyDiv;
        this.configureSizeEnemyElement();
        this.width;
        this.height;
        this.x = this.enemyDiv.offsetLeft;
        this.y =  this.enemyDiv.offsetTop;
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
        this.width = 45;
        this.height = 60;
    
        enemyDiv.style.marginTop = height - 98 + "px";
        enemyDiv.style.marginLeft = 0 + "px";

        document.getElementById('game').appendChild(enemyDiv);

        this.enemyDiv = enemyDiv;

        this.enemySpeed = width;
    }

    destroyEnemy(){
        this.enemyDiv.remove();
    }

    getEnemyPosition(){
        return this.enemyDiv.style.left;
    }

    moveEnemy(speed){
        this.enemySpeed -= speed;
        
        this.enemyDiv.style.left = this.enemySpeed+"px";
    
        this.x = this.enemyDiv.offsetLeft;
        this.y =  this.enemyDiv.offsetTop;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

}