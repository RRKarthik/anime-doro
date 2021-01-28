let mainTime = 1;
let breakTime = 2;
let flag = 1;
let myInt;
const para = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let mainCount = mainTime*60;
let breakCount = breakTime*60; 
function mainTimer()
{

   if(mainCount == "0"){
    para.textContent = `00:00`;
    breakTimer();
    mainCount = mainTime*60;
    return;
   }
    let minutes = Math.floor(mainCount/60);
    let seconds = mainCount % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    para.textContent = `${minutes}:${seconds}`;
    mainCount--; 

}

function breakTimer()
{  
   
    if(breakCount == "0")
   {
       para.textContent = "00:00";
       mainTimer();
       breakCount = breakTime*60;
       return;
   }

   let mins = Math.floor(breakCount/60);
   let secs = breakCount%60;
   mins = mins < 10 ? '0' + mins :mins; 
   secs = secs < 10 ? '0' + secs : secs;
   para.textContent = `${mins}:${secs}`;
   breakCount--;

}
function starter()
{
    if(flag == 1 )
    {
         myInt = setInterval(mainTimer,1000);
    }
    flag = 0;
}
function stopper()
{
   clearInterval(myInt);
   flag = 1;
}
function resetter()
{
    flag = 1;
    mainCount = mainTime*60;
    breakCount = breakTime*60; 
}
start.addEventListener("click",starter);
stop.addEventListener("click",stopper);
reset.addEventListener("click",resetter);