#pragma strict

var Damage:float = 100;
var DamageRadius:float = 0;
var FireAnimation:GameObject = null;
var DamageAnimation:GameObject = null;
var LineOfSight:boolean = false;
var CostToFire:float = 20;
var Projectiles:int = 5;
var ProjectileSpread:float = 45;
var Range:float = 10;


function Fire (hitPoint : Vector3) {

	var hero = GameObject.Find("Hero");
	var shotVector = hitPoint - hero.transform.position;
	
	
	
	if(hero.GetComponent(Movable).CanMove(CostToFire) )	{
		
		if(FireAnimation != null) {			// Display fire animation in direction of shot
				Instantiate(FireAnimation,hero.transform.position + shotVector/shotVector.magnitude,Quaternion.LookRotation(shotVector));
		}
		
		if(LineOfSight) {
			FireLOSWeapon(hitPoint);	
		} else {
			FireAreaWeapon(hitPoint);
		}


	}

}

function FireAreaWeapon (hitPoint : Vector3) { // i.e. LineOfSight = FALSE for this weapon

		var enemies = GameObject.FindGameObjectsWithTag("Enemy"); 
		for (var enemy in enemies) {			// Damage all enemies	
			if((enemy.transform.position - hitPoint).magnitude < DamageRadius + 0.5) {
					if(DamageAnimation != null) {
						Instantiate(DamageAnimation,enemy.transform.position,enemy.transform.rotation);
					}

				enemy.SendMessage("Damage",Damage);
			}
		}
		var objects = GameObject.FindGameObjectsWithTag("Environment");
		for (var enemy in objects) {			// Damage all enviroment objects	
			if((enemy.transform.position - hitPoint).magnitude < DamageRadius + 0.5) {
					if(DamageAnimation != null) {
						Instantiate(DamageAnimation,enemy.transform.position,enemy.transform.rotation);
					}
				enemy.SendMessage("Damage",Damage);
			}
		}

}

function FireLOSWeapon (hitPoint : Vector3) { // i.e. LineOfSight = TRUE for this weapon

	var hero = GameObject.Find("Hero");
	var shotVector = hitPoint - hero.transform.position;
	var hit : RaycastHit;
	
	shotVector = shotVector / shotVector.magnitude;
	
	if(Projectiles > 1) {
		shotVector = Quaternion.AngleAxis(-ProjectileSpread / 2, Vector3.up) * shotVector;
		for(var i = 0; i < Projectiles; i++) {
			if (Physics.Raycast (hero.transform.position, shotVector, hit, Range)) {
        		FireAreaWeapon(hit.collider.transform.position);
    		}
			shotVector = Quaternion.AngleAxis(ProjectileSpread / (Projectiles - 1), Vector3.up) * shotVector;	
		}
	} else if(Projectiles == 1) {
		if (Physics.Raycast (hero.transform.position, shotVector, hit, Range)) {
       		FireAreaWeapon(hit.collider.transform.position);
    	}
	}

}