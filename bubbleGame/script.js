var clutter = "";
var timer = 60;
var hitNumber = 0;
var score = 0;

function makeBubble(){
    for(let i=1;i<=160;i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
        document.querySelector('.pnlbottom').innerHTML = clutter;
    }
}

function inceraseScore(){
    score += 10;
    document.querySelector('#score').textContent = score;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerval').textContent = timer;
        }else{
            clearInterval(timerInt);
            document.querySelector('.pnlbottom').innerHTML = `<h2></h2><h2>Your score is ${score}</h2>`;        
        }
    },1000)
}

function getNewHit(){
    hitNumber = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitNumber;
}

document.querySelector('.pnlbottom').addEventListener('click',function(details){
    var clicked = Number(details.target.textContent);
    if(hitNumber == clicked){
        inceraseScore();
        clutter = "";
        document.querySelector('.pnlbottom').innerHTML = "";
        makeBubble();
        getNewHit();
    }
});

makeBubble();
runTimer();
getNewHit();