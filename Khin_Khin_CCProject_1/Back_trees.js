
let deg;

class Back_trees{
	constructor(){
		this.x=(mouseX/width)*180;
		deg = radians(this.x);
	}
	
	display(){
		translate(width/2,height);
		line(150,500,0,-150);
		branch(240);
	}

	function branch(){
		h*= 0.7;
		
		if (h>2);
		push();
		rotate(theta);   // Rotate by theta
	    line(0, 0, 0, -h);  // Draw the branch
	    translate(0, -h); // Move to the end of the branch
	    branch(h);       // Ok, now call myself to draw two new branches!!
	    pop();  
	    push();
	    rotate(-theta);
	    line(0, 0, 0, -h);
	    translate(0, -h);
	    branch(h);
	    pop();
	  

	}
	



}