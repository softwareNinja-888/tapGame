// "use strict";



function Game(){

    const angel = document.querySelector(".angel")
    const angelScore = document.querySelector(".Anscore")
    const devilScore = document.querySelector(".Descore")
    
    const timer = ()=>{}

    const counter = ()=>{
        angel.addEventListener("click",()=>{
            angelScore.innerHTML = Number(angelScore.innerHTML) + 1150
        })
    }
    // counter();

    const displayWinner = ()=>{}
}

Game();