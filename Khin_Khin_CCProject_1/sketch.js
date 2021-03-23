
let cloud;

function setup() {
	createCanvas(1000,800);
	//background(0);
	// for(var i = 0; i < 4; i++){
	// 	cloud[i] = new Clouds(50,50); 
	// }
	cloud = new Clouds();
	//cloud.display();
	
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
	}
	
	
    
} 






