#pragma strict

function Start () {

var psys = this.GetComponent(ParticleSystem);

Destroy(this.gameObject, psys.duration);

}

function Update () {

}