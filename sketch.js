var wall, thickness;

var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);

  weight = random(30, 52);

  bullet = createSprite(50, 200, 40, 8);

  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  thickness = random(22, 83);

}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed;

if(wall.x - bullet.x < (bullet.width + wall.width) / 2) {

  bullet.velocityX = 0;

}

  if(hasCollided(bullet, wall)) {

  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage > 10) {

  wall.shapeColor = color(255, 0, 0);

  }

  if(damage < 10) {

  wall.shapeColor = color(0, 255, 0);

  }

  }

  bullet.collide(wall);

  drawSprites();
}

function hasCollided(bullet, wall) {

bulletRightEdge = bullet.x + bullet.width;

wallLeftEdge = wall.x;

if(bulletRightEdge >= wallLeftEdge) {

return true;

}

return false;

}
