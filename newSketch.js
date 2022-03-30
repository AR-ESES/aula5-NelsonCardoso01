let laranjas;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

}

function draw() {

	//FUNDO VERDE CLARO 
	background(186, 210, 159);

    //FICA AZUL
	if(mouseY>=height/2 && mouseX<=width/2)  
    fill(73, 176, 217);

    //FICA VERDE
    else if(mouseY<height/2 && mouseX<=width/2) 
    fill(103, 192, 137);

    //FICA AMARELO
    else if(mouseY<height/2 && mouseX>width/2) 
    fill(244, 192, 149); 

    //FICA VAZIO
	else{
		 noFill();
	}


	stroke(230);
	strokeWeight(2);
	circle(width / 2, height / 2, height / 5);
}