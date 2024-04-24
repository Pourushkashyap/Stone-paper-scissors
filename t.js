let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")




const gencompchoice = () => {
   const options = ["rock" , "paper" , "scissors"]; 
    const ranidx = Math.floor(Math.random() *3 );
     return options[ranidx];
}

   const drawgame = () =>{
   
    msg.innerText = "Game was Draw.Play again"
    msg.style.backgroundColor = "#081b31"
   }


const showwinner = (userwinner,userchoice,compchoice) =>{
    if(userwinner) {
        userscore++;
        userscorepara.innerText = userscore;
       msg.innerText = `you win! ${userchoice} beats ${compchoice}`
       msg.style.backgroundColor = "green"
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        
        msg.innerText = `you lost. ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor = "red"
    }
}


const playgame = (userchoice) =>{

  const compchoice = gencompchoice();
  console.log("comp choice = " , compchoice);
 
     if(userchoice === compchoice){
        drawgame();
     }
     else{
        let userwin = true;
        if(userchoice === "rock"){
           userwin =  compchoice === "paper" ? false: true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
     }


}


choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id")
    
     playgame(userchoice);
    })
})