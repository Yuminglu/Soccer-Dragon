let soccerfield;
let broccoli;
let dragon;
let soccer;
let upHeld = false;
let downHeld = false;
let leftHeld = false;
let rightHeld = false;
let upHeld2 = false;
let downHeld2 = false;
let leftHeld2 = false;
let rightHeld2 = false;
let grabpizza = false;
let appeared = false;
let broccoliX=700;
let broccoliY=170;
let dragonX=200;
let dragonY=170;
let MovementSpeed=5;
let MovementSpeed2=5;
let pizzashop;
let pizza;
let broccoli2;
let state = 0;
let broccoliX2=0;
let broccoliY2=300;
let message;
let message2;
let stealdragon;
let mic, fft;
let meetduck;
let whereisdragon;
let whereisbroccoli;
let whereispizza;
let broccolisad;
let display = true;
let display2 = false;
let display3 = true;
let displayhungry = false;
let arrow;
let arrowdown;
let topage1 = false;
let topage2 = true;
let topage3 = false;
let topage4 = true;
let topage5 = false;
let topage6 = true;
let topage7 = false;
let topage8 = true;
let topage9 = false;
let topage10 = true;
let topage11 = false;
let displayarrow1 = false;
let dragonNumber = 0;
let broccoliNumber = 0;
let frame0 = true;
let frame1 = false;
let frame2 = false;
let frame3 = false;
let frame4 = false;
let frame5 = false;
let frame6 = false;
let frame7 = false;
let frame8 = false;
let frame9 = false;
let frame10 = false;
let frame11 = false;
let lunchforduck;
let messageofcabbage;
let carrot;
let boots;
let sandwich;
let pumpkin;
let thermal;
let apple;
let cabbage;
let scissor;
let circle;
let cabbageNumber = 0;
let finddragon1;
let finddragon2;
let front;

function preload(){
  soccerfield = loadImage('soccerfield.png');
  broccoli = loadImage('broccoli.png');
  dragon = loadImage('dragon.png');
  soccer = loadImage('soccer.png');
	pizzashop = loadImage('pizzashop.png');
	pizza = loadImage('pizza.png');
	broccoli2 = loadImage('broccoli2.png');
	message = loadImage('message.png');
	message2 = loadImage('message2.png');
	stealdragon = loadImage('stealdragon.png');
	meetduck = loadImage('meetduck.png');
	whereisdragon = loadImage('whereisdragon.png');
	broccolisad = loadImage('broccolisad.png');
	whereisbroccoli = loadImage('whereisbroccoli.png');
	lunchforduck = loadImage('lunchforduck.png');
	messageofcabbage = loadImage('messageofcabbage.png');
  carrot = loadImage('carrot.png');
  boots = loadImage('boots.png');
  sandwich = loadImage('sandwich.png');
  pumpkin = loadImage('pumpkin.png');
  thermal = loadImage('thermal.png');
  apple = loadImage('apple.png');
  cabbage = loadImage('cabbage.png');
  scissor = loadImage('scissor.png');
	whereispizza = loadImage('whereispizza.png');
	arrow = loadImage('arrow.png');
	arrowdown = loadImage('arrowdown.png');
	circle = loadImage('circle.png');
	fontRegular = loadFont('Real_Brush.otf');
	finddragon1 = loadImage('finddragon1.png');
	finddragon2 = loadImage('finddragon2.png');
	front = loadImage('front.png');
}

function setup() {

  // put setup code here

  createCanvas(900,500);
  background(20);
  footballcontrol=new football();
	dragonplayer=new dragoncontrol();
	broccoliplayer=new broccolicontrol();
	broccoliplayer2=new broccolicontrol2();
	broccolisadissad=new broccolisadcontrol();
	mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
	setTimeout(displaymessage,5000);
	setTimeout(displaymessage2,3000);
	setTimeout(dishungryplaymessage,25000);
	setTimeout(switchtopage2,27000);
}

