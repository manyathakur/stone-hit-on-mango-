
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const bind = Matter.Constraint;

//mam there is an error in thecode i dont know how to fix it please help:(
function preload(){
  root = loadImage("tree.png");
  boy = loadImage("boy.png");
}
function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
  world = engine.world;
  
  tree = createSprite(600,230,10,10);
  tree.addImage("mango",root);
  tree.scale = 0.3;

  mani = createSprite(150,350,10,10);
  mani.addImage("hiro",boy);
  mani.scale = 0.09;

  ground = new Ground();
  LIAM = new stone(100,300);

  fruit1 = new mango(570,130);
  fruit2 = new mango(530,170);
  fruit3 = new mango(620,200);
  fruit4 = new mango(650,110);
  fruit5 = new mango(690,146);
  fruit6 = new mango(720,212);
  fruit7 = new mango(620,90);
  fruit8 = new mango(600,180);
  fruit9 = new mango(480,180);

  boww = new XD(LIAM.ore,{x:100,y:210});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  background(rgb(0,0,100));

  drawSprites();

  ground.earth();

  i.create();

  fruit1.groww();
  fruit2.groww();
  fruit3.groww();
  fruit4.groww();
  fruit5.groww();
  fruit6.groww();
  fruit7.groww();
  fruit8.groww();
  fruit9.groww();

  collide(i);
  collide(i);
  collide(i);
  collide(i);
  collide(i);
  collide(i);
  collide(i);
  collide(i);
  collide(i);
}

function mouseDragged(){
  Matter.Body.setPosition(LIAM.LIAM,{X:mouseX,Y:mouseY});
}
function mouseReleased(){
  boww.detach();
}
function collide(l,I){

  var pos =l.ore.position;
  var pos2 = I.josh.position;

  var right = pos.x + L.ore.width/2;
  var left = pos2.x + I.juice.diameter/2;

  if(right >= left ){
    Matter.Body.setStatic(l.body,false);
  }
}



