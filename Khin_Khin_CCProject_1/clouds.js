
class Clouds(){
	constructor(x,y)
	this.x = random(0,width); //random clouds across sketch window
	this.y = random(0,height/4); //random clouds on the top quarter of sketch window 
	this.velocity = random(0,100); //how fast clouds appear
	//this.cloudSize = 2;
}

  update(){
  	this.x = this.x + this.velocity //
  	this.y = this.y + this.velocity
  	//this.cloudSize = this.cloudSize+1;
  }

  display(){
    fill(100,100);
    ellipse(this.x,this.y,10,20);
    ellipse(this.x+5,this.y,10,20);
    fill(255,100);
    ellipse(this.x+10,this.y+5,10,20);
    ellipse(this.x+15,this.y+10,10,20);
    ellipse(this.x+20,this.y+15,10,20);
    ellipse(this.x+25,this.y+20,10,20);
  }

  move(){
  	this.x = this.x + 5;
    this.y = this.y - 3;

    if(this.x >= width){
    this.x = 0;
  }

  function createClouds(){
  	var Clouds_x = random(0,1000);
  	var Clouds_y = random(0,200);
  	var clouds_sky = new Clouds(Clouds_x, Clouds_y);
  	clouds.push(clouds_sky);
  }

