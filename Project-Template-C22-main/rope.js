class rope{
	constructor()
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
	rope1.display();
	
}
