class rope{
	constructor(bodyA, bodyB, pointA, pointB) 
	{

	//create rope constraint here
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
	}


    //create display() here 
	display() {
		push();
			strokeWeight(2);
			stroke(225);
			line(rope1.pointA.x,rope1.pointA.y,ball1.position.x,ball1.position.y);
			line(rope2.pointA.x,rope2.pointA.y,ball2.position.x,ball2.position.y);
			line(rope3.pointA.x,rope3.pointA.y,ball3.position.x,ball3.position.y);
			line(rope4.pointA.x,rope4.pointA.y,ball4.position.x,ball4.position.y);
			line(rope5.pointA.x,rope5.pointA.y,ball5.position.x,ball5.position.y);
		pop();
	
	}
}
