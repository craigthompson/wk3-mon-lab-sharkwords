import { guessedEntireWord } from "./word.js";

/**
 * Disables all of the guess buttons.
 */
function disableGuessButtons() {
  const guessButtons = document.querySelector("#letter-buttons").childNodes;
  guessButtons.forEach((btn) => (btn.disabled = true));
}

/**
 * Displays the given message in the game status element.
 *
 * @param {*} message
 */
function displayGameStatus(message) {
  document.querySelector("#game-status").innerText = message;
}

function indicateLoss() {
  document.querySelector("body").classList.add("user-lost");
}

function indicateWin() {
  document.querySelector("body").classList.add("user-won");
}

/**
 * Checks if user has made 5 wrong guesses and then ends the game, or if the user has guessed all of the
 * letters of the word. If niether, than does nothing.
 *
 * @param {*} letterBoxes
 * @param {*} numWrong
 */
function checkEndOfGame(letterBoxes, numWrong) {
  if (numWrong === 5) {
    disableGuessButtons();
    displayGameStatus("You lose! 😔");
    indicateLoss();
  } else {
    if (guessedEntireWord(letterBoxes)) {
      disableGuessButtons();
      displayGameStatus("You win! 🎉");
      indicateWin();
    }
  }
}

export default checkEndOfGame;
