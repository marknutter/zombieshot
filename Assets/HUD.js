#pragma strict

function OnGUI () {
	// Make a background box
//	GUI.Box (Rect (10,10,100,50), "Menu");
	var terrain = GameObject.Find("ClickCatch");

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
	var ally = GameObject.Find("Ally");
	

	
	Camera.main.transform.position.x = ally.transform.position.x;
	Camera.main.transform.position.z = ally.transform.position.z - 5; 
	
	var enemies = GameObject.FindGameObjectsWithTag("Enemy");
	for (var enemy in enemies)
			enemy.SendMessage("Die");
	
	enemies = GameObject.FindGameObjectsWithTag("Enemy");		
	for (var enemy in enemies)
			enemy.SendMessage("TakeTurn");
			
	
	
	ally.SendMessage("Die");
	hero.SendMessage("Die");

	
	hero = GameObject.Find("Hero");
	ally = GameObject.Find("Ally");
	
	hero.name = "Ally";
	ally.name = "Hero";

	ally.SendMessage("Reset");

}

public static function IsSquareOpen(square:Vector3) {


	square.y = 5;
	var hit: RaycastHit;
	

	
	if( Physics.Raycast(square,-Vector3.up,hit) ) {
		
		if(Mathf.Abs(hit.point.y) < 0.01)
			return true;
		else
			return false;
	
	}
	
	return false;

}

public static function LineOfSight(start:Vector3,end:Vector3) {

	start.y = 0.5;
	end.y = 0.5;
	
	return !Physics.Raycast(start,end-start,(end-start).magnitude);

}