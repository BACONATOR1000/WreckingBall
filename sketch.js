const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,750,1200,20);
  ball = new Ball(300,300,20);
  block = new Block(800,700,50,50);
  block1 = new Block(800,650,50,50)
  block2 = new Block(800,600,50,50)
  block3 = new Block(800,500,50,50)
  block4 = new Block(800,550,50,50)
  block5 = new Block(800,500,50,50)
  block6 = new Block(800,450,50,50)
  block7= new Block(800,400,50,50)
  block8 = new Block(800,350,50,50)
  block9 = new Block(800,300,50,50)
  sling = new Slingshot(ball.body,{x:500,y:50})
}

function draw() {
  background("white");
  Engine.update(engine);
  ground.display();
  ball.display();
  block.display();
  sling.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}
function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(bird.body);
     bird.trajectory = [];
     Matter.Body.setPosition(bird.body, {x:200 , y: 50});
  }
}