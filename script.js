let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function submitGuess() {
  const guess = Number(document.getElementById('text-1').value);
  const message = document.getElementById('message');
  const attemptsDisplay = document.getElementById('attempts');
 


   if (guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    message.className = "wrong";
  } else if (guess < randomNumber) {
    message.textContent = '📉 Too low';
    message.style.color = 'red';
    message.className = "wrong";
     attempts++;
  } else if (guess > randomNumber) {
    message.textContent = '📈 Too high';
     message.style.color = 'green';
    message.className = "wrong";
     attempts++;
  } else {
    message.innerHTML = `🎉 <span class="correct">Correct! The number was ${randomNumber}.<br>You guessed it in ${attempts} attempts.</span>`;
    message.className = "correct";
    message.style.color = 'green';
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
}

  
 