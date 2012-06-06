#pragma strict

var Health:float = 100;
var Armor:float = 100;

function Start () {

}

function Update () {

}

function Damage (damage : float) {


	
	Health = Health - damage;
	if( Health < 0)
		Health = 0;
		
	Die();
}

function Die () {

	if(Health <= 0) {
		Destroy(gameObject);
		return true;	
	}
	return false;
}