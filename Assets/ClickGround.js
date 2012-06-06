#pragma strict

// 0 = move
// 1 = shoot

var Action:int = 0;


function OnMouseDown () {

    
   
    var hero = GameObject.Find("Hero");
      
    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
	var hit : RaycastHit;
	
	print(1);
	
	var layerMask = 1 << 8; // Only allow ray to hit layer 8 (the gameboard)

	if (Physics.Raycast (ray, hit, 100, layerMask)) {	
    	var hitPoint = hit.point;
	
      
      print(hitPoint);
      
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
}

function ChangeAction(action : float) {
	Action = action;
}