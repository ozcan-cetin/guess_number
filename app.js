/*VARIABLES */
let start = document.getElementById("start")
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const result = document.querySelector(".result")
const right = document.querySelector(".right")
const number = document.querySelector(".number")
const Restart = document.querySelector(".new")
const errorCheck = document.querySelector(".errorCheck")

/*FUNCTION SECTION*/
window.addEventListener("load", newGame())

function newGame (){
    let first = 1;
    let last = 100;
    start.innerHTML = `Enter a number between ${first}-${last}`
    Restart.style.display = "none"
    check.style.display = "inline-block"
    guess.value = "";
    result.innerHTML = "";
    const randomNum = Math.floor(Math.random() * 100 + 1);
    let rights = "❤❤❤❤❤❤❤";
    right.innerHTML = rights;
    console.log(randomNum);

    check.addEventListener("click", game);
    guess.addEventListener("keydown", (e)=>{
        if(e.code=="Enter"){
            game()
        }
    })

    function game(){
        if (guess.value){
            errorCheck.style.display = "none";
            if(guess.value < 1 || guess.value > 100){
                alert("Please enter a valid number" )
            }
            else{
                if (rights.length > 0){
                    
                    if (randomNum == guess.value){
                        result.innerHTML = `Congratulations! You made it in ${7-rights.length} tries.`
                        check.style.display = "none"
                        Restart.style.display = "inline-block"
                        Restart.addEventListener("click", ()=>{
                            newGame()
                        })
                    }
        
                    else if (randomNum > guess.value){
                        result.innerHTML = `You must increase`
                        first = guess.value;
                        start.innerHTML = `Enter a number between ${first}-${last}`
                        Restart.style.display = "none"
                        check.style.display = "inline-block"
                    }
                    else if (randomNum < guess.value){
                        result.innerHTML = `You must decrease`
                        last = guess.value;
                        start.innerHTML = `Enter a number between ${first}-${last}`
                        Restart.style.display = "none"
                        check.style.display = "inline-block"
                    }
                    rights = rights.slice(1)
                    right.innerHTML = `${rights}`
                }
                if (rights.length == 0 && randomNum == guess.value){
                    result.innerHTML = `Congratulations! You made it in ${7-rights.length} tries.`
                    check.style.display = "none"
                    Restart.style.display = "inline-block"
                    Restart.addEventListener("click", ()=>{
                        newGame()
                    })
                }
                else if (rights.length == 0){
                    result.innerHTML = `Your rights ended. My number was ${randomNum}`
                    check.style.display = "none"
                    Restart.style.display = "inline-block";
                    Restart.addEventListener("click", ()=>{
                        newGame()
                    })
                } 
            }
            
        }
        else{
            errorCheck.style.display = "block";
            errorCheck.innerHTML = "Please enter a number"
        }
    }
}