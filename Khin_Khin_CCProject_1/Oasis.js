
class Oasis{

	display(){
		//body of water, opaque layers of water
			noStroke();
			strokeWeight(1,10);
			fill(186,244,247,190);
			ellipse(400,520,1550,185);
			fill(157,244,241,95)
			ellipse(350,520,1450,200);
			fill(177,226,252,99);
			ellipse(450,550,1000,250);
			fill(165,196,254,70);
			ellipse(570,510,1500,1850);

			//flickers on water
			//stroke(0);
			fill(224,242,255,140);
			frameRate(1);
			ellipse(random(100,200),random(450,500),5,5);
			ellipse(random(100,200),random(450,500),10,10);
			ellipse(random(140,300),random(450,500),5,5);
			ellipse(random(190,430),random(450,500),10,10);
			ellipse(random(230,500),random(450,550),5,5);
			ellipse(random(270,550),random(450,570),10,10);
			ellipse(random(300,600),random(450,520),5,5);
			ellipse(random(400,800),random(450,520),7,7);
			ellipse(random(500,1000),random(450,520),5,5);
			ellipse(random(700,1000),random(450,520),8,8);
			ellipse(random(800,1000),random(450,520),5,5);
	}
}