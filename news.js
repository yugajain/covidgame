class News {
    constructor(){
      //  this.reportingImg = createSprite(400, 250, 0, 0)
        this.reportingBg = createSprite(-400, -250,666,666)
        this.rep = loadImage("news.jpg")
        this.reporter = createSprite(-100, -130, 0, 0);

        
        
    }

    display(){
        stroke("black")
        fill("white")
        textFont("Comic Sans Ms")
        textSize(24)
        text("Game Rules and functions: ", 200,50)
        text("Press Space Key to jump.", 150,100)
        text("To win Collect 2 vaccines", 236, 200)
        text("Collect sanitizers to remove the virus currently onscreen", 100, 300)
        text("Collect Masks to save the other people and score at the other side too",0,370)
        text("Press Enter TO START", 500,100)

    //   this.reportingImg
     this.reportingBg.addImage(this.rep)
       this.reporter.x = 100;
       this.reporter.y = 130;
       this.reportingBg.x = 400
       this.reportingBg.y = 250
        this.reporter.addImage(reporterImg)
        this.reporter.scale = 0.7

    }
    remove(){
        this.reporter.destroy();
        this.reportingBg.destroy()
    }
}
