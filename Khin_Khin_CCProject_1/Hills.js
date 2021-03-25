
// let r = 0.1;
// let g = 0.1;
// let b = 0.1; 

class Hills{

	constructor(){
	// 	this.colorR = (194,198);
	// 	this.colorG = (123,125);
	// 	this.colorB = (61,63);
	// 	this.velocity = random(0,1);
		// this.colorR = r;
		// this.colorG = g;
		// this.colorB = b; 
		// this.velocity = random(0,0.11);



	}//constructor

	// update(){
	// // 	this.colorR = this.colorR + this.velocity;
	// // 	this.colorG = this.colorG + this.velocity;
	// // 	this.colorB = this.colorB + this.velocity;
	// // 	if(this.colorR > 197, this.colorG > 124, this.colorB> 62){
	// // 		this.velocity *= -0.01;
	// // 	}
	// 	this.colorR = this.colorR + this.velocity;
	// 	if(this.colorR > 3 || this.colorR <0){
	// 		this.colorR *= -1;
	// 	}
	// 	this.colorG = this.colorG +this.velocity;
	// 	if(this.colorG > 3 || this.color < 0){
	// 		this.colorG *= -1;
	// 	}
	// 	this.colorB = this.colorB +this.velocity;
	// 	if(this.colorB >3 || this.color <0){
	// 		this.colorB *= -1;
	// 	}
	// }

	display(){
		//
		//stroke(166,107,56);

		strokeWeight(2);
		//dark hills
		stroke(180,110,57);
		fill(186,116,50); 
		//hills all the way in the back
		ellipse(100,340,400,70);
		ellipse(700,350,300,80);
		ellipse(450,350,400,100);
		//hills in front of the ones in the back
		ellipse(300,360,400,70);
		ellipse(450,360,300,70);
		ellipse(700,370,500,60);
		//lighter colored hills
		stroke(192,120,63);
		fill(198 ,127 ,61);
	    ellipse(260,390,300,60);
	    ellipse(400,390,300,50);
		ellipse(50,380,250,60);
		ellipse(25,390,100,30);
		ellipse(75,400,170,40);

		
		//lights hills
		fill(217,151,72);
		ellipse(50, 750, 1000, 400);
		ellipse()
	}


}
	