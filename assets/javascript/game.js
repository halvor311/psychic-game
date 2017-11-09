var wins = 0
var losses = 0
var guesses = 5
var computerLetter = randomLetter()
var winDiv = document.getElementById("wins");
var lossDiv = document.getElementById("losses");
var guessesLeftDiv = guesses--;
var guessesSoFar = guesses;



document.onkeyup = function(event) {
	var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letterGuess);
    checkLetter(letterGuess);
  
    
}


function randomLetter(){
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    console.log(letter);
    var alert = ("Guess which of these letters I'm thinking of")
    
    return letter;
}



//     Computer picks a random letter
    
// Computer tells user to guess the letter picked and that the user has 
// five guesses

// User types a letter
// If letter is correct give a win

// If letter is incorrect computer removes a guess and user sees that they have
// one guess less to win.
// If user does not guess the correct letter after 5 guesses computer logs a
// loss and chooses a new letter.

function checkLetter(userGuess){
    
    if (userGuess===computerLetter){
        alert("YES!!!")
        wins++ 
        winDiv.innerHTML = wins;
        computerLetter = randomLetter();
        guesses= 5
        
        //Other stuff that happens when person wins
          
    }
    else{
        alert("guesses left: " + guesses--)
        //This runs when the user guesses wrong
       
    if (guesses<0){
        alert("Oops, try again!")
        losses++
    randomLetter()
    }
        lossDiv.innerHTML = losses;
        letter
    }
}
function guessesLeft(){
    if (checkLetter===randomLetter){
        guesses===5
        wins++
    }
  
    else{
     guessesLeftDiv = guesses--   
    }
    console.log(guessesLeft)
}
function guessesMade(userGuess){
return (userGuess)
}


