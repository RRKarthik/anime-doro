const para = document.getElementById("timer");
const reset = document.getElementById("reset");
const audio = new Audio("sounds/Sparkle - Your Name.mp3");
const work = document.getElementById("work");
const rest = document.getElementById("break");
let mFlag = 1;
let bFlag = 1;
let mainT;
let breakT; 
let flag = 1;
let message;
let counter = 1 * 60;
let section = 1;
function timer()
{
    if(counter == "0")
    {

        para.textContent = "00:00";
        if(flag == 1)
        {
            flag = 0;
        audio.play();
        audio.loop = false;
        function after()
        {
            audio.pause();
        }
        if(confirm(message))
        {
            after();
        }else{
            after();
        }
    }
       return; 
    }
   let minutes = Math.floor(counter/60);
   let seconds = counter % 60;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;
   para.textContent = `${minutes}:${seconds}`;
   counter--;

}

function mainSetter()
{
 if(mFlag == 1)
 {
     flag = 1;
     section = 1;
     message = "Go watch some anime";
  clearInterval(breakT);
  counter = 1 * 60;
  mainT = setInterval(timer,1000);
  mFlag = 0;
  bFlag = 1;
 }
}

function breakSetter()
{  if(bFlag == 1)
    {
        flag = 1;
        section = 0;
        message = "Senpai wants you to get  back to work";
    clearInterval(mainT);
    counter = 2 * 60;
    breakT = setInterval(timer,1000);
    bFlag = 0;
    mFlag = 1;
    }
}

function resetter()
{
    if(section == 1){
        counter = 1 * 60;
    }else{
        counter = 2 * 60;
    }
}

work.addEventListener("click",mainSetter);
rest.addEventListener("click",breakSetter);
reset.addEventListener("click",resetter);
