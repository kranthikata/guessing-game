let userInput = document.getElementById('inputBox');
let gameResult = document.getElementById('gameResult');
let randomNumber = Math.random() * 100;
let originalNumber = Math.ceil(randomNumber);
console.log(originalNumber);

function checkNumber(){
    let guessedNumber = userInput.value;
    if(guessedNumber == ""){
        gameResult.textContent = "Please enter any number."
        gameResult.style.color = "black";
    }
    else if(guessedNumber > originalNumber){
        gameResult.textContent = "Too high try another bro!!";
        gameResult.style.color = "red";
    }
    else if(guessedNumber < originalNumber){
        gameResult.textContent = "Too low try another bro!!";
        gameResult.style.color = "red";
    }
    else{
        gameResult.textContent = "Eyww!! Correct. You made it bro!!";
        gameResult.style.color = "green";
    }
    userInput.value="";
}








