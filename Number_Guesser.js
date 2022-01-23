// UI Elements
const message = document.querySelector('.message'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      game = document.querySelector('#game'),
      maxNum = document.querySelector('.max-num'),
      minNum = document.querySelector('.min-num');

// Game Values
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// Assign UI min and Max 
      minNum.textContent = min; 
      maxNum.textContent = max; 

//Play again event listener 
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    //window.location.reload(); -> this function is removed by codePen
  }
});

 
// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  //Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  }
  
  //Check if Won 
  if(guess === winningNum){
    gameOver(true, `You WON!!! ${winningNum} is correct!`);
    
  }else{
    // Wrong number
    guessesLeft -= 1;
    
    if(guessesLeft === 0){
      // Game Over - Lost
      
      // Disable input
       gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
  } else {
    // Game Continues - answer wrong 
    
    // Change border color 
    guessInput.style.borderColor = 'red';
    
    //Clear Input 
    guessInput.value = '';
    
    //Tell User it's the wrong number 
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
    }
  }
});

// Game over 
function gameOver(won, msg){
  let color; 
  won === true ? color = 'green' : color = 'red';
  
    // Disable input
    guessInput.disabled = true;  
    //Change border color 
    guessInput.style.borderColor = color; 
    //Set text color
    message.style.color = color;
    //set message
    setMessage(msg)
  
  //Play Again? 
  guessBtn.value = 'Play Again'; 
  guessBtn.className += 'play-again'; 
}

//set Message 
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg; 
}
      
//Get Winning Number 
function getRandomNum(min, max){
  return(Math.floor(Math.random() * (max-min+1)+min));
}




