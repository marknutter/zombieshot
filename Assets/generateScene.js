#pragma strict

var NZombies:int = 100;

public var FloorPiece1:GameObject;
public var FloorPiece2:GameObject;
public var Zombie:GameObject;

function Start () {
//	Random.seed(DateTime.Now);

	print(Random.Range(1,3));

	for(var i = 0; i < 3; i++)
		for(var j = 0; j < 3; j++) {

		if(Random.Range(1,3) == 1)
			Instantiate(FloorPiece1,Vector3(i*11,0,j*11), Quaternion.identity);
		else
			Instantiate(FloorPiece2,Vector3(i*11,0,j*11), Quaternion.identity);
	}

	for(i = 0; i < NZombies; i++) {
		
		var position:Vector3 = Vector3(Random.Range(1,33),0,Random.Range(1,33));
		while(!(HUD.IsSquareOpen(position)))
			position = Vector3(Random.Range(1,33),0,Random.Range(1,33));
	
		Instantiate(Zombie,position, Quaternion.identity);
	
	}

}

function Update () {
	var hero = GameObject.Find("Hero");
	

	
	Camera.main.transform.position.x = hero.transform.position.x;
	Camera.main.transform.position.z = hero.transform.position.z - 5; 
}