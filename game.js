
  let remaining = 100;
  let time = 30;
  let timerId;

  const scoreDisplay = document.getElementById('score');
  const timerDisplay = document.getElementById('timer');
  const gameArea = document.getElementById('gameArea');
  const overlay = document.getElementById('overlay');
  const finalMessage = document.getElementById('finalMessage');
  const restartBtn = document.getElementById('restartBtn');

  // Create 100 buttons
  function createButtons() {
    gameArea.innerHTML = "";
    for (let i = 1; i <= 100; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = "gameButton";

      // random position
      const maxX = gameArea.clientWidth - 60;
      const maxY = gameArea.clientHeight - 40;
      btn.style.left = Math.random() * maxX + "px";
      btn.style.top = Math.random() * maxY + "px";

      btn.addEventListener("click",function (){
        btn.remove();
        remaining--;
        scoreDisplay.textContent = "Remaining: " + remaining;
        if (remaining === 0) {
          endGame(true);
        }
      });

      gameArea.appendChild(btn);
    }
  }

  // Start timer
  function startTimer() {
    timerId = setInterval(() => {
      time--;
      timerDisplay.textContent = "Time: " + time + "s";
      if (time <= 0) {
        endGame(false);
      }
    }, 1000);
  }

  // End game
  function endGame(won) {
    clearInterval(timerId);
    overlay.style.display = "flex";
    if (won) {
      finalMessage.textContent = " You win ! , All buttons have been cleared ";
    } else {
      finalMessage.textContent = " Time's up! You Missed " + remaining + " buttons.";
    }
  }

  // Restart game
  function restartGame() {
    remaining = 100;
    time = 30;
    scoreDisplay.textContent = "Remaining: 100";
    timerDisplay.textContent = "Time: 30s";
    overlay.style.display = "none";
    createButtons();
    startTimer();
  }

  var h1 = document.querySelector(".challenge");
  h1.addEventListener("click", function (){
    h1.innerHTML = "One Hundred Button Challenge";
  });


  restartBtn.addEventListener("click", restartGame);

  // Start when page loads
  window.onload = restartGame;

