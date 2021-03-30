
let cloud;
let hill;
let oasis;
let val = 0;
let degrees;

function setup() {
	createCanvas(1000,800);
	smooth();
	cloud = new Clouds();
	hill = new Hills();
	oasis = new Oasis();
}

function draw(){
	background(230,147,46);
	fill(val);
	keyTyped('1');
	keyTyped('2');
	keyTyped('3');
	keyTyped('4');
	keyTyped('5');
	keyTyped('6');
	keyTyped('7');
	keyTyped('8');
	//recursive trees
	if(key === '4'){
	  stroke(118,158,31);
	  strokeWeight(3);
	  let d = (mouseX / width) * 180;
	  degrees = radians(d);
	  line(20,420,20,250);
	  translate(20,250);
	  branch(150);
	  stroke(86,115,23);
	  strokeWeight(4);
	  line(20,180,20,50);
	  translate(20,50);
	  branch(150);
	  strokeWeight(3);
	  line(-25,100,-30,130);
	  translate(-25,130);
	  branch(10);
	  strokeWeight(5);
	  line(700,0,700,-130);
	  translate(700,-130);
	  branch(100);
	  stroke(118,158,31);
	  line(240,150,240,-130);
	  translate(240,-130);
	  branch(100);
	}
} 

//climbing up the hills and revealing the oasis
function keyTyped(){
	//background(230,147,46);
	if (key === '1'){
		strokeWeight(2);
		//dark hills
		stroke(145,89,47);
		fill(189,114,34);
		ellipse(700,100,1000,300);
		ellipse(100,0,500,300);
		ellipse(900,100,400,200);
		ellipse(500,300,1000,500);
		ellipse(140,250,2000,300);
		stroke(163,99,29);
		fill(210,132,39);
		ellipse(700,360,1400,500);
		ellipse(400,460,1500,300);
		ellipse(900,420,800,300);
		ellipse(600,580,1200,400);
		//closer, brighter hills
		stroke(180,110,57);
		fill(214,139,41);
		ellipse(850,680,800,200);
		ellipse(50, 750, 1000, 400);
		fill(220,142,50);
		ellipse(700,900, 1000,500);
	} //if 
	else if(key === '2'){
		background(136,165,191);
		// ellipse(500,350,200,200);
		cloud.update();
		cloud.move();
		cloud.display();
		stroke(145,89,47);
		fill(189,114,34);
		ellipse(500,300,1000,500);
		ellipse(140,250,2000,300);
		stroke(163,99,29);
		fill(210,132,39);
		ellipse(700,360,1400,500);
		ellipse(400,460,1500,300);
		ellipse(900,420,800,300);
		ellipse(600,580,1200,400);
		stroke(180,110,57);
		fill(214,139,41);
		ellipse(850,680,800,200);
		ellipse(50, 750, 1000, 400);
		fill(220,142,50);
		ellipse(700,900, 1000,500);	
	}//else if
	else if(key === '3'){
		background(136,165,191);
		ellipse(500,350,200,200);
		ellipse(500,350,220,220);
		cloud.update();
		cloud.move();
		cloud.display();
		stroke(163,99,29);
		fill(210,132,39);	
		ellipse(400,460,1500,300);
		ellipse(600,580,1200,400);
		stroke(180,110,57);
		fill(214,139,41);
		ellipse(850,680,800,200);
		ellipse(50, 750, 1000, 400);
		fill(220,142,50);
		ellipse(700,900, 1000,500);
	} //else if 
	else if(key === '4'){
	    background(136,165,191);
		ellipse(500,350,200,200); //sun
		cloud.update();
		cloud.move();
		cloud.display();
		hill.display();
		noStroke();
		fill(242,203,118,50);
		ellipse(500,350,220,220); //sun outline
		fill(192,127,55);
		rect(0,400, 1000,300);
		oasis.display();
		hill.display();
	}//else if
	else if(key === '5'){
		background(136,165,191);
		cloud.update();
		cloud.move();
		cloud.display();
		push();
		translate(0,-200);
		//sun
		noStroke();
		fill(242,203,118,50);
		ellipse(500,350,220,220);
		oasis.display(scale(1.5));
		noStroke();
		ellipse(random(0,200),random(0,500),5,5);
		ellipse(random(100,200),random(450,500),10,10);
		ellipse(random(140,300),random(450,500),5,5);
		ellipse(random(190,430),random(0,500),10,10);
		ellipse(random(230,500),random(450,550),5,5);
		ellipse(random(270,550),random(450,570),10,10);
		ellipse(random(300,600),random(0,520),5,5);
		ellipse(random(400,800),random(450,520),7,7);
		ellipse(random(500,1000),random(450,520),5,5);
		ellipse(random(700,1000),random(450,520),8,8);
		ellipse(random(800,1000),random(450,520),5,5);
		ellipse(random(0,200),random(0,500),5,5);
		pop();
	}
	else if(key === '6'){
		background(136,165,191);
		push();
		translate(0,-300);
		//sun
		noStroke();
		fill(242,203,118,50);
		ellipse(500,350,220,220);
		oasis.display(scale(2));
		noStroke();
		ellipse(random(100,200),random(450,500),20,20);
		ellipse(random(140,300),random(450,500),15,15);
		ellipse(random(190,430),random(0,500),10,10);
		ellipse(random(230,500),random(450,550),15,15);
		ellipse(random(270,550),random(450,570),10,10);
		ellipse(random(300,600),random(0,520),5,5);
		ellipse(random(400,800),random(450,520),17,17);
		ellipse(random(500,1000),random(450,520),15,15);
		ellipse(random(700,1000),random(450,520),8,8);
		ellipse(random(800,1000),random(450,520),15,15);
		pop();
	}
	else if(key === '7'){
		background(136,165,191);
		push();
		translate(-500,-1800);
		//sun
		oasis.display(scale(5));
		noStroke();
		ellipse(random(100,200),random(450,500),20,20);
		ellipse(random(140,300),random(450,500),15,15);
		ellipse(random(190,430),random(0,500),10,10);
		ellipse(random(230,500),random(450,550),15,15);
		ellipse(random(270,550),random(450,570),10,10);
		ellipse(random(300,600),random(0,520),5,5);
		ellipse(random(400,800),random(450,520),17,17);
		ellipse(random(500,1000),random(450,520),15,15);
		ellipse(random(700,1000),random(450,520),8,8);
		ellipse(random(800,1000),random(450,520),15,15);
		pop();
	}
	else if(key === '8'){
		background(136,165,191);
		push();
		translate(-500,-2200);
		//sun
		oasis.display(scale(5));
		noStroke();
		ellipse(random(100,200),random(450,500),20,20);
		ellipse(random(140,300),random(450,500),15,15);
		ellipse(random(190,430),random(0,500),10,10);
		ellipse(random(230,500),random(450,550),15,15);
		ellipse(random(270,550),random(450,570),10,10);
		ellipse(random(300,600),random(0,520),5,5);
		ellipse(random(400,800),random(450,520),17,17);
		ellipse(random(500,1000),random(450,520),15,15);
		ellipse(random(700,1000),random(450,520),8,8);
		ellipse(random(800,1000),random(450,520),15,15);
		pop();
	}
}
//referenced the code from p5 from an example of recursive trees
function branch(y) {
  y *= 0.6;
  if (y > 1) {
    push();    
    rotate(degrees);   
    line(0, 0, 0, -y);  
    line(10, 0, 0, -y);
    translate(10, -y); 
    branch(y);      
    pop();     
    push();
    rotate(-degrees);
    line(0, 0, 0, -y);
    line(0, 0, 0, -y);
    translate(10, -y);
    branch(y);
    pop();
  }
}



