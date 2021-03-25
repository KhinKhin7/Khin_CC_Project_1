
let cloud;
let hill;
let oasis;

function setup() {
	createCanvas(1000,800);
	smooth();
	cloud = new Clouds();
	hill = new Hills();
	oasis = new Oasis();
}

function draw(){
	//night time
	if(keyIsPressed == true) {
		background(44,61,92,100);
    	cloud.update();
		cloud.move(); 
		cloud.display();
		fill(64,38,10);
		rect(0,400, 1000,300);
		oasis.display();
		hill.display();
		//moon
		noStroke();
		fill(198,202,204);
		ellipse(500,150,160,160);
		strokeWeight(2);
		fill(250,5);
		ellipse(500,150,200,200);
	}
	//day time
	else{
		background(136,165,191);
		ellipse(500,350,200,200);
    	cloud.update();
		cloud.move();
		cloud.display();
		//hill.display();
		//sun
		noStroke();
		fill(242,203,118,50);
		ellipse(500,350,220,220);
		fill(192,127,55);
		rect(0,400, 1000,300);
		oasis.display();
		hill.display();
	}
	
	
    
} 






