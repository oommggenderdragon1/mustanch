var css = 'body {animation-name:test; animation-duration:4s; animation-iteration-count:infinite; } @keyframes test{ 0%{color:#ff0000} 20%{color:#00ff00} 40%{color:#ffff00} 60%{color:#0000ff} 80%{color:#00ffff} 100%{color:#ff0000}', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.type = 'text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style);
function preload(){
//nothing

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


}
function takesnapshot(){

    save("myFilterIMAGE.png")
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    console.log("nose x = "+ results[0].pose.nose.x);
    console.log("nose y = "+ results[0].pose.nose.y);
}

}