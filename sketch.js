
var car,wall;
var speed,weight,thickness;
var bullte;


function setup() {
createCanvas(1200,400);

speed=random(55,90);
weight=random(400,1100);

bullte = createSprite(50,200,50,50);
bullte.velocityX = speed;

thickness = random(22,83);
speed = random(223,321);
weight = random(30,52);

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = (80,80,80);





}

function draw() {
background("black");  
 



if (hasCollided(bullte,wall))
{
  bullte.velocityX = 0;
  var damsge = (0.5 * weight * speed* speed)/(thickness *thickness *thickness); 

  if(damsge>10)
  {

    wall.shapeColor=color(225,0,0);

  }

  if(damsge<10)
  {

    wall.shapeColor=color(0,225,0);

  }

}

drawSprites();

}

function hasCollided(b,w)
{
  
  if(w.x-b.x < w.width/2 + b.width/2)
  {
    return true
  }else{

    return false;
}
}

