
class Oasis{

	display(){
		//night time
		if(keyIsPressed == true){
			strokeWeight(1,10);
			fill(53,69,97);
		    stroke(38, 49,69);
			ellipse(400,520,1450,185);
		}//if
		//day time
		else{
			strokeWeight(1,10);
			fill(93,121,168,190);
		    stroke(56, 76,115);
			ellipse(400,520,1450,185);
		}//else
	}
}