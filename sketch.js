
var bullet, wall, thickness;
var speed, weight;


function setup() {
   createCanvas(1600,400);

   thickness=random(22,83);

   bullet = createSprite(50, 200, 20, 10);
   wall = createSprite(1200, 200, thickness, 100);

   speed=random(223,321);
   //weight=random(30,52);

   bullet.velocityX = speed;


}

function draw() {
 
   background("black");

    var damage=0.5 * speed* speed/(thickness *thickness *thickness);
    textSize(20)
    fill("white")
    text('damage:' +damage ,100,300);
    
if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;


  if (damage>1.5)
  {
   wall.shapeColor="red";
  }
   if (damage<=1.5)
  {
  wall.shapeColor="green";
  }
}
    bullet.x = wall.x-(bullet.width+wall.width)/2
  drawSprites(); 
}


function hasCollided (lbullet,lwall) {
   bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
   if (bulletRightEdge>=wallLeftEdge) {
       return true;
   }
       return false;
}
