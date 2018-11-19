class Scenario {
    
    constructor(level){
        this.time = Date.now();
        this.level = level;
        this.backgroundSpeed = 0;
        this.backgroundParallaxSpeed = 0;
    
        this.configureSizeBackgroundElement('background', 'arts/scenario/background-back/level_'+this.level+'/background-back.png');
        this.configureSizeBackgroundElement('backgroundParallax', 'arts/scenario/background-front/level_'+this.level+'/background-front.png');
        this.configureSizeBackgroundParallaxElement('backgroundParallax');
    }

    configureSizeBackgroundElement(idElement, pathImage){
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

        document.getElementById(idElement).style.backgroundImage = "url("+pathImage+")";
        document.getElementById(idElement).style.width = width + "px";
        document.getElementById(idElement).style.height = height + "px";    
    }

    configureSizeBackgroundParallaxElement(idElement){
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        document.getElementById(idElement).style.marginTop = height - 63 + "px";
    }

    parallaxScrollingEfect(backgroundSpeed, backgroundParallaxSpeed){
        this.time = Date.now() - this.time;
        this.backgroundSpeed -= backgroundSpeed;
        this.backgroundParallaxSpeed -= backgroundParallaxSpeed;

        document.getElementById('background').style.backgroundPosition = this.backgroundSpeed + "px 0";
        document.getElementById('backgroundParallax').style.backgroundPosition = this.backgroundParallaxSpeed + "px 0";
    }

    getTime(){
        console.log(this.time);
        return this.time;
    }

}