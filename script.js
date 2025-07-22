let userScore = 0;
let compScore = 0;



const generateChoice = ()=>{
    let options = ["rock", "paper", "scissors"];
    let n= Math.floor(Math.random()*3);
    return options[n];
}

const drawGame = ()=>{
    console.log("draw game");
    document.querySelector("#msg").style.backgroundColor = "#0B0014";
    document.querySelector("#msg").innerText="Draw Game";
}

const showWinner = (userWin)=>{
    if(userWin=== true){
        userScore++;
        document.querySelector("#msg").style.backgroundColor = "green";
        document.querySelector("#msg").innerText="You Win";
    }
    else {compScore++;
        document.querySelector("#msg").style.backgroundColor = "red";
        document.querySelector("#msg").innerText="You Lose";
    }
    // console.log(userScore);
    // console.log(compScore);
    document.querySelector("#user").innerText = userScore;
    document.querySelector("#comp").innerText = compScore;
}

const playGame = (userChoice)=>{
    console.log(userChoice);
    //generate a computer choice
    let compChoice = generateChoice();
    console.log(compChoice);
    
    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice==="rock"){
            //paper scissors
            userWin = compChoice === "paper"? false : true ;
        }
        else if(userChoice==="paper"){
            //rock scissors
            userWin = compChoice === "scissors"? false : true ;
        }
        else if(userChoice==="scissors"){
            //rock paper
            userWin = compChoice === "rock"? false : true ;
        }
        
        showWinner(userWin);
    }
    
    
}

let choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute('id');
        // console.log("choice was clicked", userChoice);
    playGame(userChoice);
    });
    
});