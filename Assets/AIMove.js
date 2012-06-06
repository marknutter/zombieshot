#pragma strict

var NMoves:int = 2;
var AlarmDistance:float = 50;

function Start () {

}

function Update () {

}

function TakeTurn () {

	var goodGuys = GameObject.FindGameObjectsWithTag("GoodGuy");
	var target:GameObject;
	var targetDistance:float = 100000;
	var i = 0;
	var distance:float;
	for (i=0;i<=NMoves;i++) {
	for (var goodGuy in goodGuys) {
		distance = (goodGuy.transform.position - transform.position).magnitude;
		
	
		if(distance < targetDistance) {
			
			target = goodGuy;
			targetDistance = distance;
		}
	}
		
	
		if(targetDistance > AlarmDistance) {
			print(targetDistance);
			return;
		} else if(targetDistance < 1.5) {
			target.SendMessage("Damage",10);
		} else {

			if(HUD.IsSquareOpen(transform.position - Vector3(1,0,0)) && (target.transform.position - (transform.position - Vector3(1,0,0))).magnitude < targetDistance)
				transform.position = transform.position - Vector3(1,0,0);
			else if(HUD.IsSquareOpen(transform.position - Vector3(0,0,1)) && (target.transform.position - (transform.position - Vector3(0,0,1))).magnitude < targetDistance)
				transform.position = transform.position - Vector3(0,0,1);
			else if(HUD.IsSquareOpen(transform.position - Vector3(-1,0,0)) && (target.transform.position - (transform.position - Vector3(-1,0,0))).magnitude < targetDistance)
				transform.position = transform.position - Vector3(-1,0,0);
			else if(HUD.IsSquareOpen(transform.position - Vector3(0,0,-1)) && (target.transform.position - (transform.position - Vector3(0,0,-1))).magnitude < targetDistance)
				transform.position = transform.position - Vector3(0,0,-1);
		}
	}
		
				
	

}