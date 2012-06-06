#pragma strict

var Damage:float = 100;
var Range:float = 0;

function Start () {

}

function Update () {

}

function FireWeapon (hitPoint : Vector3) {


	if(gameObject.GetComponent(Movable).CanMove(20) )	{

		var enemies = GameObject.FindGameObjectsWithTag("Enemy");
		for (var enemy in enemies) {
	
			if((enemy.transform.position - hitPoint).magnitude < Range + 0.5) {
				
				enemy.SendMessage("Damage",Damage);
			}
		}
	}

}