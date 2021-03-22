

var cloud;

function setup() {
	createCanvas(1000,800);
	background(217,151,70);
	for(var i = 0; i < 4; i++){
		cloud[i] = new Clouds(50,50); 
	}
	cloud.display();
	
}

function draw(){
	fill(200);
    for(var i = 0; i< clouds.length; i++){
    	cloud.update();
		cloud.display();
		cloud.move();
    }
} 

// class Clouds(){
// 	constructor(x,y)
// 	this.x = random(0,width);
// 	this.y = random(0,height);
// 	this.velocity = random(0,100);
     

//   update(){
//   	this.x = this.x + this.velocity
//   	this.y = this.y + this.velocity
//   }

//   display(){
//   	fill(100,100);
//     ellipse(this.x,this.y,10,20);
//     ellipse(this.x+5,this.y,10,20);
//     fill(255,100);
//     ellipse(this.x+10,this.y+5,10,20);
//     ellipse(this.x+15,this.y+10,10,20);
//     ellipse(this.x+20,this.y+15,10,20);
//     ellipse(this.x+25,this.y+20,10,20);
//   }

//   move(){
//   	this.x = this.x + 5;
//     this.y = this.y - 3;
//     if(this.x >= width){
//     this.x = 0;
//   }

}