function draw() {
if(frame0){
	image(front, -10, -10, 910, 510);
	if(topage1){
		triggerpage1();
	}
}
if(frame1){
	image(soccerfield, -10, -10, 910, 510);
	dragonplayer.display();
	dragonplayer.dragonmovement();
	broccoliplayer.display();
	broccoliplayer.dragonmovement();
	footballcontrol.display();
  footballcontrol.update();
  footballcontrol.edges();
	footballcontrol.checkbroccoli();
	footballcontrol.checkdragon();
	textFont(fontRegular);
	textSize(35);
	text(dragonNumber,400,80);
	text("VS",440,80);
	text(broccoliNumber,490,80);
	if(displayhungry){
		image(whereispizza,broccoliX+100,broccoliY-90,130,130);
	}
	if(displayarrow1){
		image(arrow,740,380,150,150);
			if(topage2){
		if(760<mouseX && mouseX<860 && 465>mouseY && 440<mouseY){
		triggerpage2();
		}
	}
	}
}
	if(frame2){
		image(pizzashop,0,-10,910,530);
	image(pizza,600,55,170,160);
	if(grabpizza){
		   image(pizzashop,0,-10,910,530);
		   image(pizza,broccoliX2+100,broccoliY2+90,100,100);
		   image(arrow,740,380,150,150);
				if(topage3){
		if(760<mouseX && mouseX<860 && 465>mouseY && 440<mouseY){
		triggerpage3();
		}
	}
	}
	broccoliplayer2.display();
	broccoliplayer2.dragonmovement();
	if(530<broccoliX2 && broccoliX2<650 && 100<broccoliY2 && broccoliY2<200){
  	 image(message,50,400,650,100);
	}
	}
	if(frame3){
	image(stealdragon,0,-10,910,510);
	if(display2){
	image(message2,80,20,750,80);
	}
	let vol = mic.getLevel(.05);
  let radius = map(vol, 0, 1, 0, 300);
	noStroke();
  fill(169,58,68);
	ellipse(400, 300, radius, radius);
	if(radius>30){
		image(arrow,740,380,150,150);
				if(topage4){
		if(760<mouseX && mouseX<860 && 465>mouseY && 440<mouseY){
		triggerpage4();
		}
	}
	}
	}
	if(frame4){
	image(soccerfield, -10, -10, 910, 510);
	image(pizza,broccoliX2+100,broccoliY2+90,100,100);
	image(whereisdragon,broccoliX2,broccoliY2-120,200,180);
	broccoliplayer2.display();
	broccoliplayer2.dragonmovement();
	image(arrowdown,380,340,150,150);
	if(topage5){
		if(400<mouseX && mouseX<500 && 430<mouseY && mouseY<480){
		triggerpage5();
		}
	}
	}
	if(frame5){
	image(meetduck, -10, -10, 910, 510);
	image(whereisdragon,broccoliX,broccoliY-120,200,180);
	broccolisadissad.display();
	broccolisadissad.dragonmovement();
	if(150<broccoliX && broccoliX<280 && 200<broccoliY && broccoliY<260){
	  image(whereisbroccoli,50,100,200,180);
		image(arrow,740,380,150,150);
		if(topage6){
		if(760<mouseX && mouseX<860 && 465>mouseY && 440<mouseY){
		triggerpage6();
		}
	}
	}
}
	if (frame6) {
		image(lunchforduck, 0, -10, 910, 530);
	  image(cabbage, 730, -25, 150, 150);
	  text(cabbageNumber, 840, 58);
		image(carrot, 400, 100, 150, 150);
		image(boots, 200, 200, 200, 200);
		image(sandwich, 350, 170, 200, 200);
		image(pumpkin, 150, 70, 200, 200);
		image(thermal, 490, 90, 200, 200);
		image(apple, 450, 230, 200, 200);
		image(cabbage, 250, 60, 250, 250);
		image(scissor, 300, 220, 250, 250);
		image(messageofcabbage, 100, 400, 650, 70);
		textFont(fontRegular);
		textSize(25);
		if (topage7) {
			if (325 < mouseX && mouseX < 410 && 150 < mouseY && mouseY < 230) {
				image(circle, 290, 110, 160, 160);
				cabbageNumber = 1;
				triggerpage7();
		//	}
		}
	}
	}
	if(frame7){
	image(lunchforduck, 0, -10, 910, 530);
	image(cabbage, 730, -25, 150, 150);
	text(cabbageNumber, 840, 58);
	image(cabbage,400,100, 150, 150);
  image(thermal,200,200, 200, 200);
  image(sandwich,350,170, 200, 200);
  image(scissor,100,140, 200, 200);
  image(carrot,490,90, 200, 200);
  image(apple,450,230, 200, 200);
  image(boots,200,30, 250, 250);
  image(pumpkin,300,220, 250, 250);
	image(messageofcabbage, 100, 400, 650, 70);
	if (topage8) {
	if (450 < mouseX && mouseX < 495 && 150 < mouseY && mouseY < 200) {
				image(circle, 420, 130, 100, 100);
				cabbageNumber = 2;
		    triggerpage8();
	}
			}
}
	if(frame8){
	image(lunchforduck, 0, -10, 910, 530);
	image(cabbage, 730, -25, 150, 150);
	text(cabbageNumber, 840, 58);
		image(boots,300,100, 150, 150);
image(sandwich,200,200, 200, 200);
image(pumpkin,350,170, 200, 200);
image(thermal,100,140, 200, 200);
image(apple,490, 90, 200, 200);
image(cabbage,450,230, 200, 200);
image(scissor,200,30, 250, 250);
image(carrot,300,220, 250, 250);
		image(messageofcabbage, 100, 400, 650, 70);
	if (topage9) {
			if (515 < mouseX && mouseX < 580 && 300 < mouseY && mouseY < 360) {
				image(circle, 490, 280, 100, 100);
				cabbageNumber = 3;
				triggerpage9();
			//}
		}
	}
	}
	if(frame9){
		image(lunchforduck, 0, -10, 910, 530);
	image(cabbage, 730, -25, 150, 150);
	text(cabbageNumber, 840, 58);
image(sandwich,370,100, 150, 150);
image(pumpkin,200,200, 200, 200);
image(thermal,350,170, 200, 200);
image(apple,100,140, 200, 200);
image(cabbage,490, 90, 200, 200);
image(scissor,450,230, 200, 200);
image(carrot,200,30, 250, 250);
image(boots,300,220, 250, 250);
		image(messageofcabbage, 100, 400, 650, 70);
		if (topage10) {
			if (557 < mouseX && mouseX < 620 && 160 < mouseY && mouseY < 220) {
				image(circle, 535, 140, 100, 100);
				cabbageNumber = 4;
				triggerpage10();
			}
		}
	}
	if(frame10){
		image(finddragon1, -10, -10, 920, 510);
		image(arrow,740,380,150,150);
		if(topage11){
		if(760<mouseX && mouseX<860 && 465>mouseY && 440<mouseY){
		triggerpage11();
		}
	}
	}
	if(frame11){
		image(finddragon2, -15, -10, 930, 510);
	}
}

