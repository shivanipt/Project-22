const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.8
	}

	ball1 = Bodies.circle(300, 50, 10, ball_options);
	World.add(world, ball1);
	ball2 = Bodies.circle(350, 10, 10, ball_options);
	World.add(world, ball2);
	ball3 = Bodies.circle(400, 20, 10, ball_options);
	World.add(world, ball3);
	ball4 = Bodies.circle(450, 30, 10, ball_options);
	World.add(world, ball4);
	ball5 = Bodies.circle(500, 50, 10, ball_options);
	World.add(world, ball5);

	rope1 = Matter.Constraint.create( {
		pointA:{x:300, y:100},
		bodyB:ball1,
		pointB:{x:0, y:0},
		length:100,
		stiffness:0.1
	});
	rope2 = Matter.Constraint.create( {
		pointA:{x:350, y:100},
		bodyB:ball2,
		pointB:{x:0, y:0},
		length:100,
		stiffness:0.1
	});
	rope3 = Matter.Constraint.create( {
		pointA:{x:400, y:100},
		bodyB:ball3,
		pointB:{x:0, y:0},
		length:100,
		stiffness:0.1
	});
	rope4 = Matter.Constraint.create( {
		pointA:{x:450, y:100},
		bodyB:ball4,
		pointB:{x:0, y:0},
		length:100,
		stiffness:0.1
	});
	rope5 = Matter.Constraint.create( {
		pointA:{x:500, y:100},
		bodyB:ball5,
		pointB:{x:0, y:0},
		length:100,
		stiffness:0.1
	});

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	push();
	strokeWeight(2);
	stroke(225);
	line(rope1.pointA.x,rope1.pointA.y,ball1.position.x,ball1.position.y);
	line(rope2.pointA.x,rope2.pointA.y,ball2.position.x,ball2.position.y);
	line(rope3.pointA.x,rope3.pointA.y,ball3.position.x,ball3.position.y);
	line(rope4.pointA.x,rope4.pointA.y,ball4.position.x,ball4.position.y);
	line(rope5.pointA.x,rope5.pointA.y,ball5.position.x,ball5.position.y);
	pop();
  
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x, ball1.position.y, 10);
  ellipse(ball2.position.x, ball2.position.y, 10);
  ellipse(ball3.position.x, ball3.position.y, 10);
  ellipse(ball4.position.x, ball4.position.y, 10);
  ellipse(ball5.position.x, ball5.position.y, 10);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
//function keyPressed() {
	//if(KeyCode===RIGHT_ARROW) {
		//Matter.Body.applyForce(ball5, {})
	//}
//}