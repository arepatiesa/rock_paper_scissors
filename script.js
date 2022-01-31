

const playerCards = Array.from(document.querySelectorAll(`div[data-icon="cards-player"]`));

function computerPlay(){

    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1); //generamos un numero aleatorio y lo asignamos a una variable

    switch(randomNumber) { //creamos diversos casos que dependiendo de 3 casos da 3 resulstados diferentes

        case 1: return "Water";
        break;

        case 2: return  "Fire";
        break;

        case 3: return  "Snow";
        break;

    }

}

const name = prompt("Welcome to Tournament of Elements! \n \n Rules:\n Fire beats Snow \n Snow beats Water \n Water beats Fire \n \n What's your name?")

const playerName = document.getElementById("player-name"); 

playerName.innerText = name;

let playerScore = 0;
let computerScore = 0;
const skeletonHurt = document.getElementById("skeleton-hurt")
const oof = document.getElementById("oof")
const bruh = document.getElementById("bruh");
const button = document.querySelector("button")


button.addEventListener("click", () => {window.location.reload(true)})

    playerCards.forEach(element => element.addEventListener("click", () => {

        const playerSelection = element.id;

        const computerSelection = computerPlay();
        

        const bannerText = document.getElementById("banner-text");

        const eFire = document.getElementById("eFire")

        const eWater = document.getElementById("eWater")

        const eSnow = document.getElementById("eSnow")


        
        switch(computerSelection){//highlights the enemy selection
            case "Water": eWater.classList.add("eWater")
            eFire.classList.remove("eFire")
            eSnow.classList.remove("eSnow");
            break;
            case "Fire": eFire.classList.add("eFire")
            eWater.classList.remove("eWater")
            eSnow.classList.remove("eSnow");
            break;
            case "Snow": eSnow.classList.add("eSnow")
            eFire.classList.remove("eFire")
            eWater.classList.remove("eWater");
            break;
        }


        switch(playerSelection){//highlights the player selection
            case "Water": pWater.classList.add("pWater")
            pFire.classList.remove("pFire")
            pWater.classList.remove("pSnow");
            break;
            case "Fire": pFire.classList.add("pFire")
            pWater.classList.remove("pWater")
            pSnow.classList.remove("pSnow");
            break;
            case "Snow": pSnow.classList.add("pSnow")
            pFire.classList.remove("pFire")
            pWater.classList.remove("pWater");
            break;
        }


if(playerScore != 5 && computerScore != 5){

    //you won
        if((playerSelection == "Water" && computerSelection == "Fire") || (playerSelection == "Snow" && computerSelection == "Water") || (playerSelection == "Fire" && computerSelection == "Snow"))
        {     

            const ebar = document.getElementById("ebar");

            ebar.remove()

            playerScore = playerScore + 1;    

            bannerText.innerHTML = `${playerSelection} beats <strong>${computerSelection}</strong>` // ${playerScore} - <strong>${computerScore}</strong>
            
            skeletonHurt.currentTime = 0;
            skeletonHurt.play()
        }
    //you lost
        else if((playerSelection == "Fire" && computerSelection == "Water") || (playerSelection == "Water" && computerSelection == "Snow") || (playerSelection == "Snow" && computerSelection == "Fire"))
        {      
            
            const pbar = document.getElementById("pbar");

            pbar.remove()
            
            computerScore = computerScore + 1;    

            bannerText.innerHTML = `<strong>${computerSelection}</strong> beats ${playerSelection}` // ${playerScore} - <strong>${computerScore}</strong>`;

            oof.currentTime = 0;
            oof.play()

        }
    //its a tie
        else if(playerSelection == computerSelection)
        {
    
            bannerText.innerHTML = `It's a tie` // ${playerScore} - <strong>${computerScore}</strong>`

            bruh.currentTime = 0;
            bruh.play()

        }
    }


    const victory = document.getElementById("victory")
    const fail = document.getElementById("fail")


if(computerScore == 5){

        bannerText.innerHTML = `<strong>You Lose</strong>`
        eSnow.classList.remove("eSnow")
        eFire.classList.remove("eFire")
        eWater.classList.remove("eWater");
        pSnow.classList.remove("pSnow")
        pFire.classList.remove("pFire")
        pWater.classList.remove("pWater");
        fail.play()
        pbar.remove()

    }
else if (playerScore == 5){

        bannerText.innerHTML = `You Win`
        eSnow.classList.remove("eSnow")
        eFire.classList.remove("eFire")
        eWater.classList.remove("eWater");
        pSnow.classList.remove("pSnow")
        pFire.classList.remove("pFire")
        pWater.classList.remove("pWater");
        victory.play()
        ebar.remove()
    }

    }


))



/*
do{

}while(playerScore !== 5 && computerScore !== 5);

    if(computerScore == 5){
        bannerText.innerHTML = `<strong>You Lost</strong>`
    }
    else if (playerScore == 5){
        bannerText.innerHTML = `You Won`
    }

function playAround(playerSelection, computerSelection)
{
    
    if((playerSelection == "fire" && computerSelection == "water") || (playerSelection == "water" && computerSelection == "snow") || (playerSelection == "snow" && computerSelection == "fire"))
    {     
        playerScore = playerScore + 1;    
        return `You win! ${playerSelection} beats ${computerSelection} // P: ${playerScore} C: ${computerScore}`;  
    }

    else if((playerSelection == "water" && computerSelection == "fire") || (playerSelection == "snow" && computerSelection == "water") || (playerSelection == "fire" && computerSelection == "snow"))
    {      
        computerScore = computerScore + 1;    
        return `You lose! ${computerSelection} beats ${playerSelection} // P: ${playerScore} C: ${computerScore}`;      
    }

    else if(playerSelection == computerSelection)
    {

        return "It's a tie";
    }

}


function game()
{

do {
                
    const playerSelection = prompt("Welcome to water, fire, snow! \n \n Write down one of those three so you can challenge the computer!! \n \n You win if you get 5 points. Good Luck!");
    const computerSelection = computerPlay();
    console.log(playAround(playerSelection, computerSelection));

}while(playerScore !== 5 && computerScore !== 5);

if(computerScore == 5){
    console.log("You lost against the computer.");
}
else if (playerScore == 5){
    console.log("Congratulations, you've beaten the computer!!");
}

}
*/