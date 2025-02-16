let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");


//for showing last of winner
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0=true; //player0, playerX

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked")
        
      if(turn0){  //playerO
        box.innerText="O";
        turn0=false;
      }
      else{   //playerX
        box.innerText="X";
        turn0=true;
      }
        
      //dont click again and again
      box.disabled=true;

      //function calling
      checkWinner();
    }); 
});

//function definition
const checkWinner=()=> {
    for (let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val===pos2Val && pos2Val===pos3Val ){
               
                //function calling for show winner
                showWinner(pos1Val);
            }
        }
    }
};
          

        //function definition foor show winner
          const showWinner=(winner) =>{
            msg.innerText=`congratulation,Winner is ${winner}`;
            msgContainer.classList.remove("hide");
            

            //for one winner then  disabled all buttons
            disableBoxes();
          }
      
          const disableBoxes=()=>{
            for(let box of boxes){
                box.disabled=true;
            }
          }


    //for new game start and reset then i build a new function
      const resetGame =()=>{
        turnO=true;

        enableBoxes();

        msgContainer.classList.add("hide");
      }


      const enableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
      }




      newGameBtn.addEventListener("click",resetGame);
      reset.addEventListener("click",resetGame);
      