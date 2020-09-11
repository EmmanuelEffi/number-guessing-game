//generate a random number between 0 and 100
let randomGuess = Math.floor(Math.random() * 101);

//this variable is a reference to the list of user guesses displayed
const guessList = document.querySelector('.guessList');

//this variable is a reference to the result HTML class
const result = document.querySelector(".result");

//this variable is a reference to the guess guider class lowOrHigh
let lowOrHigh = document.querySelector('.lowOrHigh');

//this variable is a reference to the user guess input field with id userGuess
const userGuess = document.querySelector("#userGuess");

//this variable is a reference to the submit button
const submit = document.querySelector("#submit");

//this variable is a reference to the restart button
const restartBtn = document.querySelector("#restart");

//this variable keeps count of the number of guesses made by the user
let guessCount = 1;

//on click listeners for the submit and restart button
submit.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', restartGame);


//function: checks the user input for matches to the random number generated
function checkGuess() {

    //converting the user guess to number format for comparison
    let userTry = Number(userGuess.value);


    //check to see if this is the user's first guess
    //if true, appends the previous guesses paragraph,

    /*else if the user has used up all guesses, tells the 
    user and calls the endGame function(ln 89)*/

    /*else if the two conditions are not met, tells the
    user to guess again while providing a guider if guess is too low or high*/

    if (guessCount === 1) {
        guessList.textContent = "Previous guesses: ";
    }

    guessList.textContent += userTry + " ";

    if (userTry == randomGuess) {

        result.textContent = "Congratulations! You Won!";
        result.style.backgroundColor = "green";
        result.style.display = "block";
        lowOrHigh.textContent = "";

        endGame();

    } else if (guessCount == 10) {

        result.textContent = "You've reached the maximum tries! Game Over.";
        result.style.backgroundColor = "red";
        result.style.display = "block";
        endGame();

    } else {

        result.textContent = "Incorrect! Try Again";
        result.style.backgroundColor = "red";
        result.style.display = "block";

        if (userTry < randomGuess) {
            lowOrHigh.textContent = "Too Low";
        } else if (userTry > randomGuess) {
            lowOrHigh.textContent = "Too High"
        }

    }

    guessCount++;
    userGuess.value = "";
    userGuess.focus();
}


//function: disables the guess input, the button and activates the restart button 
function endGame() {
    restartBtn.style.display = "block";

    userGuess.disabled = true;

    submit.disabled = true;
}


//function: resets all fields - restarts the game
function restartGame() {
    guessCount = 1;

    restartBtn.style.display = "none";

    userGuess.disabled = false;

    submit.disabled = false;

    lowOrHigh.textContent = "";

    guessList.textContent = "Previous guesses: ";

    result.textContent = "";

    result.style.display = "none";

    randomGuess = Math.floor(Math.random() * 101);
}