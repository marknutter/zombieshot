#pragma strict

var Damage:float = 100;
var Range:float = 0;
var FireAnimation:GameObject = null;
var DamageAnimation:GameObject = null;

function Start () {

}

function Update () {

}

function Fire (hitPoint : Vector3) {

	var hero = GameObject.Find("Hero");
	var shotVector = hitPoint - hero.transform.position;
	if(hero.GetComponent(Movable).CanMove(20) )	{
		if(FireAnimation != null) {
				Instantiate(FireAnimation,hero.transform.position + shotVector/shotVector.magnitude,Quaternion.LookRotation(shotVector));
		}

		var enemies = GameObject.FindGameObjectsWithTag("Enemy");
		for (var enemy in enemies) {
	
			if((enemy.transform.position - hitPoint).magnitude < Range + 0.5) {
					if(DamageAnimation != null) {
						Instantiate(DamageAnimation,enemy.transform.position,enemy.transform.rotation);
					}

				enemy.SendMessage("Damage",Damage);
			}
		}
		var objects = GameObject.FindGameObjectsWithTag("Environment");
		for (var enemy in objects) {
	
			if((enemy.transform.position - hitPoint).magnitude < Range + 0.5) {
					if(DamageAnimation != null) {
						Instantiate(DamageAnimation,enemy.transform.position,enemy.transform.rotation);
					}
				enemy.SendMessage("Damage",Damage);
			}
		}
	}

}