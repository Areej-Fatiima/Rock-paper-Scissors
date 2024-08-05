let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");

const comScorePara=document.querySelector("#computer-score");


const genCompchoice= ()=>{
    const options=["rock","paper","scissors"];
    const randomid=Math.floor(Math.random()*3);
    return options[randomid];
}

const drawGame=()=>{
   // console.log("Game was draw!");
    msg.innerText="Game draw,Play again!";
    msg.style.backgroundColor = "#031f38";
   
}
const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
   // console.log("you win");
    msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        comScorePara.innerText=compScore;
       // console.log("you lose!");
        msg.innerText=`You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }

}
const playGame=(userchoice) =>{
    console.log("userchoice=", userchoice);
    const compchoice= genCompchoice();
    console.log("computerchoice=", compchoice);
    
    if(userchoice==compchoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){

            userWin=compchoice==="paper"? false :true;
        }
        else if(userchoice==="paper")
        {
          userWin=compchoice==="scissors"?false :true;
        }
        else{
            userWin= compchoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }


}
//user choice:
choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
       // console.log("choice was clicked!",userchoice);
        playGame(userchoice);
    });
});
