class box{

constructor(x,y,width,height){

var options = {
    restitution :2
}



this.box = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
World.add(world,this.box)

}



display(){



    var pos = this.box.position
    rect(this.box.position.x,this.box.position.y,this.width,this.height)










}


}