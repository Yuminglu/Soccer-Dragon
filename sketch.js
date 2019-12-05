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
let broccoliX=700;
let broccoliY=170;
let dragonX=200;
let dragonY=170;
let MovementSpeed=5;
let MovementSpeed2=5;

function preload(){
  soccerfield = loadImage('soccerfield.png');
  broccoli = loadImage('broccoli.png');
  dragon = loadImage('dragon.png');
  soccer = loadImage('soccer.png');
}

function setup() {

  // put setup code here

  createCanvas(900,500);
  background(20);
  footballcontrol=new football();
	dragonplayer=new dragoncontrol();
	broccoliplayer=new broccolicontrol();

}

function draw() {

  // put drawing code here

  image(soccerfield, -10, -10, 910, 510);
  keyMovements();
	dragonplayer.display();
	dragonplayer.dragonmovement();
	broccoliplayer.display();
	broccoliplayer.dragonmovement();
	footballcontrol.display();
  footballcontrol.update();
  footballcontrol.edges();
	footballcontrol.checkbroccoli();
	footballcontrol.checkdragon();

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

function keyMovements(){
}

class football{
  constructor(){
    this.soccerX=450;
    this.soccerY=250;
    this.speedX=-2;
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
     }
     if(this.soccerX>830){
       this.soccerX=450;
       this.soccerY=250;
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
