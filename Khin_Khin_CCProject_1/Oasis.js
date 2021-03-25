
class Oasis{
	constructor(){

	}

	display(){
		//stroke(45,68,107,42);
		//beginShape();
	    fill(56, 76,115);
	    //ellipse(200,500,500,200);
		// beginShape();
		// noFill;
		// let x1 = 100, x2 = 150, x3 = 400, x4 = 500;
		// let y1 = 450, y2 = 340, y3 = 600, y4 = 500;
		// bezier(x1,y2, x2, y2, x3, y3, x4,y4);
		// fill(0);
		// let steps = 10;
		// for (let i = 0; i <= steps; i++) {
	 //    let t = i / steps;
	 //    let x = bezierPoint(x1, x2, x3, x4, t);
	 //    let y = bezierPoint(y1, y2, y3, y4, t);
	 //    circle(x, y, 5);
	 //    endShape();

	 	stroke(56, 76,115);
		point(-10, 450);
		point(0, 500);
		point(100, 520);
		point(300, 600);
		point(200,200);
		strokeWeight(2);

		noFill();
		beginShape();
		curveVertex(0, 0);
		curveVertex(400, 200);
		curveVertex(200, 400);
		curveVertex(400, 500);
		curveVertex(450,550);
		curveVertex(550, 700);
		endShape();

	}
}