
let gameSeq=[];
let  userSeq=[];

let btns=["aqua","red","green","yellow"];

let started=false;
let level = 0;
let h3=document.querySelector("h3");

document.addEventListener("keypress" ,function(){
    if(started==false){
        console.log("game started");
        started=true;
        
        levelup();
    }
});

function gameflash(btn){
  btn.classList.add("flash");
  setTimeout(function (){
    btn.classList.remove("flash");
  },200);
}
function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function (){
    btn.classList.remove("userflash");
  },200);
}

function levelup(){
    userSeq = [];
    level++;
    h3.innerText=`Level ${level}`;


    //random butto flash
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
  
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
}


let allBtns=document.querySelectorAll(".button");
for(btn of allBtns){
  btn.addEventListener("click",btnPress);
}

function btnPress() {
  let btn=this;
  userflash(btn);

  userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  
  checkAns(userSeq.length-1);
}

function checkAns(idx){
  

  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelup,1000);
    }
  }else{
    h3.innerHTML=`Game over!Your score was <b>${level}</b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150)
    resetTo();
  }
}

function resetTo(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}