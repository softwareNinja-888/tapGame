// "use strict";



function Game(){
    let size = 100;

    let value = true;

    const angel = document.querySelector(".angel")
    const angelScore = document.querySelector(".Anscore")
    const devilScore = document.querySelector(".Descore")
    const time = document.querySelector(".time")
    let timeVar = Number(time.textContent)
    
    const timer = (on)=>{
        if (on === true){

            value = false

            let sum = 10;

            let int = setInterval(()=>{
                sum--
                time.textContent = sum
                if (sum === 0 ){
                    clearInterval(int)
                    displayWinner(angelScore,devilScore)
                    reset() 
                }
            },1000)

           
        }
        else if (on === false) {
            return 0
        }
    }

    const counter = () => {
        angel.addEventListener("click",()=>{
            timer(value)
            angelScore.textContent = Number(angelScore.textContent) + 200
            size++
            angel.style.width  = size + "px";
        })
    }
    counter();

    const displayWinner = (a,d)=>{
        let Anum = Number(a.textContent)
        let Dnum = Number(d.textContent)

        if (Anum > Dnum) {
            alert("Angel Wins!!!")
        }else if (Dnum > Anum){
            alert("You failed")
        } else {
            alert("Draw")
        }
    }

    const reset = ()=>{
        angelScore.textContent = 0
        value = true
        time.textContent = 10
        size = 100
        angel.style.width  = 100 + "px";
    }
}

Game();