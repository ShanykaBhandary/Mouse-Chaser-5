const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world
//creating variable for the bars of the maze 
var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10,maze11,maze12,maze13,maze14,maze15,maze16,maze17,maze18,maze19,maze20
var maze21,maze22,maze23,maze24,maze25,maze26,maze27,maze28,maze29,maze30,maze31,maze32,maze33,maze34,maze35,mae36,maze37,maze38,maze39
var maze40,maze41,maze42,maze43,maze44,maze45,maze46,maze47,maze48,maze49,maze50,maze51,maze52,maze53

function preload(){
  //loading the images of cheese and mouse for the game
  mouseImg=loadImage("images/mouse.jpg")
  cheeseImg=loadImage("images/cheese.png")
}

function setup() {
  createCanvas(800,800);
  
  engine=Engine.create();
  world=engine.world;

  //creating mouse as a sprite
  mouse=createSprite(3,10,20,20)
  //giving the mouse its image (image is already loaded in the function preload)
  mouse.addImage(mouseImg)
  //scaling the size of the mouse to make it small in size
  mouse.scale=0.1
  //creating cheese as a sprite
  cheese=createSprite(794,794,20,20)
  //giving the cheese its image (image is already loaded in the function preload)
  cheese.addImage(cheeseImg)
  //scaling the size of the cheese to make it small in size
  cheese.scale=0.1
  //giving the cheese colour
  cheese.shapeColor=("yellow")

  //creating the bars of the maze and making them as sprites and giving them values
  maze1=createSprite(200, 200, 20, 200)
  maze1.shapeColor=("pink")

  maze2=createSprite(200, 200, 200, 20)
  maze2.shapeColor=("pink")

  maze3=createSprite(0, 99, 200, 20)
  maze3.shapeColor=("pink")

  maze4=createSprite(395, 304, 200, 20)
  maze4.shapeColor=("pink")

  maze5=createSprite(0, 304, 420, 20)
  maze5.shapeColor=("pink")

  maze6=createSprite(99, 209, 20, 100)
  maze6.shapeColor=("pink")

  maze7=createSprite(180, 28, 20, 70)
  maze7.shapeColor=("pink")

  maze8=createSprite(169, 395, 20, 60)
  maze8.shapeColor=("pink")

  maze9=createSprite(323, 51, 200, 20)
  maze9.shapeColor=("pink")

  maze10=createSprite(305, 396, 20, 90)
  maze10.shapeColor=("pink")

  maze11=createSprite(51, 312, 20, 200)
  maze11.shapeColor=("pink")

  maze12=createSprite(225, 396, 20, 120)
  maze12.shapeColor=("pink")

  maze13=createSprite(398, 240, 100, 20)
  maze13.shapeColor=("pink")

  maze14=createSprite(209, 144, 150, 20)
  maze14.shapeColor=("pink")

  maze15=createSprite(328, 60, 20, 200)
  maze15.shapeColor=("pink")

  maze16=createSprite(94, 0, 20, 100)
  maze16.shapeColor=("pink")

  maze17=createSprite(145, 355, 100, 20)
  maze17.shapeColor=("pink")

  maze18=createSprite(244, 230, 20, 100)
  maze18.shapeColor=("pink")

  maze19=createSprite(366, 57, 20, 100)
  maze19.shapeColor=("pink")

  maze20=createSprite(44, 142, 20, 100)
  maze20.shapeColor=("pink")

  maze21=createSprite(185, 248, 50, 20)
  maze21.shapeColor=("pink")

  maze22=createSprite(374, 227, 20, 100)
  maze22.shapeColor=("pink")

  maze23=createSprite(390,240,50,100)
  maze23.shapeColor=("pink")

  maze24=createSprite(345,450,100,20)
  maze24.shapeColor=("pink")

  maze25=createSprite(450,400,20,190)
  maze25.shapeColor=("pink")

  maze26=createSprite(455,0,20,260)
  maze26.shapeColor=("pink")

  maze27=createSprite(500,300,20,100)
  maze27.shapeColor=("pink")

  maze28=createSprite(475,120,100,20)
  maze28.shapeColor=("pink")

  maze29=createSprite(4,450,200,20)
  maze29.shapeColor=("pink")

  maze30=createSprite(460,400,200,20)
  maze30.shapeColor=("pink")

  maze31=createSprite(450,500,100,20)
  maze31.shapeColor=("pink")

  maze32=createSprite(722,0,20,150)
  maze32.shapeColor=("pink")

  maze33=createSprite(567,55,150,20)
  maze33.shapeColor=("pink")

  maze34=createSprite(580,0,20,250)
  maze34.shapeColor=("pink")

  maze35=createSprite(794,120,250,20)
  maze35.shapeColor=("pink")

  maze36=createSprite(548,190,200,20)
  maze36.shapeColor=("pink")

  maze37=createSprite(620,300,20,200)
  maze37.shapeColor=("pink")

  maze38=createSprite(628,280,150,20)
  maze38.shapeColor=("pink")

  maze39=createSprite(745,202,20,150)
  maze39.shapeColor=("pink")

  maze40=createSprite(784,470,300,20)
  maze40.shapeColor=("pink")

  maze41=createSprite(700,484,20,300)
  maze41.shapeColor=("pink")

  maze42=createSprite(786,550,400,20)
  maze42.shapeColor=("pink")

  maze43=createSprite(40,608,20,200)
  maze43.shapeColor=("pink")

  maze44=createSprite(786,550,400,20)
  maze44.shapeColor=("pink")

  maze45=createSprite(4,620,400,20)
  maze45.shapeColor=("pink")

  maze46=createSprite(100,490,20,100)
  maze46.shapeColor=("pink")

  maze47=createSprite(160,540,20,150)
  maze47.shapeColor=("pink")

  maze48=createSprite(232,530,150,20)
  maze48.shapeColor=("pink")

  maze49=createSprite(260,560,20,150)
  maze49.shapeColor=("pink")

  maze50=createSprite(698,792,20,200)
  maze50.shapeColor=("pink")

  maze51=createSprite(452,600,20,200)
  maze51.shapeColor=("pink")

  maze52=createSprite(325,630,150,20)
  maze52.shapeColor=("pink")

  maze53=createSprite(540,680,200,20)
  maze53.shapeColor=("pink")
  
}

