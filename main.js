var css = 'body {animation-name:test; animation-duration:4s; animation-iteration-count:infinite; } @keyframes test{ 0%{color:#ff0000} 20%{color:#00ff00} 40%{color:#ffff00} 60%{color:#0000ff} 80%{color:#00ffff} 100%{color:#ff0000}', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.type = 'text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style);
nosex = 0;
nosey= 0;

function preload(){
  clown_nose = loadImage('m.png');
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);


}
function modelLoaded(){
console.log('poseNet is initialized')


}
function draw(){
image(video,0,0,300,300);
image(clown_nose,nosex,nosey,30,30)

}
function takesnapshot(){

    save("myFilterIMAGE.png")
}
function gotPoses(results){
if(results.length>0){
   nosex = results[0].pose.nose.x -15;
   nosey = results[0].pose.nose.y -5;
    console.log(results);
    console.log("nosex = "+ results[0].pose.nose.x);
    console.log("nosey = "+ results[0].pose.nose.y);
}

}