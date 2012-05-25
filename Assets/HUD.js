#pragma strict

function OnGUI () {
	// Make a background box
//	GUI.Box (Rect (10,10,100,50), "Menu");
	var terrain = GameObject.Find("Terrain");

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (20,40,80,20), "Fire")) {
		terrain.SendMessage("ChangeAction",1);
	}
	if (GUI.Button (Rect (20,80,80,20), "Walk")) {
		terrain.SendMessage("ChangeAction",0);
	}
	
	
	if (GUI.Button (Rect (20,140,40,40), "End")) {
		EndTurn();
	}

}



function EndTurn () {

	var hero = GameObject.Find("Hero");

	
	Camera.main.transform.position.x = hero.transform.position.x;
	Camera.main.transform.position.z = hero.transform.position.z - 5; 
	
	hero.SendMessage("Reset");
	
	var enemies = GameObject.FindGameObjectsWithTag("Enemy");
	for (var enemy in enemies)
			enemy.SendMessage("Die");
			
	for (var enemy in enemies)
			enemy.SendMessage("TakeTurn");

	

}

public static function IsSquareOpen(square:Vector3) {


	square.y = 5;
	var hit: RaycastHit;
	
	if( Physics.Raycast(square,-Vector3.up,hit) ) {
	
		if(hit.point.y == 0)
			return true;
		else
			return false;
	
	}
	
	return false;

}