function dishungryplaymessage(){
	displayhungry = !displayhungry;
}

function switchtopage2(){
	displayarrow1 = !displayarrow1;
}


function keyPressed() {
	if (key === "ArrowUp"){
		upHeld = !upHeld;
	}
	if (key === "ArrowDown"){
		downHeld = !downHeld;
	}
	if (key === "ArrowLeft"){
		leftHeld = !leftHeld;
	}
	if (key === "ArrowRight"){
		rightHeld = !leftHeld;
	}
	if (key === "W"||key === "w"){
    upHeld2 = !upHeld2;
  }
  if (key === "S"||key === "s"){
    downHeld2 = !downHeld2;
  }
  if (key === "A"||key === "a"){
    leftHeld2 = !leftHeld2;
  }
  if (key === "D"||key === "d"){
    rightHeld2 = !rightHeld2;
  }
	if (key === "P"||key === "p"){
    grabpizza = !grabpizza;
  }
}

function keyReleased() {
	if (key === "ArrowUp"){
		upHeld = !upHeld;
	}
	if (key === "ArrowDown"){
		downHeld = !downHeld;
	}
	if (key === "ArrowLeft"){
		leftHeld = !leftHeld;
	}
	if (key === "ArrowRight"){
		rightHeld = !rightHeld;
	}
  if (key === "W"||key === "w"){
    upHeld2 = !upHeld2;
  }
  if (key === "S"||key === "s"){
    downHeld2 = !downHeld2;
  }
  if (key === "A"||key === "a"){
    leftHeld2 = !leftHeld2;
  }
  if (key === "D"||key === "d"){
    rightHeld2 = !rightHeld2;
  }
}

