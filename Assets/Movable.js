#pragma strict

var MovePoints:int = 100;

function Start () {


}



function Update () {

}

function MoveC(hitPoint : Vector3) {

		var distance = (transform.position - hitPoint).magnitude;
	

		if(HUD.IsSquareOpen(hitPoint)) {
			if(CanMove(20 * distance))
			 	transform.position = hitPoint;

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

