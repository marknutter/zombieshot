#pragma strict

var ArmedWeapon:Weapon = null;

function FireWeapon (hitPoint : Vector3) {

	ArmedWeapon.Fire(hitPoint);
//	ArmedWeapon.SendMessage("Fire",hitPoint);

}