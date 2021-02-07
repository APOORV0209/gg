class Box{
constructor(x,y,width,height){
    var options={
isStatic:true



    }
this.body=Bodies.rectangle(x,y,width,height,options)

this.width=width;
this.height=height;
World.add(world,this.body);

}
display(){

var b =this.body.position
push ()
rectMode(CENTER)
fill("blue")
translate(b.x,b.y)
rotate (this.body.angle)
rect(0,0,this.width,this.height)
pop ()


}




}