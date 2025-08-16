let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame=document.querySelector("#new");
let msg=document.querySelector(".msg");
let winmsg=document.querySelector("#win");

let turnO=true;

const winPatterns=[ [0,1,2], [0,3,6], [0,4,8], [1,4,7],
                    [2,5,8], [2,4,6], [3,4,5], [6,7,8] ];

                  

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("you clicked a box");
       if(turnO){
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled= true;
       checkWin();
    });
});
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msg.classList.add("hide");
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false ;
        box.innerText="";
    }
};

const disbleBoxes=()=>{
    for(let box of boxes){
        box.disabled=true ;
    }
}

const showWinner = (winner)=>{
    winmsg.innerText=`Congratulations, ${winner}  won!`;
    msg.classList.remove("hide");
    disbleBoxes();
}


const checkWin= ()=>{
    for(let pattern of winPatterns){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                console.log("winner", p1);
                showWinner(p1);
            }
        }

    }
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame); 


