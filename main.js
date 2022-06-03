function preload(){
image_1=loadImage("Cat Wallpaper 24 (1).jpg");
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
}
function draw(){
image(image_1, 75, 75, 150, 100);
stroke(255, 0, 0);
fill(255, 0, 0);
circle(30, 30, 50);
circle(270, 30, 50);
circle(30, 270, 50);
circle(270, 270, 50);
stroke(0, 255, 0);
fill(0, 255, 0);
rect(250, 50, 30, 250);
rect(25, 50, 30, 250);
rect(25, 25, 250, 30);
rect(25, 275, 250, 30);
}
