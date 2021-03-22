
class Clouds(){
	constructor(x,y)
	this.x = random(0,width);
	this.y = random(0,height);
	this.velocity = random(0,100);
	//this.cloudSize = 2;

     
}

  update(){
  	this.x = this.x + this.velocity
  	this.y = this.y + this.velocity
  	//this.cloudSize = this.cloudSize+1;

  }

  display(){
  	stroke(255);
    strokeWeight(1);
    fill(255);
    ellipse(this.x, this.y, 24, 24);
    ellipse(this.x,this.y,24,24);
    ellipse(this.x,this.y,24,24);
    ellipse(this.x,this.y,24,24);
    ellipse(this.x,this.y,24,24);
    ellipse(this.x,this.y,24,24);
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

