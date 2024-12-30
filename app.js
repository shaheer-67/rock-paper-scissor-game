let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");



const gencompchoices = () =>{
  const option = ["rock", "paper", "scissors"];
   const ranidx = Math.floor(Math.random () * 3);
  return option [ranidx];

}

const drawgame = () =>{
  msg.innerText = "Game was draw"
}

const showwinner = (userwin)=>{
  if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = "YOU win!"

  }else{
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = "Computer Win!"

  };

};


 const playgame = (userchoice) =>{
  // generate computer choice
  const compchoice = gencompchoices();

  if(userchoice === compchoice) {
  // game draw 
  drawgame();

}else{
  let userwin = true;
  if(userchoice === "rock"){
    // scissor ,paper
    userwin = compchoice === "paper" ? false : true;

  }else if (userchoice === "paper"){
    // rock, scissor
    userwin = compchoice === "scissor" ? false : true;

  }else {
    // rock ,paper
    userwin = compchoice === "rock" ? false : true;

  }
  showwinner(userwin);
}

};


choices.forEach((choice)=>{
  choice.addEventListener("click", ()=>{
    const userchoice = choice.getAttribute("id");
playgame (userchoice);

  });

});