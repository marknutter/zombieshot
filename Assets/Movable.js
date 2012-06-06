#pragma strict

var MovePoints:int = 100;
var RenderSpeed:float = 10;
var TransformGoal:Vector3 = Vector3(0,0,0);
var Transforming:boolean = false;
var MoveCost:float = 20;

function Start () {

	TransformGoal = transform.position;

}



function Update () {
	
	if((TransformGoal - transform.position).magnitude < 0.1) {
		Transforming = false;
		transform.position = TransformGoal;
	}
	
	if(Transforming) {
	
		transform.position = transform.position + (TransformGoal - transform.position) / (TransformGoal - transform.position).magnitude * RenderSpeed * Time.deltaTime;
	
	}
}

function MoveC(hitPoint : Vector3) {

		if(!HUD.LineOfSight(transform.position,hitPoint))
			return;
			
			
			
		var distance = (transform.position - hitPoint).magnitude;
	
		

		if(HUD.IsSquareOpen(hitPoint)) {
			if(CanMove(MoveCost * distance)) {
				Transforming = true;
				TransformGoal = hitPoint;
	//		 	transform.position = hitPoint;
			}
		} 	

}

function Reset() {

	MovePoints = 100;
	GameObject.Find("ActionBar").guiTexture.transform.localScale.x = 0.8 * MovePoints / 100;	// Change move points bar
	
}

public function CanMove(points : int) {

	if(MovePoints >= points) {
		MovePoints = MovePoints - points;
		GameObject.Find("ActionBar").guiTexture.transform.localScale.x = 0.8 * MovePoints / 100;	// Change move points bar
		return(true);
	} else {
		return(false);
	}
		

}

