noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://media.istockphoto.com/vectors/black-hipster-vector-mustache-vector-id485318064?k=20&m=485318064&s=612x612&w=0&h=rv_5ApmlcAXtnIZamfJAhWhuxJz2GqEf_3DVKntvG-Y=');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();  

video=createCapture(VIDEO);
video.size(300,300);
video.hide()

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log('posenet is initialized');
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30);
}

function take_snapshot(){
save('lenny.png');    
}

function gotPoses(results){
if (results.length>0) {
console.log(results);
noseX=results[0].pose.nose.x-15;
noseY=results[0].pose.nose.y-15;
console.log("nose x= "+ noseX);
console.log("nose y= "+ noseY);   
}    
}
