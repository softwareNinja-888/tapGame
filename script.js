// "use strict";



function Game(){
    let sum = 100;

    const angel = document.querySelector(".angel")
    const angelScore = document.querySelector(".Anscore")
    const devilScore = document.querySelector(".Descore")
    
    const timer = ()=>{}

    const counter = ()=>{

        angel.addEventListener("click",()=>{
            angelScore.innerHTML = Number(angelScore.innerHTML) + 200
            sum++
            angel.style.width  = sum + "px";
        })
    }
    counter();

    const displayWinner = ()=>{}
}

Game();