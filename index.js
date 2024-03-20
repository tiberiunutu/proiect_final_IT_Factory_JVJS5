const scissorsEl = document.getElementById("scissorsEl");
const stoneEl = document.getElementById("stoneEl");
const paperEl = document.getElementById("paperEl");

let totalCounter = document.getElementById("totalCounter");
let winsCounter = document.getElementById("winsCounter");
let lostCounter = document.getElementById("lostCounter");
let drawCounter = document.getElementById("drawCounter");
let btnReset = document.getElementById("btnReset");

let computerMove ="";

/* Mai sus am agatat elementele HTML, iar de aici incep sa lucrez pe ele! */

/*scissors */
scissorsEl.addEventListener("click", ()=> {
    let randomNumber = Math.random();

    if (randomNumber >=0 && randomNumber<2/10){
        computerMove = "scissors";
    } else if (randomNumber >= 2/10 && randomNumber<5/10)
     {  computerMove ="rock";} 
     else if (randomNumber>=5/10 && computerMove<10/10){
        computerMove = "paper"; };

if(computerMove ==="scissors"){
    alert("Tu ai ales scissors, computerul a ales scissors, deci e EGALITATE");
    drawCounter.innerHTML++;
    totalCounter.innerHTML++;
} else if (computerMove ==="rock"){
    
    alert ("Tu ai ales scissors, computerul a ales rock, AI PIERDUT!");
    lostCounter.innerHTML++;
    totalCounter.innerHTML++;
} else if (computerMove ==="paper"){
    
    alert("Tu ai ales scissors, computerul a ales paper, AI CASTIGAT");
    winsCounter.innerHTML++;
    totalCounter.innerHTML++;
};
});


/*stone */
stoneEl.addEventListener("click", ()=>{
    let randomNumber = Math.random();

    if (randomNumber >=0 && randomNumber<2/10){
        computerMove = "scissors";
    } else if (randomNumber >= 2/10 && randomNumber<5/10)
     {  computerMove ="rock";} 
     else if (randomNumber>=5/10 && computerMove<10/10){
        computerMove = "paper"; };

if(computerMove ==="scissors"){

    alert("Tu ai ales rock, computerul a ales scissors, deci AI CASTIGAT!");
    winsCounter.innerHTML++;
    totalCounter.innerHTML++;
} else if (computerMove ==="rock"){
    alert ("Tu ai ales rock, computerul a ales rock, EGALITATE!");
    drawCounter.innerHTML++;
    totalCounter.innerHTML++;
} else if (computerMove ==="paper"){
    alert("Tu ai ales rock, computerul a ales paper, AI PIERDUT");
    lostCounter.innerHTML++;
    totalCounter.innerHTML++;

};
})

/*paper */
paperEl.addEventListener("click", ()=>{
    
let randomNumber = Math.random();

    if (randomNumber >=0 && randomNumber<2/10){
        computerMove = "scissors";
    } else if (randomNumber >= 2/10 && randomNumber<5/10)
     {  computerMove ="rock";} 
     else if (randomNumber>=5/10 && computerMove<10/10){
        computerMove = "paper"; };

if(computerMove ==="scissors"){
    alert("Tu ai ales paper, computerul a ales scissors, deci AI PIERDUT!");
    lostCounter.innerHTML++;
    totalCounter.innerHTML++;
} else if (computerMove ==="rock"){
    alert ("Tu ai ales paper, computerul a ales rock, AI CASTIGAT!");
    winsCounter.innerHTML++;
    totalCounter.innerHTML++;
} else if (computerMove ==="paper"){
    alert("Tu ai ales paper, computerul a ales paper, EGALITATE");
    drawCounter.innerHTML++;
    totalCounter.innerHTML++;

};
});


/*buton Reset */
btnReset.addEventListener ("click", ()=>{
    alert("Ai apasat Reset! Jocul va reincepe de la 0 !");
    totalCounter.innerHTML = 0;
    winsCounter.innerHTML = 0;
    lostCounter.innerHTML = 0;
    drawCounter.innerHTML = 0;
});


