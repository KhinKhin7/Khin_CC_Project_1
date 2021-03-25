
let cloud;
let hill;
//let oasis;

function setup() {
	createCanvas(1000,800);
	smooth();
	cloud = new Clouds();
	hill = new Hills();
	//oasis = new Oasis();
	
}

function draw(){
	if(keyIsPressed == true) {
		background(44,61,92,100);
    	cloud.update();
		cloud.move(); 
		cloud.display();

	}
	else{
		background(136,165,191);
    	cloud.update();
		cloud.move();
		cloud.display();
		//hill.update();
		hill.display();
		//oasis.display();

	}
	
	
    
} 






