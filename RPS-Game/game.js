let user=0;
let comp=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore = document.querySelector("#user");
const compScore = document.querySelector("#comp");


const genCompChoice=()=>{
    const options= ["rock","paper","scissors"];
    const op= Math.floor(Math.random()*3);
    return options[op];
}
const drawGame = (userChoice)=>{
    msg.innerText ="Its a Draw!";
    msg.style.backgroundColor = "#473198";

};

const showWinner= (userWin, userChoice,compChoice)=>{
    if(userWin){
        user++;
        userScore.innerText= user;
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        comp++;
        compScore.innerText= comp;
        msg.innerText =`You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#960200";

    }
};

const playGame=(userChoice)=>{
     const compChoice= genCompChoice();
      if(userChoice===compChoice){
        drawGame();
     }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice=== "paper" ? false:true;
        }
        else  if(userChoice==="paper"){
            userWin = compChoice=== "scissors" ? false:true;
        }
        else{
            userWin = compChoice=== "rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
     }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
     });
});