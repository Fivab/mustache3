mX=0
mY=0

function preload() {
mustache='https://i.postimg.cc/MTzPt2sv/unnamed.png';
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, mX, mY, 30, 30);
}

function setup() {
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        mX=results[0].pose.nose.x;
        mY=results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function take_snapshot() {
    save('mustache.png');
}