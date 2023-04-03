let face, stretchy, stretchy2, egg;
let screen=0;
let a=0

function preload(){
	face = loadImage('eggface.png');
	yolk = loadImage('yolk.png');
	yolk2 = loadImage('yolk2.png');
	mix2 = loadImage('mix2.png');
	eggmix = loadImage('eggmix.png');
	mix3 = loadImage('mix3.png');
	mix4 = loadImage('mix4.png');
	mix5 = loadImage('mix5.png');
	mix6 = loadImage('mix6_new.png');
	whiskimg = loadImage('whisk.png');
	batterimg = loadImage('mix6_5.png');
	
	themix = loadAnimation(
	'mix6_new.png',
	'mix6_2.png',
	'mix6_3.png',
	'mix6_5.png');
	
	pan = loadAnimation(
	'pan_1.png',
	'pan_2.png',
	'pan_3.png',
	'pan_4.png');
	
	okonomiyakifry = loadAnimation(
		'fry_1.png',
		'fry_2.png',
		'fry_3.png',
		'fry_4.png',
		'fry5.png');

	
}

function setup() {
	colorMode(RGB);
	new Canvas(600, 600);
	noStroke();
	
gems = new Group();
gems.diameter=10;
gems.x = () => random(0, width);
gems.y = () => random(0, height);
gems.amount = 120;	

egg= new Sprite();
	egg.draw = () => {
		fill(255, 255, 255);
		push();
		rotate(egg.direction);
		ellipse(0, 0, 100 + egg.speed, 100 - egg.speed);
		pop();
		
		image(yolk, egg.vel.x * 2, egg.vel.y * 2);
	}
	
		stretchy = new Sprite(200, 200, 10, 10);
	
	stretchy.draw = () => {
		fill(255, 255, 255);
		push();
		rotate(stretchy.direction);
		ellipse(0, 0, 100 + stretchy.speed, 100 - stretchy.speed);
		pop();
		image(yolk, stretchy.vel.x * 2, stretchy.vel.y * 2);
	};
	
stretchy2 = new Sprite(300, 300, 10, 10);
	stretchy2.visible=false;
	stretchy2.draw = () =>{
			fill(255,255,255);
			push();
			rotate(stretchy.direction);
			ellipse(0, 0, 140 + stretchy.speed, 140 - stretchy.speed);
			pop();
			image(yolk2, stretchy.vel.x * 2, stretchy.vel.y * 2);		
		}


	
	
	
soy= new Sprite();
		soy.color='black';
		soy.diameter=120;
		soy.textColor='white';
		soy.text= "2 tbsp soy sauce";
		soy.visible=false;

mixture2 = new Sprite();
		mixture2.draw = () => {
		fill(0);
		
		push();
		rotate(mixture2.direction);
		ellipse(0, 0, 180 + mixture2.speed, 180 - mixture2.speed);
		pop();

		image(eggmix, mixture2.vel.x * 2, mixture2.vel.y * 2);
	};
	mixture2.visible=false
	
	sesame= new Sprite(500,500);
		sesame.color='salmon';
		sesame.diameter=100;
		sesame.textColor='black';
		sesame.text= "1 tbsp sesame oil";
		sesame.visible=false;

	mixture3 = new Sprite();
		mixture3.draw = () => {
		fill('salmon');
		
		push();
		rotate(mixture3.direction);
		ellipse(0, 0, 190 + mixture3.speed, 190 - mixture3.speed);
		pop();

		image(mix3, mixture3.vel.x * 2, mixture3.vel.y * 2);
	};	
		mixture3.visible=false
	
flour= new Sprite(500,500);
	flour.color=(242,242,242);
	flour.diameter=180;
	flour.textColor='black';
	flour.text="1 cup flour";
  flour.visible=false;

mixture4 = new Sprite(100,500);
	mixture4.draw = () => {
		fill('salmon');
	
		push();
		rotate(mixture4.direction);
		ellipse(0, 0, 190 + mixture4.speed, 190 - mixture4.speed);
		pop();

		image(mix4, mixture4.vel.x * 2, mixture4.vel.y * 2);
	};	
		mixture4.visible=false

water= new Sprite(100,500);
	water.color=('lightblue');
	water.diameter=150;
	water.textColor='black';
	water.text="1/2 cup water";
 water.visible=false;

mixture5 = new Sprite(100,500);
	mixture5.draw = () => {
		fill('salmon');
	
		push();
		rotate(mixture5.direction);
		ellipse(0, 0, 190 + mixture5.speed, 190 - mixture5.speed);
		pop();

		image(mix5, mixture5.vel.x * 2, mixture5.vel.y * 2);
	};	
		mixture5.visible=false
	
cabbage = new Sprite(100,500);
	cabbage.color=('lightgreen');
	cabbage.diameter=200;
	cabbage.textColor='white';
	cabbage.text="some shredded cabbage";
	cabbage.visible=false;
	
mixture6 = new Sprite(100,500);
	mixture6.draw = () => {
		fill('salmon');
	
		push();
		rotate(mixture6.direction);
		ellipse(0, 0, 180 + mixture6.speed, 180 - mixture6.speed);
		pop();

		image(mix6, mixture6.vel.x * 2, mixture6.vel.y * 2);
	};	
		mixture6.visible=false

whisk = new Sprite(200,200);
	whisk.draw = () => {
	image(whiskimg,20,20)}	
	whisk.visible=false

batter = new Sprite(200,200);
	batter.draw = () => {
	image(batterimg,20,20)}
	batter.visible=false
		
}

