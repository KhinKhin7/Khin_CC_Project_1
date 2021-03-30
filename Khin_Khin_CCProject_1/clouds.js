
class Clouds{

	constructor(){
	this.x = (10,width); 
	this.y = random(20,(height/10)); 
	this.velocity = random(0,0.001); 
}//constructor
  update(){
  	this.x = this.x + this.velocity; 
  	this.y = this.y + this.velocity;
  }//update
  
  display(){
      stroke(220);
      fill(220);
      //small lump of cloud 
      ellipse(this.x,this.y,60,30);
      ellipse(this.x+10, this.y+10, 40,25);
      ellipse(this.x-10,this.y-15,40,25);
      ellipse(this.x-15,this.y+10,50,20);
      //between small cloud 
      ellipse(this.x+100,this.y+100,30,10);
      ellipse(this.x+100,this.y+80,40,10);
      ellipse(this.x+90,this.y+85,40,10);
      ellipse(this.x+80,this.y+95,40,20);
      //flatter cloud
      ellipse(this.x+300,this.y+30,70,30);
      ellipse(this.x+300,this.y+20,40,20);
      ellipse(this.x+330,this.y+25,50,20);
      ellipse(this.x+270,this.y+35,50,20);
      //another flat cloud 
      ellipse(this.x+600,this.y+100,90,30);
      ellipse(this.x+600,this.y+80,60,20);
      ellipse(this.x+630,this.y+85,60,20);
      ellipse(this.x+570,this.y+95,60,30);
      //small cloud on right
      ellipse(this.x+6500,this.y+50,30,10);
      ellipse(this.x+670,this.y+30,40,10);
      ellipse(this.x+700,this.y+35,40,10);
      ellipse(this.x+700,this.y+45,40,20);
      //left most clouds
      ellipse(this.x-200,this.y+130,70,30);
      ellipse(this.x-200,this.y+120,40,20);
      ellipse(this.x-230,this.y+125,50,20);
      ellipse(this.x-170,this.y+135,50,20);
      
      ellipse(this.x-300,this.y+100,90,30);
      ellipse(this.x-300,this.y+90,60,20);
      ellipse(this.x-330,this.y+95,60,20);
      ellipse(this.x-270,this.y+105,60,20);
  }//display

  move(){
  	this.x = this.x +.2;
    this.y = this.y +0.01;

    if(this.x >= width){
    this.x = 0;
  }//if
    else if(this.y >= height/10){
      this.y = 0;
    }//else if 
  }//move
}//class

