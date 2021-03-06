const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg)
    }


    Engine.update(engine);

    text("time"+hour,width-300,40)


}

async function getTime(){
    var ask=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var response=await ask.json()
    var daytime= response.datetime
    console.log(daytime)
    var hour=daytime.slice(11,13)
    if(hour>=04&&hour<=06){
        bg="sunrise1.png"
    }
    else if(hour>=06&&hour<=08){
        bg="sunrise2.png"
    }
    else if(hour>=08&&hour<=10){
        bg="sunrise3.png"
    }
    else if(hour>=10&&hour<=12){
        bg="sunrise4.png"
    }
    else if(hour>=12&&hour<=14){
        bg="sunrise5.png"
    }
    else if(hour>=14&&hour<=16){
        bg="sunrise6.png"
    }
    else if(hour>=16&&hour<=18){
        bg="sunrise7.png"
    }
    else if(hour>=18&&hour<=20){
        bg="sunrise8.png"
    }
    else if(hour>=20&&hour<=22){
        bg="sunrise9.png"
    }
    else if(hour>=22&&hour<=00){
        bg="sunrise10.png"
    }
    else if(hour>=00&&hour<=02){
        bg="sunrise11.png"
    }
    else if(hour>=02&&hour<=04){
        bg="sunrise12.png"
    }
    backgroundImg=loadImage(bg)
}