status="";  
function preload(){
    img=loadImage("wardrobe.jpg");
}
function setup() {
    canvas = createCanvas(540, 320);
    canvas.center();
    object_detector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    object_detector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
function back(){
    window.location="index.html"
}