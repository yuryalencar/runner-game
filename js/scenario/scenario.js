class Scenario {
    
    constructor(level){
        this.level = level;
        this.backgroundSpeed = 0;
        this.backgroundParallaxSpeed = 0;
    
        this.configureSizeBackgroundElement('background', 'arts/scenario/background/level_'+level+'/background.png');
        this.configureSizeBackgroundElement('backgroundParallax', 'arts/scenario/elements/level_'+level+'/backgroundParallax.png');
    }

    configureSizeBackgroundElement(idElement, pathImage){
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

        document.getElementById(idElement).style.backgroundImage = "url("+pathImage+")";
        document.getElementById(idElement).style.width = width + "px";
        document.getElementById(idElement).style.height = height + "px";    
    }

    parallaxScrollingEfect(backgroundSpeed, backgroundParallaxSpeed){
        this.backgroundSpeed -= backgroundSpeed;
        this.backgroundParallaxSpeed -= backgroundParallaxSpeed;

        document.getElementById('background').style.backgroundPosition = this.backgroundSpeed + "px 0";
        document.getElementById('backgroundParallax').style.backgroundPosition = this.backgroundParallaxSpeed + "px 0";
    }

}