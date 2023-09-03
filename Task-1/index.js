const prompt = require("prompt-sync")();

while (true){

    let compChoice = Math.floor(Math.random() * 10) + 1
    let userChoice = prompt("Guess a number between 1 and 10:   ")


    if (userChoice.toLowerCase() == "exit"){
        console.log("Bye\n")
        break
    }
    if (compChoice == userChoice){
        console.log("You Won!\n\n")
    }
    else{
        console.log(`You lost! The correct answer is ${compChoice}\n\n`)
    }
}