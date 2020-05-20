var ball;
var database,position;
var loc;

function setup(){
    createCanvas(500,500);
    ball = createSprite(100,20,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    loc = database.ref("ball/position"); 

    loc.on("value",readloc,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeloc(-1,0);
        console.log("left");
    }
    else if(keyDown(RIGHT_ARROW)){
        writeloc(1,0);
        console.log("right");
    }
    else if(keyDown(UP_ARROW)){
        writeloc(0,-1);
        console.log("up");
    }
    else if(keyDown(DOWN_ARROW)){
        writeloc(0,+1);
        console.log("down");
    }
    drawSprites();
}

/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}*/

function readloc(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.x;
}

function showerror(){
console.log("error!");
}

function writeloc(x,y){
    database.ref("ball/position").set({

        x : position.x + x ,
        y : position.y + y


    });
}