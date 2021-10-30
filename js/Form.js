class Form {
  constructor() {
    this.input = createInput("").attribute("placeHolder","Enter Your Name !")
    this.playButton  = createButton("PLAY")
    this.tittleImage  = createImg("assets/title.png")
    this.greeting = createElement("h3")
  }
  setElementPosition(){
    this.tittleImage.position(120,10)
    this.input.position(width/2-110,height/2-80)
    this.playButton.position(width/2-90,height/2-20)
    this.greeting.position(width/2-300,height/2-100)
    
  }
  display(){
    this.setElementPosition()
    this.handleMousePressed()
  }
  hide(){
    this.input.hide()
    this.greeting.hide()
    this.playButton.hide()
  }

  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      var message = `Hello! ${this.input.value()}</br> Wait For Another Player To Join!😀😀`
      this.greeting.html(message)
    })
  }
}
