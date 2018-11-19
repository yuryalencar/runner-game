class Scenario {
    
    constructor(level){
        this.level = level;
        this.backgroundBackSpeed = 0;
        this.backgroundFrontSpeed = 0;
    
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

    parallaxScrollingEfect(backgroundBackSpeed, backgroundFrontSpeed){
        this.backgroundBackSpeed -= backgroundBackSpeed;
        this.backgroundFrontSpeed -= backgroundFrontSpeed;

        document.getElementById('background').style.backgroundPosition = this.backgroundBackSpeed + "px 0";
        document.getElementById('backgroundParallax').style.backgroundPosition = this.backgroundFrontSpeed + "px 0";
    }

}