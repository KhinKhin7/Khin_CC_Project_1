
// let r = 0.1;
// let g = 0.1;
// let b = 0.1; 

class Hills{

	display(){
		//
		//stroke(166,107,56);
		if(keyIsPressed == true){
			strokeWeight(2);
			//dark hills
			stroke(46,32,17);
			fill(46,32,17);
			//hills all the way in the back
			ellipse(950,350,500,100);
			ellipse(100,340,400,70);
			ellipse(700,350,300,80);
			ellipse(450,350,400,100);
			//hills in front of the ones in the back
			ellipse(300,360,400,70);
			ellipse(450,360,300,70);
			ellipse(700,370,500,60);
			ellipse(900,380,400,30);
			//lighter colored hills
			stroke(46,32,17);
			fill(51,31,8,250);
		    ellipse(260,390,300,60);
		    ellipse(400,390,300,50);
		    ellipse(980,390,300,50);
		    ellipse(500,400,1200,40);
			ellipse(50,380,250,60);
			ellipse(25,390,100,30);
			ellipse(75,400,170,40);
			//lightest hills, closest 
			fill(51,31,8);
			ellipse(850,680,800,200);
			ellipse(50, 750, 1000, 400);
			fill(64,38,10);
			ellipse(700,900, 1000,500);

		}
		else{
		strokeWeight(2);
		//dark hills
		stroke(180,110,57);
		fill(186,116,50,250); 
		//hills all the way in the back
		ellipse(950,350,500,100);
		ellipse(100,340,400,70);
		ellipse(700,350,300,80);
		ellipse(450,350,400,100);
		//hills in front of the ones in the back
		ellipse(300,360,400,70);
		ellipse(450,360,300,70);
		ellipse(700,370,500,60);
		ellipse(900,380,400,30);
		//lighter colored hills
		stroke(192,120,63);
		fill(198 ,127 ,61,250);
	    ellipse(260,390,300,60);
	    ellipse(400,390,300,50);
	    ellipse(980,390,300,50);
	    ellipse(500,400,1200,40);
		ellipse(50,380,250,60);
		ellipse(25,390,100,30);
		ellipse(75,400,170,40);
		//lightest hills, closest 
		fill(217,151,72);
		ellipse(850,680,800,200);
		ellipse(50, 750, 1000, 400);
		fill(220,156,75);
		ellipse(700,900, 1000,500);
	}

	}


}
	