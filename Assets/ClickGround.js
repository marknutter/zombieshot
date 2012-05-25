#pragma strict

// 0 = move
// 1 = shoot

var Action:int = 0;


function OnMouseDown () {

    
   
    var hero = GameObject.Find("Hero");
      
    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
	var hit : RaycastHit;

	if (Physics.Raycast (ray, hit, 100)) {	
    	var hitPoint = hit.point;
	}
      
      hitPoint.x = Mathf.Round(hitPoint.x);
      hitPoint.z = Mathf.Round(hitPoint.z);
      hitPoint.y = 0;
    if (Action == 0) {  
    	hero.SendMessage("MoveC",hitPoint);
	}
	else if(Action == 1) {
		hero.SendMessage("FireWeapon",hitPoint);
	}    
}

function ChangeAction(action : float) {
	Action = action;
}