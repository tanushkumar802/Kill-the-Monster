

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

}

function draw() {
  background(0);
  function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});}
}

