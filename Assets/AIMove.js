#pragma strict

function Start () {

}

function Update () {

}

function TakeTurn () {

	var goodGuys = GameObject.FindGameObjectsWithTag("GoodGuy");
	var target:GameObject;
	var targetDistance = 100000;
	for (var goodGuy in goodGuys) {
		var distance = (goodGuy.transform.position - transform.position).sqrMagnitude;
	
		if(distance < targetDistance) {
			
			target = goodGuy;
			targetDistance = distance;
		}
	}
	
	print(targetDistance);
	
	if(targetDistance < 1.5) {
		target.SendMessage("Damage",10);
	} else {

		if(HUD.IsSquareOpen(transform.position - Vector3(1,0,0)) && (target.transform.position - (transform.position - Vector3(1,0,0))).sqrMagnitude < targetDistance)
			transform.position = transform.position - Vector3(1,0,0);
		else if(HUD.IsSquareOpen(transform.position - Vector3(0,0,1)) && (target.transform.position - (transform.position - Vector3(0,0,1))).sqrMagnitude < targetDistance)
			transform.position = transform.position - Vector3(0,0,1);
		else if(HUD.IsSquareOpen(transform.position - Vector3(-1,0,0)) && (target.transform.position - (transform.position - Vector3(-1,0,0))).sqrMagnitude < targetDistance)
			transform.position = transform.position - Vector3(-1,0,0);
		else if(HUD.IsSquareOpen(transform.position - Vector3(0,0,-1)) && (target.transform.position - (transform.position - Vector3(0,0,-1))).sqrMagnitude < targetDistance)
			transform.position = transform.position - Vector3(0,0,-1);
		
		
				
	}

}