function draw() {
  background("black");
  

//to the display the mazes we have made on the output screen
  maze1.display();
  maze2.display();  
  maze3.display();
  maze4.display();
  maze5.display();
  maze6.display();
  maze7.display();
  maze8.display();
  maze9.display();
  maze11.display();
  maze12.display();
  maze13.display();
  maze14.display();
  maze15.display();
  maze16.display();
  maze17.display();
  maze18.display();
  maze19.display();
  maze20.display();
  maze21.display();
  maze22.display();
  maze23.display();
  maze24.display();
  maze25.display();
  maze26.display();
  maze27.display();
  maze28.display();
  maze29.display();
  maze30.display();
  maze31.display();
  maze32.display();
  maze33.display();
  maze34.display();
  maze35.display();
  maze36.display();
  maze37.display();
  maze38.display();
  maze39.display();
  maze40.display();
  maze41.display();
  maze42.display();
  maze43.display();
  maze44.display();
  maze45.display();
  maze46.display();
  maze47.display();
  maze48.display();
  maze49.display();
  maze50.display();
  maze51.display();
  maze52.display();
  maze53.display();

  //making the mouse move using the up arrow key, down arrow key,right arrow key and left arrow key
  if(keyDown(UP_ARROW)){
    mouse.velocityX=0
    mouse.velocityY=-5
  }
  if(keyDown(DOWN_ARROW)){
    mouse.velocityX=0
    mouse.velocityY=5
  }
  if(keyDown(RIGHT_ARROW)){
    mouse.velocityX=5
    mouse.velocityY=0
  }
  if(keyDown(LEFT_ARROW)){
    mouse.velocityX=-5
    mouse.velocityY=0
  }
  
  //making mouse bounce of the different parts of the maze to make it continue to move
edges=createEdgeSprites();
mouse.bounceOff(edges);
mouse.bounceOff(maze1)
mouse.bounceOff(maze2)
mouse.bounceOff(maze3)
mouse.bounceOff(maze4)
mouse.bounceOff(maze5)
mouse.bounceOff(maze6)
mouse.bounceOff(maze7)
mouse.bounceOff(maze8)
mouse.bounceOff(maze9)
mouse.bounceOff(maze10)
mouse.bounceOff(maze11)
mouse.bounceOff(maze12)
mouse.bounceOff(maze13)
mouse.bounceOff(maze14)
mouse.bounceOff(maze15)
mouse.bounceOff(maze16)
mouse.bounceOff(maze17)
mouse.bounceOff(maze18)
mouse.bounceOff(maze19)
mouse.bounceOff(maze20)
mouse.bounceOff(maze21)
mouse.bounceOff(maze22)
mouse.bounceOff(maze23)
mouse.bounceOff(maze24)
mouse.bounceOff(maze25)
mouse.bounceOff(maze26)
mouse.bounceOff(maze27)
mouse.bounceOff(maze28)
mouse.bounceOff(maze29)
mouse.bounceOff(maze30)
mouse.bounceOff(maze31)
mouse.bounceOff(maze32)
mouse.bounceOff(maze33)
mouse.bounceOff(maze34)
mouse.bounceOff(maze35)
mouse.bounceOff(maze36)
mouse.bounceOff(maze37)
mouse.bounceOff(maze38)
mouse.bounceOff(maze39)
mouse.bounceOff(maze40)
mouse.bounceOff(maze41)
mouse.bounceOff(maze42)
mouse.bounceOff(maze43)
mouse.bounceOff(maze44)
mouse.bounceOff(maze45)
mouse.bounceOff(maze46)
mouse.bounceOff(maze47)
mouse.bounceOff(maze48)
mouse.bounceOff(maze49)
mouse.bounceOff(maze50)
mouse.bounceOff(maze51)
mouse.bounceOff(maze52)
mouse.bounceOff(maze53)
//making mouse collide with the cheese, so on reaching the maze it should not move so we usecollide and not bounceOff
mouse.collide(cheese)

  drawSprites();
}