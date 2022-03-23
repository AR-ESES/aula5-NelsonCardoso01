let laranjas;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

}

function draw() {
	background(0);
	if(mouseY >= height/2) {
	noFill();
}

	else {
	Fill(230);
}

	stroke(230);
	strokeWeight(2);
	circle(width / 2, height / 2, height / 4);


}