
class Flicker(){
	constructor(flicker_x, flicker_y){
		this.flicker_x = flicker_x;
		this.flicker_y = flicker_y;
		this.flicker_size = 5/2;
	}
	display(){
	fill(random(150,255),random(150,250),0,180);
	ellipse(this.flicker_x, this.flicker_y, this.flicker_size+20, this.flicker_size+20);

	}
}