class football{
  constructor(){
    this.soccerX=450;
    this.soccerY=250;
    this.speedX=-4;
    this.speedY=-3;
  }
   update(){
     this.soccerX=this.soccerX+this.speedX;
     this.soccerY=this.soccerY+this.speedY;
   }
   display(){
    image(soccer, this.soccerX, this.soccerY,100,75);
   }
   edges(){
     if(this.soccerY<0||this.soccerY>440){
       this.speedY *= -1;
     }
     if(this.soccerX<0){
       this.soccerX=450;
       this.soccerY=250;
			 broccoliNumber+=1;
			 this.speedX=-this.speedX;
			 this.speedY=-this.speedY;
     }
     if(this.soccerX>830){
       this.soccerX=450;
       this.soccerY=250;
			 dragonNumber+=1;
			 this.speedX=-this.speedX;
			 this.speedY=-this.speedY;
     }
   }
	checkbroccoli(){
		if(this.soccerX>broccoliX && this.soccerY>broccoliY-20 && this.soccerY<broccoliY+100){
			this.speedX *= -1;
		}
}
	checkdragon(){
		if(this.soccerX<dragonX+100 && this.soccerY>dragonY-20 && this.soccerY<dragonY+100){
			this.speedX *= -1;
		}
}
}

	class dragoncontrol{
	display(){
    image(dragon, dragonX, dragonY,180,175);
   }
	dragonmovement(){
	  if(upHeld2){
      dragonY=dragonY-MovementSpeed2;
    }
    if(downHeld2){
      dragonY=dragonY+MovementSpeed2;
    }
    if(leftHeld2){
      dragonX=dragonX-MovementSpeed2;
    }
    if(rightHeld2){
      dragonX=dragonX+MovementSpeed2;
    }
	}
}

class broccolicontrol{
	display(){
    image(broccoli, broccoliX, broccoliY,180,175);
   }
	dragonmovement(){
	  if(upHeld){
		  broccoliY=broccoliY-MovementSpeed;
	  }
	  if(downHeld){
		  broccoliY=broccoliY+MovementSpeed;
	  }
	  if(leftHeld){
	  	broccoliX=broccoliX-MovementSpeed;
	  }
	  if(rightHeld){
		  broccoliX=broccoliX+MovementSpeed;
	  }
	}
}

class broccolicontrol2{
	display(){
    image(broccoli2, broccoliX2, broccoliY2,200,200);
   }
	dragonmovement(){
	  if(upHeld){
		  broccoliY2=broccoliY2-MovementSpeed;
	  }
	  if(downHeld){
		  broccoliY2=broccoliY2+MovementSpeed;
	  }
	  if(leftHeld){
	  	broccoliX2=broccoliX2-MovementSpeed;
	  }
	  if(rightHeld){
		  broccoliX2=broccoliX2+MovementSpeed;
	  }
	}
}

function displaymessage2(){
	display2 = !display2;
}

class broccolisadcontrol{
	display(){
    image(broccolisad, broccoliX, broccoliY,180,175);
		//image(whereisdragon,broccoliX,broccoliY-120,200,180);
   }
	dragonmovement(){
	  if(upHeld){
		  broccoliY=broccoliY-MovementSpeed;
	  }
	  if(downHeld){
		  broccoliY=broccoliY+MovementSpeed;
	  }
	  if(leftHeld){
	  	broccoliX=broccoliX-MovementSpeed;
	  }
	  if(rightHeld){
		  broccoliX=broccoliX+MovementSpeed;
	  }
	}
}


function displaymessage(){
	display = !display;
}

function mouseClicked(){
	topage1 = !topage1;
	topage2 = !topage2;
	topage3 = !topage3;
	topage4 = !topage4;
	topage5 = !topage5;
	topage6 = !topage6;
	topage7 = !topage7;
	topage8 = !topage8;
	topage9 = !topage9;
	topage10 = !topage10;
	topage11 = !topage11;
}

function triggerpage1(){
  frame0 = !frame0;
	frame1 = !frame1;
}

function triggerpage2(){
  frame1 = !frame1;
	frame2 = !frame2;
}

function triggerpage3(){
  frame2 = !frame2;
	frame3 = !frame3;
}

function triggerpage4(){
  frame3 = !frame3;
	frame4 = !frame4;
}

function triggerpage5(){
  frame4 = !frame4;
	frame5 = !frame5;
}

function triggerpage6(){
  frame5 = !frame5;
	frame6 = !frame6;
}

function triggerpage7(){
  frame6 = !frame6;
	frame7 = !frame7;
}

function triggerpage8(){
  frame7 = !frame7;
	frame8 = !frame8;
}

function triggerpage9(){
  frame8 = !frame8;
	frame9 = !frame9;
}

function triggerpage10(){
  frame9 = !frame9;
	frame10 = !frame10;
}

function triggerpage11(){
  frame10 = !frame10;
	frame11 = !frame11;
}
