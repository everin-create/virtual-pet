//Create variables here
var dog,hdog,dogimg,hdogimg
var database
var foods,foodsk
function preload()
{
  //load images here
  dogimg =loadImage('dog.png');
  hdogimg =loadImage('happydog.png');
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500, 500);
  dog=createSprite(250,350)
  dog.addImage(dogimg)
  var foodsk = database.ref('Food');
  foodsk.on("value", readStock);
}
  


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    dog.addImage(hdogimg)
  }
  drawSprites();
  textSize(20)
  fill('white')
  text("Stock:"+foods,200,250)
  //add styles here

}
function readStock(data){
  foods=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}



