var bat;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11,ball12, ball13, ball14;

function preload(){
  batImg = loadImage("cricketbat.png");
  ballImg = loadImage("redball.png");
}

function setup() {
  createCanvas(1280,400);

  bat = createSprite(200,200,20,20);

//ball1 = createSprite(50,200,20,20);
//ball2 = createSprite(100,200,20,20);
//ball3 = createSprite(150,200,20,20);
ball4 = createSprite(200,200,20,20);
ball5 = createSprite(250,200,20,20);
//ball6 = createSprite(300,200,20,20);
//ball7 = createSprite(350,200,20,20);
//ball8 = createSprite(400,200,20,20);
//ball9 = createSprite(450,200,20,20);
//ball10 = createSprite(500,200,20,20);
//ball11 = createSprite(550,200,20,20);
//ball12 = createSprite(600,200,20,20);
//ball13 = createSprite(650,200,20,20);
//ball14 = createSprite(700,200,20,20);

//ball1.velocityX = 2;
//ball2.velocityX = 2;
//ball3.velocityX = 2;
ball4.velocityX = 0.1;
ball5.velocityX = 0.1;
//ball6.velocityX = 2;
//ball7.velocityX = 2;
//ball8.velocityX = 2;
//ball9.velocityX = 2;
//ball10.velocityX = 2;
//ball11.velocityX = 2;
//ball12.velocityX = 2;
//ball13.velocityX = 2;
//ball14.velocityX = 2;



}

function draw() {
  background("cyan");  

  //console.log(ball1.x);
  //console.log(ball2.x);
  //console.log(ball3.x);
  console.log(ball4.x);
  console.log(ball5.x);
 // console.log(ball6.x);
 // console.log(ball7.x);
 // console.log(ball8.x);
 // console.log(ball9.x);
 // console.log(ball10.x);
 // console.log(ball11.x);
 // console.log(ball12.x);
 // console.log(ball13.x);
 // console.log(ball14.x);


  /*if(0<ball1.x && 0<ball1.y) // this is top right region
{
ball1
}
if(0<ball2.x && ball2.y<300) // this is bottom right region
{
ball2
}
if(ball3.x<300 && 0<ball3.y) // this is top left region
{
ball3
}
if(ball4.x<300 && ball4.y<300) // this is bottom left region
{
ball4
}*/

  drawSprites();
}
