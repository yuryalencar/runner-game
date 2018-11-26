class Enemy {
    
    constructor(enemyName, level){
        this.level = level;
        this.enemySpeed = 0;
        this.enemyName = enemyName;
        this.configureSizeEnemyElement();
    }

    configureSizeEnemyElement(){
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

        document.getElementById('enemy').style.backgroundImage = "url(arts/characters/enemies/level_"+this.level+"/"+this.enemyName+".png)";

        document.getElementById('enemy').style.width = "45px";
        document.getElementById('enemy').style.height = "60px";    
    
        document.getElementById('enemy').style.marginTop = height - 98 + "px";
        document.getElementById('enemy').style.marginLeft = 0 + "px";
    
        this.enemySpeed = width;
    }

    moveEnemy(speed){
        this.enemySpeed -= speed;
        
        document.getElementById('enemy').style.left = this.enemySpeed+"px";
        
        //enemies = document.getElementsByClassName('enemies');

        //for (let index = 0; index < enemies.length; index++) {
        //    enemies[index].style.backgroundPosition = this.enemySpeed + "px 0";    
        //}
    }

}