function draw(){
	background(241,241,229);
	if(screen ==0){
		cook0()
}else if(screen == 1){
  	cook1()
  }else if(screen==2){
  	cook2()
  }else if(screen==3){
  	cook3()
	}else if(screen==4){
		cook4()
	}else if(screen==5){
		cook5()
	}else if(screen==6){
		cook6()
	}else if(screen==7){
		mix()
	}else if(screen==8){
		fry()
	}else if(screen==9){
		fry2()
	}
	
	push();
	textStyle(BOLD);
	text('how to make okonomiyaki', 30,30);
	pop();
	text('mix these ingredients in a bowl...',30,50);
	text('+ 2 eggs', 30,70);
	text('+ 2 tbsp soy sauce',30,90);
	text('+ 1 tbsp sesame oil',30,110);
	text('+ 1 cup flour',30,130);
	text('+ 1/2 cup water',30,150);
	text('+ some shredded cabbage',30,170);
	
}

function cook0(){
	push();
	stroke(20);
	noFill();
	ellipse(300,300,300,300);
	pop();
	
	stretchy.update = () => {
		stretchy.moveTowards(mouse.x, mouse.y, 0.07);
	};
	
	egg.visible=true;	
		egg.x=300;
		egg.y=300;
	if (stretchy.overlaps(egg)) {
		screen=1
	}
}

function cook1() {
	
	push();
	stroke(20);
	noFill();
	ellipse(300,300,300,300);
	pop();
	
	egg.remove();
	stretchy.remove();
	
	soy.visible=true;
		soy.update = () => {
		soy.moveTowards(mouse.x, mouse.y, 0.07);}
		
	stretchy2.visible=true;
		stretchy2.x=300;
		stretchy2.y=300;
		stretchy2.moveTowards(width/2, height/2, 0.07);
}

function cook2(){
	
	push();
	stroke(20);
	noFill();
	ellipse(300,300,300,300);
	pop();
	
	soy.remove();
	stretchy2.remove();
	
	sesame.visible=true
	sesame.update = () => {
	sesame.moveTowards(mouse.x, mouse.y, 0.07);}
		
	mixture2.visible=true
	mixture2.x=300;
	mixture2.y=300;
	mixture2.update = () => {
	mixture2.moveTowards(width/2, height/2, 0.07);
	}
}

function cook3(){
	push();
	stroke(20);
	noFill();
	ellipse(300,300,300,300);
	pop();
	
	sesame.remove();
	mixture2.remove();
	
	flour.visible=true
	flour.update = () => {
	flour.moveTowards(mouse.x, mouse.y, 0.07);}
	
		mixture3.visible=true
		mixture3.x=300;
		mixture3.y=300;
		mixture3.update = () => {
		mixture3.moveTowards(width/2, height/2, 0.07);
	}
}

function cook4(){
	
	push();
	stroke(20);
	noFill();
	ellipse(300,300,300,300);
	pop();
	
	flour.remove();
	mixture3.remove();
	
	water.visible=true
	water.update = () => {
	water.moveTowards(mouse.x, mouse.y, 0.07);}
	
		mixture4.visible=true
		mixture4.x=300;
		mixture4.y=300;
		mixture4.update = () => {
		mixture4.moveTowards(width/2, height/2, 0.07);
	}
}

function cook5(){
	
	push();
	stroke(20);
	noFill();
	ellipse(300,300,300,300);
	pop();
	
	water.remove();
	mixture4.remove();
	
	cabbage.visible=true
	cabbage.update = () => {
	cabbage.moveTowards(mouse.x, mouse.y, 0.07);}
	
		mixture5.visible=true
		mixture5.x=300;
		mixture5.y=300;
		mixture5.update = () => {
		mixture5.moveTowards(width/2, height/2, 0.07);}
	}
		
	function cook6(){
	
	push();
	stroke(20);
	noFill();
	ellipse(300,300,300,300);
	pop();
	
	cabbage.remove();
	mixture5.remove();
	
	whisk.visible=true
	whisk.update = () => {
	whisk.moveTowards(mouse.x, mouse.y);}
	
		mixture6.visible=true
		mixture6.x=300;
		mixture6.y=300;
		mixture6.update = () => {
		mixture6.moveTowards(width/2, height/2, 0.07);}
		
		
}

function mix(){
	
	push();
	stroke(20);
	noFill();
	ellipse(300,300,300,300);
	pop();
	
	mixture6.remove();
	
	animation(themix,width/2,height/2);
		themix.noLoop();
		themix.frameDelay = 30;
	
	text('the batter is done!',400,500);
	text('click to start frying', 400,520); 
	
}

function fry(){
	whisk.remove();
	background(0);
	
	batter.visible=true;
	batter.update = () => {
		batter.moveTowards(mouse.x, mouse.y);}
	
		animation(pan,width/2,height/2);
		pan.frameDelay = 30;
	

	
}

function fry2(){
	background(0);
	batter.remove();
	
	animation(pan,width/2,height/2);
	pan.frameDelay = 30;
	
	animation(okonomiyakifry,340,270);
	okonomiyakifry.noLoop();
	okonomiyakifry.frameDelay=50;
	
	push();
	fill(255);
	text('great job!',100,100);
	textAlign(CENTER);
	text('your okonomiyaki is ready to be served.', 400,520);
//	text('(click to play again)', 400,540);
	pop();
}


function mousePressed(){
if(screen==0){
  	screen=1
  }else if(screen==1){
  	screen=2
  }else if(screen==2){
		screen=3
	}else if(screen==3){
		screen=4
	}else if(screen==4){
		screen=5
	}else if(screen==5){
		screen=6
	}else if(screen==6){
		screen=7
	}else if(screen==7){
		screen=8
	}else if(screen==8){
	screen=9
	}else if(screen==9){
	setup();
	screen=0;
	}

}	